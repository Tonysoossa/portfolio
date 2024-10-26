"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Projets", path: "#projects" },
    { name: "A Propos", path: "#resume" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-blue-400");
        if (link.getAttribute("href")?.slice(1) === current) {
          link.classList.add("text-blue-400");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="https://github.com/Tonysoossa/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold flex"
          >
            Tony's Portfolio
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 ml-2
             "
            />
          </a>

          <div className="flex space-x-2 md:space-x-6 xs:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className="hover:text-blue-400 transition-colors"
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
