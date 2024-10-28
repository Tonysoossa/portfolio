'use client'
import Image from "next/image";
import TechSlider from "./projects/TechSlider";
import TechList from "./projects/TechList";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    title: "Kasa ?",
    description: {
      fr: "description en français",
      en: "description in English"
    },
    date: "2024",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Argent-bank ? ",
    description: {
      fr: "description en français",
      en: "description in English"
    },
    date: "2024",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "old project api?",
    description: {
      fr: "description en français",
      en: "description in English"
    },
    date: "2023",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
];

const technNames = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "RESTful APIs" },
  { name: "Git" },
  { name: "Redux" },
  { name: "Postman" },
  { name: "Tailwind CSS" },
  { name: "Chakra UI" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Sass" },
];

export default function Projects() {
  const { language } = useLanguage();
  projects.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  
  return (
    <div className="space-y-16">
      <h1 className="text-4xl font-bold text-center">
        {language === 'fr' ? 'Mes Projets' : 'My Projects'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description[language]}</p>
              <div className="flex gap-3 justify-center">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  {language === 'fr' ? 'Voir le Projet' : 'View Project'}
                </a>
                <span>|</span>
                <a
                  href={project.github}
                  className="text-blue-400 hover:underline"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <p className="mb-3 -mt-5 mr-4 flex flex-row-reverse text-gray-400">
              {project.date}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold flex justify-center ">
        {language === 'fr' ? 'Mes outils de travail' : 'My Work Tools'}
      </h1>
      <TechSlider />
      <TechList technName={technNames} />
    </div>
  );
}