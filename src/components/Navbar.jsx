import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import NAVBAR_LINKS from "../constants/navbarLinks";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full flex items-center justify-between p-4 transition-colors duration-300 shadow-lg z-50">
      {/* Logo */}
      <h1 className="header text-xl md:font-bold transition-colors duration-300">
        YaferDev
      </h1>

      {/* Dark Mode Toggle for Small Screens */}
      <div
        className="md:hidden flex items-center space-x-2 cursor-pointer"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <>
            <Sun size={28} />
          </>
        ) : (
          <>
            <Moon size={28} />
          </>
        )}
      </div>

      {/* Menu Icon for Mobile */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen mobile-menu flex flex-col items-center justify-center space-y-8 z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Links */}
        {NAVBAR_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="link text-2xl font-bold uppercase hover:text-blue-600 dark:hover:text-amber-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Links for Desktop */}
      <ul className="hidden md:flex items-center space-x-4">
        {NAVBAR_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="link uppercase hover:text-blue-600 dark:hover:text-amber-300 leading-relaxed font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle for Desktop */}
      <div
        className="hidden md:flex items-center space-x-2 cursor-pointer"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <>
            <Sun size={28} />
          </>
        ) : (
          <>
            <Moon size={28} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
