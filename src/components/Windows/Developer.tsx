import developerImage from "../../assets/Développeur.png";

type DeveloperProps = {
  origin: { top: number; left: number };
  onClose: () => void;
};

export const Developer = ({ origin, onClose }: DeveloperProps) => {
  return (
    <div
      className="absolute z-50 bg-white border-3  border-blue-300 rounded shadow-lg w-180 h-150"
      style={{
        top: origin.top,
        left: origin.left,
      }}
    >
      <div className="h-8 w-full  bg-blue-300">
        <div className="flex h-full justify-between content-center items-center">
          <div className="flex items-center gap-2">
            <img src={developerImage} alt="dev-icon" className="w-6 max-w-md" />
            <h2 className="font-bold text-white text-md">Luka LAI</h2>
          </div>
          <button
            onClick={onClose}
            className="text-red-500 font-bold mr-2 cursor-pointer"
          >
            X
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center h-full p-4">
        <p className="text-gray-700 my-5">
          BONJOUR ET BIENVUNUE SUR MON SITE !
        </p>
        <p className="text-center mt-4 text-sm/9">
          Je m'appelle LAI Luka, et je suis développeur ! Après 5 ans
          d'expériences au sein d'une entreprise spécialisée dans le
          developpement de logiciels qualité pour les laboratoires. <br />
          <br />
          J'ai décidé d'acquérir de nouvelles compétences en informatique.
          <br />
          Actuellement en Master Expert en Systèmes d’Information (M2) à
          ISITECH, je développe mes compétences en développement (JavaScript,
          React, TypeScript, etc.) et en gestion de projets IT. Mon objectif est
          de combiner mes compétences techniques et managériales pour contribuer
          efficacement à des projets innovants dans le secteur du numérique.
          <br />
          <br />
          <p>Merci de votre visite !</p>
        </p>
      </div>
    </div>
  );
};
