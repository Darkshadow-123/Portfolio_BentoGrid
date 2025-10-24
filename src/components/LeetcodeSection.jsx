import React, { useEffect, useState } from "react";
import { Smile, Hash, ThumbsUp, BicepsFlexed } from "lucide-react";

export function LeetcodeSection() {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const username = "priyanshrajgupta"; // Replace with your actual LeetCode username
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalSolved) {
          setStats({
            totalSolved: data.totalSolved || 0,
            easySolved: data.easySolved || 0,
            mediumSolved: data.mediumSolved || 0,
            hardSolved: data.hardSolved || 0,
          });
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback to default values if API fails
        setStats({
          totalSolved: 250,
          easySolved: 100,
          mediumSolved: 120,
          hardSolved: 30,
        });
        setLoading(false);
      });
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      icon: Hash,
      label: "Total",
      value: stats.totalSolved,
      color: "purple",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Smile,
      label: "Easy",
      value: stats.easySolved,
      color: "green",
      bgColor: "bg-green-500/20",
      textColor: "text-green-400",
      borderColor: "border-green-500/30"
    },
    {
      icon: ThumbsUp,
      label: "Medium",
      value: stats.mediumSolved,
      color: "yellow",
      bgColor: "bg-yellow-500/20",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: BicepsFlexed,
      label: "Hard",
      value: stats.hardSolved,
      color: "red",
      bgColor: "bg-red-500/20",
      textColor: "text-red-400",
      borderColor: "border-red-500/30"
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full p-4 overflow-hidden">
        <div className="text-center text-white">
          <h2 className="text-xl font-bold mb-2">LeetCode</h2>
          <p className="text-sm opacity-70">Loading...</p>
        </div>
      </div>
    );
  }

  const currentData = slides[currentSlide];
  const Icon = currentData.icon;

  return (
    <div className="relative  flex flex-col items-center justify-center h-full w-full text-white overflow-visible ">
      {/* Title */}
      <h2 className="text-lg pb-3 font-bold mb-4 z-10">LeetCode</h2>
      
      {/* Sliding Content */}
      <div className="relative w-full pt-2 flex-1 flex items-center justify-center">
        {slides.map((slide, index) => {
          const SlideIcon = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 transform translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 transform -translate-x-full'
                  : 'opacity-0 transform translate-x-full'
              }`}
            >
              <p className={`text-lg ${slide.textColor} mb-0`}>{slide.label}</p>
              <p className="text-3xl font-bold">{slide.value}</p>
            </div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-2 mt-4 pt-7  z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-3 bg-purple-500'
                : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Icon className="h-16 w-16 text-white" />
      </div>
    </div>
  );
}