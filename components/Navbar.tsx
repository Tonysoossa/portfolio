"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: language === "fr" ? "Accueil" : "Home", path: "#home" },
    { name: language === "fr" ? "Projets" : "Projects", path: "#projects" },
    { name: language === "fr" ? "À Propos" : "About", path: "#resume" },
    { name: language === "fr" ? "Contact" : "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = Array.from(document.querySelectorAll("section"));

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial pour définir la section active
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      const navbarHeight = 64;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-gray-800 text-gray-100 fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="https://github.com/Tonysoossa/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold flex items-center"
          >
            Tony's Portfolio
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6 ml-2" />
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 text-gray-200 transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-700 text-gray-200 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLanguage} className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.path.slice(1) ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
