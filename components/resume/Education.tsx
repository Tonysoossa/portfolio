import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

interface EducationProps {
  src: string;
  alt: string;
  company: string | null;
  degres: string;
  date: string;
  link?: string;
  imageClassName?: string;
  diplome?: string;
}

export function Education({
  src,
  alt,
  company,
  degres,
  date,
  link,
  imageClassName,
  diplome,
}: EducationProps) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col relative bg-gray-800 p-4 rounded-lg h-full ">
      <a
        href={link}
        className="inline-block w-fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={src}
          alt={alt}
          className={`${imageClassName} absolute right-2 top-2 cursor-pointer hover:scale-105`}
        />

        <h3
          className={`text-xl font-semibold pb-2 hover:text-blue-400 transition-colors`}
        >
          {company}
        </h3>
      </a>
      <div className="flex flex-col flex-grow">
        <p className="text-gray-300 pb-1 max-w-[15rem]">{degres}</p>
        <p className="text-gray-400 mt-auto absolute right-3 bottom-3">
          {date}
        </p>
        {diplome ? (
          <Link
            className="flex items-center hover:text-blue-400 hover:underline w-14"
            href={diplome}
            target="_blank"
          >
            <p>{language === "fr" ? "Diplôme" : "Degre"}</p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye mt-1 ml-2 animate-blink"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              ></path>
            </svg>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
