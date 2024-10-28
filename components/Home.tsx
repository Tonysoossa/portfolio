"use client";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { language } = useContext(LanguageContext);

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl  mx-auto">
      <h1 className="text-5xl md:text-7xl text-center font-bold mb-4 text-animated dark:text-white h-24 mt-20">
        Servanin Tony
      </h1>
      <h2 className="text-3xl md:text-5xl dark:text-blue-400 mb-12 sm:mb-6 text-center text-animated">
        {language === "fr"
          ? "Développeur Frontend Javascript React"
          : "Javascript React Frontend Developer"}
      </h2>
      <p className="text-center text-lg md:text-2xl max-w-4xl mb-8 text-fadeInUp dark:text-gray-300">
        {language === "fr"
          ? "Originaire et résidant à Lyon, France, j'ai 25 ans et me forme au développement web depuis novembre 2022, avec pour ambition de devenir développeur front-end. Récemment, j'ai obtenu un diplôme de niveau 5 en tant qu'intégrateur web. Ici, je vous présente certains projets que j'ai réalisés ainsi que des détails sur mes compétences et aspirations."
          : "Originally from and residing in Lyon, France, I'm 25 years old and have been training in web development since November 2022, with the ambition of becoming a front-end developer. I recently obtained a level 5 diploma as a web integrator. Here, I present some projects I've completed as well as details about my skills and aspirations."}
      </p>
      <button
        onClick={handleScrollToProjects}
        className="flex text-justifyp-2 h-14 w-8 bg-gray-600 text-white rounded-full hover:bg-blue-700 transition-colors text-fadeInUp"
      >
        <FontAwesomeIcon
          icon={faArrowDownLong}
          size="2xl"
          className="pt-4 animate-bounce"
        />
      </button>
    </div>
  );
}
