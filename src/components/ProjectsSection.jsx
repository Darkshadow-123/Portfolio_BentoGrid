import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

const DEFAULT_ITEMS = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-4 w-4 text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-4 w-4 text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-4 w-4 text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns.',
    id: 4,
    icon: <FiLayout className="h-4 w-4 text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components coming soon!',
    id: 5,
    icon: <FiCode className="h-4 w-4 text-white" />
  }
];

const GAP = 16;
const DRAG_BUFFER = 40;
const VELOCITY_THRESHOLD = 500;
const SPRING = { type: 'spring', stiffness: 260, damping: 28 };

export function ProjectsSection({
  items = DEFAULT_ITEMS,
  baseWidth = '100%',
  autoplay = true,
  autoplayDelay = 6000,
  pauseOnHover = false,
  loop = true,
  round = false
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const carouselItems = useMemo(
    () => (loop ? [...items, items[0]] : items),
    [items, loop]
  );

  const trackItemOffset = itemWidth + GAP;

  /* Resize handling */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const padding = 32;
      setItemWidth(entry.contentRect.width - padding);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Hover pause */
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const el = containerRef.current;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [pauseOnHover]);

  /* Autoplay */
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;

    const id = setInterval(() => {
      setCurrentIndex(i => {
        if (i === carouselItems.length - 1) return loop ? 0 : i;
        return i + 1;
      });
    }, autoplayDelay);

    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, isHovered, loop, carouselItems.length, pauseOnHover]);

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      requestAnimationFrame(() => setIsResetting(false));
    }
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;

    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex(i => Math.min(i + 1, carouselItems.length - 1));
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex(i => Math.max(i - 1, 0));
    }
  };

  const transition = isResetting ? { duration: 0 } : SPRING;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 mt-6 ${
        round ? 'rounded-full border border-white' : 'rounded-2xl border border-[#222]'
      }`}
      style={{
        minWidth: '100%',
        width: baseWidth,
        height: round ? baseWidth : 380
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        dragElastic={0.12}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={transition}
        onAnimationComplete={handleAnimationComplete}
        style={{
          x,
          gap: GAP,
          perspective: 800,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`
        }}
      >
        {carouselItems.map((item, index) => {
          const rotateY = useTransform(
            x,
            [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset
            ],
            [60, 0, -60],
            { clamp: false }
          );

          return (
            <motion.div
              key={`${item.id}-${index}`}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? 'items-center justify-center text-center bg-[#060010]'
                  : 'items-start justify-between bg-[#222] border border-[#222] rounded-xl'
              } cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: 323,
                rotateY,
                borderRadius: round ? '50%' : undefined
              }}
            >
              <div className={round ? '' : 'p-5'}>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#060010]">
                  {item.icon}
                </span>
              </div>

              <div className="p-5">
                <h3 className="mb-1 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
