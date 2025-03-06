"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  const { translations } = useLanguage();
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCVBtn = () => {
    const link = document.createElement("a");
    link.href = "/pdf/cv.pdf";
    link.setAttribute("download", "CV-Servanin-Tony");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-7xl text-center font-bold text-animated text-white mt-10 md:mt-20 mb-6">
        Servanin Tony
      </h1>
      <h2 className="text-3xl md:text-4xl text-blue-400 mb-4 sm:mb-6 text-center text-fadeInUp lg:whitespace-nowrap">
        {translations.home.title}
      </h2>
      <p className="text-center text-xl md:text-2xl mb-8 text-fadeInUp text-gray-300">
        {translations.home.introduction}
      </p>
      <section className="text-fadeInUp">
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center mt-16 mb-12 text-center">
          {translations.resume.cv}
        </h2>
        <div className="flex flex-wrap gap-8 justify-center pb-10 mb-10">
          <button
            onClick={handleCVBtn}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center"
          >
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="mr-2 animate-bounce"
            />
            {translations.resume.downloadCv}
          </button>
          <Link href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center">
              {translations.resume.seeCv}
              <FontAwesomeIcon icon={faEye} className="ml-2 animate-blink" />
            </button>
          </Link>
          <a
            href="https://www.linkedin.com/in/tony-servanin-90502a293/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mr-2 animate-fade-out"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Tonysoossa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center"
          >
            Github
            <FontAwesomeIcon icon={faGithub} className="ml-2 animate-shake" />
          </a>
        </div>
      </section>
      <button
        onClick={handleScrollToProjects}
        aria-label={translations.home.buttonLabel}
        className="flex h-14 w-8 bg-gray-600 text-white rounded-full hover:bg-blue-700 transition-colors text-fadeInUp mb-10"
      >
        <FontAwesomeIcon
          icon={faArrowDownLong}
          size="2xl"
          className="pt-4 pl-1 flex animate-bounce"
        />
      </button>
    </div>
  );
}
