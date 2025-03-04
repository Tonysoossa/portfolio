"use client";
import { Education } from "./resume/Education";
import { useLanguage } from "../contexts/LanguageContext";

export default function Resume() {
  const { translations } = useLanguage();

  const personalSkills = [
    translations.resume.skillsTranslations[0],
    translations.resume.skillsTranslations[1],
    translations.resume.skillsTranslations[2],
    translations.resume.skillsTranslations[3],
    translations.resume.skillsTranslations[4],
    translations.resume.skillsTranslations[5],
    translations.resume.skillsTranslations[6],
    translations.resume.skillsTranslations[7],
    translations.resume.skillsTranslations[8],
    translations.resume.skillsTranslations[9],
  ];

  const experiences = [
    {
      title: translations.resume.experiences.exp1.title,
      company: translations.resume.experiences.exp1.company,
      period: translations.resume.experiences.exp1.period,
      responsibilities: [
        translations.resume.experiences.exp1.responsibilities[0],
        translations.resume.experiences.exp1.responsibilities[1],
        translations.resume.experiences.exp1.responsibilities[2],
      ],
      competences: [
        translations.resume.experiences.exp1.competences[0],
        translations.resume.experiences.exp1.competences[1],
        translations.resume.experiences.exp1.competences[2],
        translations.resume.experiences.exp1.competences[3],
      ],
    },
    {
      title: translations.resume.experiences.exp2.title,
      company: translations.resume.experiences.exp2.company,
      period: translations.resume.experiences.exp2.period,
      responsibilities: [
        translations.resume.experiences.exp2.responsibilities[0],
        translations.resume.experiences.exp2.responsibilities[1],
      ],
      competences: [
        translations.resume.experiences.exp2.competences[0],
        translations.resume.experiences.exp2.competences[1],
        translations.resume.experiences.exp2.competences[2],
      ],
    },
    {
      title: translations.resume.experiences.exp3.title,
      company: translations.resume.experiences.exp3.company,
      period: translations.resume.experiences.exp3.period,
      responsibilities: [
        translations.resume.experiences.exp3.responsibilities[0],
        translations.resume.experiences.exp3.responsibilities[1],
      ],
      competences: [
        translations.resume.experiences.exp3.competences[0],
        translations.resume.experiences.exp3.competences[1],
        translations.resume.experiences.exp3.competences[2],
        translations.resume.experiences.exp3.competences[3],
      ],
    },
  ];

  return (
    <div id="resume">
      <section className="mb-12 flex flex-col gap-4 justify-evenly">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center">
          {translations.resume.about}
        </h1>
        <h2 className="flex justify-center text-3xl md:text-4xl font-semibold mb-6 mt-5">
          {translations.resume.skills}
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
        <h2 className="flex text-3xl md:text-4xl font-semibold mb-12 justify-center text-center">
          {translations.resume.xp}
        </h2>
        <div className="flex flex-wrap justify-between gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-[calc(50%-1rem)]"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>

              <ul className="list-disc list-inside pl-0">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mr-2">•</span> <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold pb-2 pt-2">
                {translations.resume.acquiredSkills}
              </h3>

              <ul className="list-disc list-inside pl-0">
                {exp.competences.map((comp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mr-2">•</span> <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold m-10 flex justify-center">
          {translations.resume.education.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Education
            src="/logos/education/sncf.webp"
            alt="SNCF Logo"
            company="SNCF"
            degres="BEP"
            date="2016"
            imageClassName="w-16 cursor-default -pt-1 pb-1"
          />
          <Education
            src="/logos/education/udemy.webp"
            alt="Udemy Logo"
            link="https://www.udemy.com/"
            company="Udemy"
            degres={translations.resume.education.degres.Sncf}
            date="2022-2023"
            imageClassName="w-[7rem] pt-1 pb-2"
          />
          <Education
            src="/logos/education/codewars.webp"
            alt="Codewars Logo"
            link="https://www.codewars.com/users/soossa"
            company="Codewars"
            degres="5 kyu"
            date={translations.resume.education.dateCodeWars}
            imageClassName="w-[8rem] pt-1 pb-2 rounded-[14px]"
          />
          <Education
            src="/logos/education/openclassroom.webp"
            alt="OpenClassrooms Logo"
            link="https://openclassrooms.com/fr/"
            company="OCR"
            degres={translations.resume.education.degres.ocr}
            date="2024"
            imageClassName="w-[7rem] h-6 top-5"
            diplome="/pdf/diplome_int_web.pdf"
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold m-12 flex justify-center text-center text-gray-100">
          {translations.resume.interests}
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              {translations.resume.pro.title}
            </h3>
            <p className="text-gray-300">
              {translations.resume.pro.description}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-center text-white mb-4">
              {translations.resume.perso.title}
            </h3>
            <p className="text-gray-300">
              {translations.resume.perso.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
