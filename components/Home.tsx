"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl text-center font-bold mb-4 text-animated dark:text-white h-24">
        Servanin Tony
      </h1>
      <h2 className="text-3xl md:text-5xl dark:text-blue-400 mb-12 sm:mb-6 text-center text-animated">
        Javascript React Frontend Developer
      </h2>
      <p className="text-center text-lg md:text-2xl max-w-4xl mb-8 text-fadeInUp dark:text-gray-300">
        Originaire et résidant à Lyon, France, j'ai 25 ans et me forme au
        développement web depuis novembre 2022, avec pour ambition de devenir
        développeur front-end. Récemment, j'ai obtenu un diplôme de niveau 5 en
        tant qu'intégrateur web. Ici, je vous présente certains projets que j'ai
        réalisés ainsi que des détails sur mes compétences et aspirations.
      </p>
      <button
        onClick={toggleDarkMode}
        className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-8 h-8"/>
      </button>
    </div>
  );
}
