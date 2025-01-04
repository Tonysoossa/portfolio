"use client";

import {  useLanguage } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { translations } = useLanguage();
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl  mx-auto">
      <h1 className="text-5xl md:text-7xl text-center font-bold mb-4 text-animated text-white h-24 mt-20">
        Servanin Tony
      </h1>
      <h2 className="text-3xl md:text-5xl text-blue-400 mb-12 sm:mb-6 text-center text-fadeInUp lg:whitespace-nowrap">
        {translations.home.title}
      </h2>
      <p className="text-center text-lg md:text-2xl max-w-4xl mb-8 text-fadeInUp text-gray-300">
        {translations.home.introduction}
      </p>
      <button
        onClick={handleScrollToProjects}
        aria-label={translations.home.buttonLabel}
        className=" flex h-14 w-8 bg-gray-600 text-white rounded-full hover:bg-blue-700 transition-colors text-fadeInUp"
      >
        <FontAwesomeIcon
          icon={faArrowDownLong}
          size="2xl"
          className="pt-4 pl-[0.5px] animate-bounce"
        />
      </button>
    </div>
  );
}
