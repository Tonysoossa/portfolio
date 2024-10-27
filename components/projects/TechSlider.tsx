"use client";
import React, { useState, useRef, useEffect } from "react";
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
    paddingBottom: 10,
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) / 1.2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      className="w-full overflow-hidden rounded-2xl dark:bg-gray-800 pt-5 cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={sliderRef}
    >
      <div className={`flex gap-2 w-max ${isDragging ? '' : 'animate-slide'}`}>
        {[...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="w-24 flex-shrink-0 pointer-events-none"
            style={{
              paddingTop: tech.paddingTop || 0,
              paddingBottom: tech.paddingBottom || 0,
              paddingLeft: tech.paddingLeft || 0,
              paddingRight: tech.paddingRight || 0,
            }}
          >
            <Image
              src={tech.logo}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;