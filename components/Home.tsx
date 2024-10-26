import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-4">
      <h1 className="text-5xl sm:text-6xl text-center font-bold mb-8 text-animated">
        Servanin Tony
      </h1>
      <h2 className="text-3xl sm:text-4xl text-blue-400 mb-6 text-center text-animated">
        Javascript React Frontend Developer
      </h2>
      <p className="text-center text-lg sm:text-xl max-w-4xl mb-8 text-fadeInUp">
        Originaire et résidant à Lyon, France, j'ai 25 ans et me forme au
        développement web depuis novembre 2022, avec pour ambition de devenir
        développeur front-end. Récemment, j'ai obtenu un diplôme de niveau 5 en
        tant qu'intégrateur web. Ici, je vous présente certains projets que j'ai
        réalisés ainsi que des détails sur mes compétences et aspirations.
      </p>
    </div>
  );
}
