import React from "react";
import Image from "next/image";

interface Technology {
  name: string;
  logo: string;
  width: number;
  height: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const technologies: Technology[] = [
  {
    name: "JavaScript",
    logo: "/logos/techslider/javascript.svg",
    width: 80,
    height: 100,
  },
  {
    name: "React",
    logo: "/logos/techslider/react.svg",
    width: 75,
    height: 100,
    paddingBottom: 10,
  },
  {
    name: "TypeScript",
    logo: "/logos/techslider/typescript.svg",
    width: 75,
    height: 100,
  },
  {
    name: "Next.js",
    logo: "/logos/techslider/nextjs.svg",
    width: 75,
    height: 100,
  },
  {
    name: "Node.js",
    logo: "/logos/techslider/nodejs.svg",
    width: 105,
    height: 120,
  },
  {
    name: "RESTfulAPIs",
    logo: "/logos/techslider/restfulapi.svg",
    width: 70,
    height: 70,
    paddingTop: 15,
    paddingBottom: 15,
  },
  { name: "Git", logo: "/logos/techslider/git.svg", width: 75, height: 100 },
  {
    name: "Redux",
    logo: "/logos/techslider/redux.svg",
    width: 75,
    height: 100,
  },
  {
    name: "PostMan",
    logo: "/logos/techslider/postman.svg",
    width: 75,
    height: 100,
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/techslider/tailwind.svg",
    width: 75,
    height: 100,
  },
  {
    name: "ChakraUI",
    logo: "/logos/techslider/chakraui.svg",
    width: 75,
    height: 100,
  },
  {
    name: "HTML5",
    logo: "/logos/techslider/html5.svg",
    width: 75,
    height: 100,
  },
  { name: "CSS", logo: "/logos/techslider/css3.svg", width: 75, height: 100 },
  { name: "SASS", logo: "/logos/techslider/sass.svg", width: 75, height: 100 },
];

const TechSlider: React.FC = () => {
  return (
    <div className="w-full flex  rounded-full overflow-hidden dark:bg-gray-800 pt-5">
      <div className="flex gap-2 animate-slide">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="w-24 flex-shrink-0"    style={{
            paddingTop: tech.paddingTop || 0,
            paddingBottom: tech.paddingBottom || 0,
            paddingLeft: tech.paddingLeft || 0,
            paddingRight: tech.paddingRight || 0,
          }}>
            <Image
              src={tech.logo}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
              padding-top={tech.paddingTop}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
