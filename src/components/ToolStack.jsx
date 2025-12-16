import GlassIcons from "./GlassIcons";
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from "react-icons/fi";
export function ToolStack() {
const items = [
  { icon: <FiFileText />, color: 'transparent', label: 'Files' },
  { icon: <FiBook />, color: 'transparent', label: 'Books' },
  { icon: <FiHeart />, color: 'transparent', label: 'Health' },
  { icon: <FiCloud />, color: 'transparent', label: 'Weather' },
  { icon: <FiEdit />, color: 'transparent', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'transparent', label: 'Stats' },
];

 return (
  <div className="flex flex-col h-full w-full items-center justify-center">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="text-4xl text-white font-extrabold text-center">
          Daily Tool Stack!
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-row h-full w-full">
        {/* Left Side - Icons */}
        <div className="flex flex-col h-full items-center text-left p-6 gap-10 sm:gap-12 md:gap-14">
          <GlassIcons items={items} />
        </div>

        {/* Right Side - Spotify Card */}
        <div className="flex flex-col items-center p-2 mt-8 w-full h-1/3 rounded-lg shadow-lg">
          <div className="col-span-2 row-span-1">
            <a
              href="https://open.spotify.com/playlist/0FNypq26NL5uuKXbWDDiaJ"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-gradient-to-r from-violet-500 to-violet-400 rounded-lg h-full flex flex-col sm:flex-row items-center hover:from-violet-600 hover:to-violet-500 transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-1 sm:p-0">
                <div className="w-30 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-black rounded-md mb-2 sm:mb-0 sm:mr-3 md:mr-4 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/a7/71/5c/a7715c7800d8c788a746667733f4b591.jpg"
                    alt="Playlist Cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-1">
                    {/* Music Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-music w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-black mr-1 sm:mr-2 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>

                    <h1 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold text-black leading-none">
                      Locked In
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="mb-1 sm:mb-2 font-bold text-[10px] sm:text-xs md:text-sm lg:text-sm text-black/80 leading-tight">
                    The cost of not locking in is the rest of your life clocking in.
                  </div>

                  {/* Footer Text */}
                  <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] text-black font-bold leading-none">
                    Click to open in Spotify
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
);
};

