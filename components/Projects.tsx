import Image from "next/image";

const projects = [
  {
    title: "Kasa ?",
    description: "description",
    date: "date",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Argent-bank ? ",
    description: "description",
    date: "date",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "old project api?",
    description: "description",
    date: "date",
    image: "/icons/placeholder.svg",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
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
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="mb-2">{project.date}</p>
              <div className="flex gap-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}