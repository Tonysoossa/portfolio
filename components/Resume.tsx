"use client";
import { Education } from "./resume/Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  const skills = [
    "React",
    "TypeScript",
    "Redux",
    "Next.js",
    "Node.js",
    "CSS/SASS",
    "Tailwind CSS",
    "ChakraUI",
    "Git",
    "RESTful APIs",
  ];

  const personalSkills = [
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
  ];

  const experiences = [
    {
      title: "Agent de maintenance",
      company: "SNCF",
      period: "Sept 2014 - Août 2017",
      responsibilities: [
        "Formation en alternance",
        "Micro-mécanique et soudure sur carte électronique",
        "Maintenance Moto-ventillateur et tests en cabine",
      ],
      competences: [
        "Travail en équipe",
        "Importance de la sécurité",
        "Responsabilité",
        "Introduction a la hiérarchie professionnelle",
      ],
    },
    {
      title: "Sportif sponsorisé",
      company: "ABS Lyon",
      period: "Sept 2017 - Dec 2023",
      responsibilities: [
        "Sponsorisé par un skateshop Lyonnais",
        "Skateur flowteam chez DC skateboarding, Fred Perry",
      ],
      competences: [
        "Discipline et Rigueur",
        "Communication, savoir se vendre",
        "Gestion du stress et prise de risques",
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
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 flex justify-center">
        À propos de moi
      </h1>
      <section className="mb-12 flex flex-col gap-4 justify-evenly">
        <h2 className="flex justify-center text-2xl font-semibold mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <h2 className="flex justify-center text-2xl font-semibold mb-3 mt-5">
          Compétences
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {personalSkills.map((pSkill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {pSkill}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="flex text-2xl font-semibold mb-4 justify-center">
          Expérience Professionnelle
        </h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-blue-400">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-300">
                  {resp}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold pb-2 pt-2">
              Compétence aquise
            </h3>
            <ul className=" list-disc list-inside">
              {exp.competences.map((resp, idx) => (
                <li key={idx} className="text-gray-300">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2 className="flex justify-center text-2xl font-semibold mb-4 mt-8">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
          <Education
            src="/logo/sncf.webp"
            alt="SNCF Logo"
            link="/"
            company="SNCF"
            degres="BEP"
            date="2016"
            imageClassName="w-16 -pt-1 pb-1"
          />
          <Education
            src="/logo/udemy.webp"
            alt="SNCF Logo"
            link="https://www.udemy.com/"
            company="Udemy"
            degres="HTML/CSS/Javascipt formation en ligne"
            date="2022-2023"
            imageClassName="w-[7rem] pt-1 pb-2"
          />
          <Education
            src="/logo/codewars.webp"
            alt="SNCF Logo"
            link="https://www.codewars.com/"
            company="Codewars"
            degres="5 kyu"
            date="2022-Aujourd'hui"
            imageClassName="w-[8rem] pt-1 pb-2 rounded-[14px]"
          />
          <Education
            src="/logo/openclassroom.webp"
            alt="SNCF Logo"
            link="https://openclassrooms.com/fr/"
            company="Openclassroom"
            degres="Intégrateur Web Javascript
            diplôme de niveau 5"
            date="2024"
            imageClassName="w-[7rem] h-6 top-5"
          />
        </div>
      </section>
      <section>
        <h2 className="flex justify-center text-3xl font-bold mb-6 mt-12 text-gray-100">
          Mes centres d'intérêt
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              Professionnels
            </h3>
            <p className="text-gray-300">
              Passionné par le développement front-end, j'aspire à me
              perfectionner en travaillant sur des projets utilisant diverses
              technologies et bibliothèques. Mon objectif est de maîtriser
              chaque aspect des outils que j'emploie, tout en élargissant mes
              compétences vers le développement full-stack. Je suis ouvert à
              toute opportunité professionnelle qui me permettra de réaliser ces
              ambitions, que ce soit en alternance, en CDI ou en freelance.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              Personnels
            </h3>
            <p className="text-gray-300">
              En dehors du développement, je pratique régulièrement du sport,
              notamment le skateboard et principalement la boxe anglaise. Ces
              passions m’aident à maintenir un équilibre dans ma vie et à rester
              concentré, déterminé et créatif. De nature plutôt calme et
              introvertie, j'apparais souvent extraverti grâce à ma manière de
              parler avec assurance et ma facilité à dialoguer.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="flex justify-center text-2xl font-semibold mb-6 mt-8">
          Curriculum vitæ
        </h2>
        <div className="flex gap-10 justify-center mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors items-center"
            onClick={handleCVBtn}
          >
            <FontAwesomeIcon icon={faFileArrowDown} className="mr-2" />
            Télécharger mon CV
          </button>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors">
              Voir mon CV
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-2"
              />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
