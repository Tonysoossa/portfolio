"use client";
import Image from "next/image";
import TechSlider from "./projects/TechSlider";
import TechList from "./projects/TechList";
import { useLanguage } from "../contexts/LanguageContext";

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
  const { translations } = useLanguage();
  const projects = [
    {
      title: "Kasa",
      description: translations.projects.boxes.description1,
      techno: ["React", "SASS "],
      date: "2024",
      image: "/project_photo/kasa.webp",
      link: "#",
      github: "https://github.com/Tonysoossa/OCR_Kaza",
    },
    {
      title: "Argent-bank",
      description: translations.projects.boxes.description2,
      techno: ["Typescript", "Redux Toolkit", "MongoDB"],
      date: "2024",
      image: "/project_photo/argent-bank.webp",
      link: "#",
      github: "https://github.com/Tonysoossa/project_10-Argent-Bank",
    },
    {
      title: "Car-Hub",
      description: translations.projects.boxes.description3,
      techno: ["Next.js", "Typescript", "Tailwind", "RESTful API"],
      date: "2023",
      image: "/project_photo/car-hub.png",
      link: "https://car-showcase-project-ivory.vercel.app/",
      github: "https://github.com/Tonysoossa/car_showcase-project",
    },
  ];

  projects.sort((a, b) => parseInt(b.date) - parseInt(a.date));

  return (
    <div className="space-y-16">
      <h1 className="text-4xl font-bold text-center">
        {translations.projects.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105  flex flex-col justify-between"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 flex-grow">{project.description}</p>
            </div>

            <div className="flex justify-center items-center gap-2 flex-wrap">
              {project.techno.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 pt-[1px] pb-[2px] bg-gray-700 text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3">
                {project.link !== "#" && (
                  <a
                    target="_blank"
                    href={project.link}
                    className="text-blue-400 hover:underline md:no-underline underline"
                  >
                    {translations.projects.title}
                  </a>
                )}
                {project.link !== "#" && <span>|</span>}
                <a
                  target="_blank"
                  href={project.github}
                  className="text-blue-400 hover:underline md:no-underline underline"
                >
                  Github Repo
                </a>
              </div>
              <p className="text-gray-400 text-sm pt-1">{project.date}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold flex justify-center text-center ">
        {translations.projects.tools}
      </h1>
      <TechSlider />
      <TechList technName={technNames} />
    </div>
  );
}
