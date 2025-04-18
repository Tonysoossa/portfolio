import React from 'react';

interface Technology {
  name: string;
}

interface TechListProps {
  technName: Technology[];
}

const TechList: React.FC<TechListProps> = ({ technName }) => {
  return (
    <div className="p-4 relative -top-16 bg-gray-800 rounded-b-2xl shadow-lg ">
      <div className="flex m-auto justify-center flex-wrap gap-3 max-w-3xl">
        {technName.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechList;