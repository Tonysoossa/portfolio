import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-34rem)]">
      <h1 className="text-4xl text-center font-bold mb-8 text-animated">
        Servanin Tony
      </h1>
      <h2 className="text-3xl text-blue-400 mb-6 text-center text-animated">
        Javascript React Frontend Developer
      </h2>
      <p className="text-center text-xl max-w-2.5xl mb-8 text-fadeInUp">
        Originaire et résidant à Lyon, France, j'ai 25 ans et me forme au
        développement web depuis novembre 2022, avec pour ambition de devenir
        développeur front-end. Récemment, j'ai obtenu un diplôme de niveau 5 en
        tant qu'intégrateur web. Ici, je vous présente certains projets que j'ai
        réalisés ainsi que des détails sur mes compétences et aspirations.
      </p>
      <div className="flex justify-center space-y-4 text-fadeInUp">
        <a
          href="https://github.com/Tonysoossa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center"
        >
          <FontAwesomeIcon icon={faGithub} className="w-4 mr-2" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tony-servanin-90502a293/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors flex items-center"
        >
          LinkedIn
          <FontAwesomeIcon icon={faLinkedin} className="w-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
