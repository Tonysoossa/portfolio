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
    width: 80,
    height: 100,
    paddingTop: 10,
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
    paddingTop: 35,
  },
  {
    name: "RESTful APIs",
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
    name: "Postman",
    logo: "/logos/techslider/postman.svg",
    width: 75,
    height: 100,
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/techslider/tailwind.svg",
    width: 95,
    height: 100,
  },
  {
    name: "Chakra UI",
    logo: "/logos/techslider/chakraui.svg",
    width: 75,
    height: 100,
  },
  {
    name: "HTML5",
    logo: "/logos/techslider/html5.svg",
    width: 75,
    height: 100,
    paddingTop: 5,
  },
  { name: "CSS3", logo: "/logos/techslider/css3.svg", width: 85, height: 100 },
  {
    name: "Sass",
    logo: "/logos/techslider/sass.svg",
    width: 85,
    height: 100,
    paddingTop: 18,
  },
];

const TechSlider: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const handleScroll = () => {
        if (slider.scrollLeft === 0) {
          slider.scrollLeft = slider.scrollWidth / 2;
        } else if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 1;
        }
      };
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
      className="w-full overflow-hidden rounded-t-2xl bg-gray-800  cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={sliderRef}
    >
      <div
        className={`flex space-x-4 w-max ${isDragging ? "" : "animate-slide"}`}
      >
        {[
          ...technologies,
          ...technologies,
          ...technologies,
          ...technologies,
          ...technologies,
        ].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-24 flex-shrink-0 no-highlights"
            style={{
              paddingTop: tech.paddingTop || 0,
              paddingBottom: tech.paddingBottom || 0,
              paddingLeft: tech.paddingLeft || 0,
              paddingRight: tech.paddingRight || 0,
            }}
          >
            <div
              className="relative -m-5"
              style={{ width: tech.width, height: tech.height }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
