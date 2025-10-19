import GlassIcons from "./GlassIcons";
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from "react-icons/fi";
export function ProfilePicture() {
const items = [
  { icon: <FiFileText />, color: 'transparent', label: 'Files' },
  { icon: <FiBook />, color: 'transparent', label: 'Books' },
  { icon: <FiHeart />, color: 'transparent', label: 'Health' },
  { icon: <FiCloud />, color: 'transparent', label: 'Weather' },
  { icon: <FiEdit />, color: 'transparent', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'transparent', label: 'Stats' },
];

  return (
  <div className="flex flex-col items-start justify-evenly h-full p-4 text-left">
    <GlassIcons items={items} />
  </div>  
  );
};

