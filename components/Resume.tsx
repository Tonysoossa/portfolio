"use client";
import { Education } from "./resume/Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Resume() {
  const { translations } = useLanguage();

  // const skillsTranslations = {
  //   en: [
  //     "Communication",
  //     "Proactivity",
  //     "Patience",
  //     "Autonomy",
  //     "Deliberate",
  //     "Rigor",
  //     "Ambition",
  //     "Perseverance",
  //     "Initiative",
  //     "Optimism",
  //   ],
  //   fr: [
  //     "Communication",
  //     "Proactivité",
  //     "Patience",
  //     "Autonomie",
  //     "Délibéré",
  //     "Rigueur",
  //     "Ambition",
  //     "Persévérance",
  //     `Esprit d'initiative`,
  //     "Optimisme",
  //   ],
  // };

  // const personalSkills = language === "en" ? skillsTranslations.en : skillsTranslations.fr;

  // const experiences = [
  //   {
  //     title: language === "fr" ? "Agent de maintenance" : "Maintenance Agent",
  //     company: "SNCF",
  //     period:
  //       language === "fr" ? "Sept 2014 - Août 2017" : "Sept 2014 - Aug 2017",
  //     responsibilities: [
  //       language === "fr"
  //         ? "Formation en alternance"
  //         : "Apprenticeship training",
  //       language === "fr"
  //         ? "Micro-mécanique et soudure sur carte électronique"
  //         : "Micro-mechanics and soldering on electronic boards",
  //       language === "fr"
  //         ? "Maintenance Moto-ventillateur et tests en cabine"
  //         : "Motor-fan maintenance and cabin testing",
  //     ],
  //     competences: [
  //       language === "fr" ? "Travail en équipe" : "Teamwork",
  //       language === "fr" ? "Importance de la sécurité" : "Safety importance",
  //       language === "fr" ? "Responsabilité" : "Responsibility",
  //       language === "fr"
  //         ? "Introduction a la hiérarchie professionnelle"
  //         : "Introduction to professional hierarchy",
  //     ],
  //   },
  //   {
  //     title: language === "fr" ? "Sportif sponsorisé" : "Sponsored Athlete",
  //     company: "ABS Lyon",
  //     period: "Sept 2017 - Oct 2022",
  //     responsibilities: [
  //       language === "fr"
  //         ? "Sponsorisé par un skateshop Lyonnais"
  //         : "Sponsored by a Lyon skateshop",
  //       language === "fr"
  //         ? "Skateur flowteam chez DC skateboarding, Fred Perry"
  //         : "Flow team skater for DC skateboarding, Fred Perry",
  //     ],
  //     competences: [
  //       language === "fr" ? "Discipline et Rigueur" : "Discipline and Rigor",
  //       language === "fr"
  //         ? "Communication, savoir se vendre"
  //         : "Communication, self-promotion",
  //       language === "fr"
  //         ? "Gestion du stress et prise de risques"
  //         : "Stress management and risk-taking",
  //     ],
  //   },
  //   {
  //     title:
  //       language === "fr"
  //         ? "Apprentissage autodidacte"
  //         : "Self-taught learning",
  //     company: "Cours en ligne",
  //     period: language === "fr" ? "Déc 2022 - Aujourd'hui" : "Dec 2022 - Today",
  //     responsibilities: [
  //       language === "fr"
  //         ? "Suivi de cours en ligne sur des plateformes telles que Udemy, Codecademy, FreeCodeCamp, YouTube."
  //         : "Followed online courses on platforms such as Udemy, Codecademy, FreeCodeCamp, YouTube.",
  //       language === "fr"
  //         ? "Prise de connaissance de sites open source, comme MDN, Stack Overflow, W3Schools, GitHub."
  //         : "Familiarized with open-source sites, such as MDN, Stack Overflow, W3Schools, GitHub.",
  //     ],
  //     competences: [
  //       language === "fr"
  //         ? "Résolution de problèmes et débogage"
  //         : "Problem-solving and debugging",
  //       language === "fr"
  //         ? "Utilisation des ressources documentaires"
  //         : "Using documentation resources",
  //       language === "fr"
  //         ? "Autonomie et gestion du temps"
  //         : "Self-management and time organization",
  //       language === "fr"
  //         ? "Trouver des solutions et s'adapter"
  //         : "Finding solutions and adapting",
  //     ],
  //   },
  // ];

  const handleCVBtn = () => {
    const link = document.createElement("a");
    link.href = "/pdf/cv.pdf";
    link.setAttribute("download", "CV-Servanin-Tony");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="max-w-4xl mx-auto">
      <section className="mb-12 flex flex-col gap-4 justify-evenly">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center">
          {translations.resume.about}
        </h1>
        <h2 className="flex justify-center text-3xl md:text-4xl font-semibold mb-6 mt-5">
          {translations.resume.skills}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {/* {personalSkills.map((pSkill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
            >
              {pSkill}
            </span>
          ))} */}
        </div>
      </section>
      <section>
        <h2 className="flex text-3xl md:text-4xl font-semibold mb-12 justify-center text-center">
          {translations.resume.xp}
        </h2>
        <div className="flex flex-wrap justify-between gap-8">
          {/* {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-[calc(50%-1rem)]"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>

              <ul className="list-disc list-inside pl-0">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mr-2">•</span> <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold pb-2 pt-2">
                {language === "fr" ? "Compétences acquises" : "Acquired Skills"}
              </h3>

              <ul className="list-disc list-inside pl-0">
                {exp.competences.map((comp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mr-2">•</span> <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold m-10 flex justify-center">
          {translations.resume.education.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Education
            src="/logos/education/sncf.webp"
            alt="SNCF Logo"
            company="SNCF"
            degres="BEP"
            date="2016"
            imageClassName="w-16 cursor-default -pt-1 pb-1"
          />
          <Education
            src="/logos/education/udemy.webp"
            alt="Udemy Logo"
            link="https://www.udemy.com/"
            company="Udemy"
            degres={translations.resume.education.degres.Sncf}
            date="2022-2023"
            imageClassName="w-[7rem] pt-1 pb-2"
          />
          <Education
            src="/logos/education/codewars.webp"
            alt="Codewars Logo"
            link="https://www.codewars.com/users/soossa"
            company="Codewars"
            degres="5 kyu"
            date={translations.resume.education.dateCodeWars}
            imageClassName="w-[8rem] pt-1 pb-2 rounded-[14px]"
          />
          <Education
            src="/logos/education/openclassroom.webp"
            alt="OpenClassrooms Logo"
            link="https://openclassrooms.com/fr/"
            company="OCR"
            degres={translations.resume.education.degres.ocr}
            date="2024"
            imageClassName="w-[7rem] h-6 top-5"
            diplome="/pdf/diplome_int_web.pdf"
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold m-12 flex justify-center text-center text-gray-100">
          {translations.resume.interests}
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              {translations.resume.pro.title}
            </h3>
            <p className="text-gray-300">
              {translations.resume.pro.description}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              {translations.resume.perso.title}
            </h3>
            <p className="text-gray-300">
              {translations.resume.perso.description}
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center mt-16 mb-12 text-center">
          {translations.resume.cv}
        </h2>
        <div className="flex flex-wrap gap-8 justify-center pb-10">
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
            className="bg-gray-700 hover:bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center"
          >
            Github
            <FontAwesomeIcon icon={faGithub} className="ml-2 animate-shake" />
          </a>
        </div>
      </section>
    </div>
  );
}
