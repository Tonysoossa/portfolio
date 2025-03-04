"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { translations, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: translations.nav.home, path: "#home" },
    { name: translations.nav.projects, path: "#projects" },
    { name: translations.nav.about, path: "#resume" },
    { name: translations.nav.contact, path: "#contact" },
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
    handleScroll();
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
      const paddingTop = 20;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight - paddingTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="https://github.com/Tonysoossa/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl lg:text-2xl font-bold flex items-center"
          >
            Tony's Portfolio
            <FontAwesomeIcon
              icon={faGithub}
              className="w-7 h-7 ml-1 animate-cat-move"
            />
          </Link>

          <div className="hidden lg:text-xl gap-0 lg:gap-4 text-sm md:flex pr-[6rem] 2xl:pr-[7rem] space-x-4 md:space-x-6">
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

          <div className="flex items-center space-x-4 text-xl lg:text-2xl">
            <button
              onClick={toggleLanguage}
              className="duration-1000 flex items-center"
            >
              <FontAwesomeIcon
                icon={faLanguage}
                className="lg:w-9 w-8 h-8 mr-2 icon-flip"
              />
              <span className="hidden md:inline ">
                {translations.nav.language}
              </span>
            </button>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 pt-[1px]" />
            </button>
          </div>
        </div>
      </div>

      {/* NOTE Mobile and Tablet Menu NOTE */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 -mt-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleClick(e, item.path)}
                  className={`block py-2 px-4 text-center hover:bg-gray-700 rounded ${
                    activeSection === item.path.slice(1) ? "text-blue-400" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
