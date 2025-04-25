// src/constants/iconConstants.js
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

export const icons = [
  { component: () => <FaReact title="React" className="text-cyan-400 mx-2" /> },
  {
    component: () => (
      <SiTailwindcss title="Tailwind CSS" className="text-teal-400 mx-2" />
    ),
  },
  {
    component: () => (
      <FaNodeJs title="Node.js" className="text-green-500 mx-2" />
    ),
  },
  {
    component: () => (
      <SiExpress title="Express" className="text-gray-300 mx-2" />
    ),
  },
  {
    component: () => <SiMysql title="MySQL" className="text-yellow-300 mx-2" />,
  },
  {
    component: () => <FaHtml5 title="HTML5" className="text-orange-500 mx-2" />,
  },
  {
    component: () => <FaCss3Alt title="CSS3" className="text-blue-400 mx-2" />,
  },
  { component: () => <FaGithub title="GitHub" className="text-white mx-2" /> },
];
export default icons;
