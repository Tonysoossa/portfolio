import Image from "next/image";
import TechSlider from "./projects/TechSlider";

const projects = [
  {
    title: "Kasa ?",
    description: "description",
    date: "2024",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Argent-bank ? ",
    description: "description",
    date: "2024",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "old project api?",
    description: "description",
    date: "2023",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  projects.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
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
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex gap-3 justify-center">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  View Project
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
      <h2 className="flex justify-center text-2xl font-semibold mb-4">
        Mes outils de travail
      </h2>
      <TechSlider />
    </div>
  );
}
