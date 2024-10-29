"use client";
import { Education } from "./resume/Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Resume() {
  const { language } = useLanguage();

  const translations = {
    en: [
      "Communication",
      "Proactivity",
      "Patience",
      "Autonomy",
      "Deliberate",
      "Rigor",
      "Ambition",
      "Perseverance",
      "Initiative",
      "Optimism",
    ],
    fr: [
      "Communication",
      "Proactivité",
      "Patience",
      "Autonomie",
      "Délibéré",
      "Rigueur",
      "Ambition",
      "Persévérance",
      `Esprit d'initiative`,
      "Optimisme",
    ],
  };

  const personalSkills = language === "en" ? translations.en : translations.fr;

  const experiences = [
    {
      title: language === "fr" ? "Agent de maintenance" : "Maintenance Agent",
      company: "SNCF",
      period: "Sept 2014 - Août 2017",
      responsibilities: [
        language === "fr"
          ? "Formation en alternance"
          : "Apprenticeship training",
        language === "fr"
          ? "Micro-mécanique et soudure sur carte électronique"
          : "Micro-mechanics and soldering on electronic boards",
        language === "fr"
          ? "Maintenance Moto-ventillateur et tests en cabine"
          : "Motor-fan maintenance and cabin testing",
      ],
      competences: [
        language === "fr" ? "Travail en équipe" : "Teamwork",
        language === "fr" ? "Importance de la sécurité" : "Safety importance",
        language === "fr" ? "Responsabilité" : "Responsibility",
        language === "fr"
          ? "Introduction a la hiérarchie professionnelle"
          : "Introduction to professional hierarchy",
      ],
    },
    {
      title: language === "fr" ? "Sportif sponsorisé" : "Sponsored Athlete",
      company: "ABS Lyon",
      period: "Sept 2017 - Dec 2023",
      responsibilities: [
        language === "fr"
          ? "Sponsorisé par un skateshop Lyonnais"
          : "Sponsored by a Lyon skateshop",
        language === "fr"
          ? "Skateur flowteam chez DC skateboarding, Fred Perry"
          : "Flow team skater for DC skateboarding, Fred Perry",
      ],
      competences: [
        language === "fr" ? "Discipline et Rigueur" : "Discipline and Rigor",
        language === "fr"
          ? "Communication, savoir se vendre"
          : "Communication, self-promotion",
        language === "fr"
          ? "Gestion du stress et prise de risques"
          : "Stress management and risk-taking",
      ],
    },
  ];

  const handleCVBtn = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.setAttribute("download", "CV-Servanin-Tony");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="max-w-4xl mx-auto">
      <section className="mb-12 flex flex-col gap-4 justify-evenly">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center">
          {language === "fr" ? "À propos de moi" : "About me"}
        </h1>
        <h2 className="flex justify-center text-3xl md:text-4xl font-semibold mb-4 mt-5">
          {language === "fr" ? "Compétences" : "Skills"}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {personalSkills.map((pSkill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
            >
              {pSkill}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="flex text-3xl md:text-4xl font-semibold mb-8 justify-center text-center">
          {language === "fr"
            ? "Expérience Professionnelle"
            : "Professional Experience"}
        </h2>
        <div className="flex flex-col justify-between  md:flex-row items-start gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>

              <ul className="list-disc list-inside pl-0">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mr-2">•</span> <span>{resp}</span>{" "}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold pb-2 pt-2">
                {language === "fr" ? "Compétences acquises" : "Acquired Skills"}
              </h3>

              <ul className="list-disc list-inside pl-0">
                {exp.competences.map((comp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mr-2">•</span>{" "}
                    {/* Utilise un span pour afficher le bullet */}
                    <span>{comp}</span> {/* Aligne le texte de la compétence */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold m-10 flex justify-center">
          {language === "fr" ? "Éducation" : "Education"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Education
            src="/logos/education/sncf.webp"
            alt="SNCF Logo"
            link="/"
            company="SNCF"
            degres="BEP"
            date="2016"
            imageClassName="w-16 -pt-1 pb-1"
          />
          <Education
            src="/logos/education/udemy.webp"
            alt="Udemy Logo"
            link="https://www.udemy.com/"
            company="Udemy"
            degres={
              language === "fr"
                ? "HTML/CSS/Javascript formation en ligne"
                : "HTML/CSS/Javascript online training"
            }
            date="2022-2023"
            imageClassName="w-[7rem] pt-1 pb-2"
          />
          <Education
            src="/logos/education/codewars.webp"
            alt="Codewars Logo"
            link="https://www.codewars.com/"
            company="Codewars"
            degres="5 kyu"
            date={language === "fr" ? "2022-Aujourd'hui" : "2022-Present"}
            imageClassName="w-[8rem] pt-1 pb-2 rounded-[14px]"
          />
          <Education
            src="/logos/education/openclassroom.webp"
            alt="OpenClassrooms Logo"
            link="https://openclassrooms.com/fr/"
            company="OCR"
            degres={
              language === "fr"
                ? "Intégrateur Web Javascript diplôme de niveau 5"
                : "Javascript Web Integrator Level 5 Diploma"
            }
            date="2024"
            imageClassName="w-[7rem] h-6 top-5"
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold m-10 flex justify-center text-center text-gray-100">
          {language === "fr" ? "Mes centres d'intérêt" : "My Interests"}
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              {language === "fr" ? "Professionnels" : "Professional"}
            </h3>
            <p className="text-gray-300">
              {language === "fr"
                ? "Passionné par le développement front-end, j'aspire à me perfectionner en travaillant sur des projets utilisant diverses technologies et bibliothèques. Mon objectif est de maîtriser chaque aspect des outils que j'emploie, tout en élargissant mes compétences vers le développement full-stack. Je suis ouvert à toute opportunité professionnelle qui me permettra de réaliser ces ambitions, que ce soit en alternance, en CDI ou en freelance."
                : "Passionate about front-end development, I aspire to improve by working on projects using various technologies and libraries. My goal is to master every aspect of the tools I use, while expanding my skills towards full-stack development. I am open to any professional opportunity that will allow me to achieve these ambitions, whether in apprenticeship, full-time employment, or freelance."}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              {language === "fr" ? "Personnels" : "Personal"}
            </h3>
            <p className="text-gray-300">
              {language === "fr"
                ? "En dehors du développement, je pratique régulièrement du sport, notamment le skateboard et principalement la boxe anglaise. Ces passions m'aident à maintenir un équilibre dans ma vie et à rester concentré, déterminé et créatif. J'aime me surpasser physiquement, et le développement web me permet de stimuler la partie intellectuelle grâce à ses défis et à sa diversité. De nature plutôt calme et introvertie, j'apparais souvent extraverti grâce à ma manière de parler avec assurance et ma facilité à dialoguer."
                : "Outside of development, I regularly practice sports, particularly skateboarding and mainly boxing. These passions help me maintain balance in my life and stay focused, determined, and creative. I love pushing my physical limits, and web development allows me to engage intellectually through its challenges and diversity. Naturally rather calm and introverted, I often appear extroverted thanks to my confident way of speaking and ease of dialogue."}
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center mt-16 mb-10">
          {language === "fr"
            ? "Curriculum vitæ et Profil Professionnel"
            : "Curriculum Vitae and Professional Profile"}
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
            {language === "fr" ? "Télécharger CV" : "Download CV"}
          </button>
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center">
              {language === "fr" ? "Voir CV" : "View CV"}
              <FontAwesomeIcon icon={faEye} className="ml-2 animate-blink " />
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
