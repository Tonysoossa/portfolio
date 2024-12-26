interface EducationProps {
  src: string;
  alt: string;
  company: string | null;
  degres: string;
  date: string;
  link: string;
  imageClassName?: string;
}

export function Education({
  src,
  alt,
  company,
  degres,
  date,
  link,
  imageClassName,
}: EducationProps) {
  return (
    <div className="flex flex-col relative bg-gray-800 p-4 rounded-lg h-full cursor-pointer">
      <a
        href={link}
        className="inline-block w-fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={src}
          alt={alt}
          className={`${imageClassName} absolute right-2 top-2`}
        />
        <h3
          className={`text-xl font-semibold pb-2 hover:text-blue-400 transition-colors`}
        >
          {company}
        </h3>
      </a>
      <div className="flex flex-col flex-grow">
        <p className="text-gray-300 pb-1 max-w-[15rem]">{degres}</p>
        <p className="text-gray-400 mt-auto absolute right-3 bottom-3">{date}</p>
      </div>
    </div>
  );
}
