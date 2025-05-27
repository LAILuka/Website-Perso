import { useState } from "react";
import { Taskbar } from "./components/TaskBar";

import msnImage from "./assets/MSN.png";
import computerImage from "./assets/MyComputer.png";
import folderImage from "./assets/Folder.png";
import developerImage from "./assets/Développeur.png";
import recyclebinImage from "./assets/Recyclebin.png";

import ButtonBackground from "./components/ui/ButtonBackground";

import { Developer } from "./components/Windows/Developer";
import { Computer } from "./components/Windows/Computer";

const apps = [
  {
    id: "dev",
    name: "Luka LAI",
    image: developerImage,
    content: <div>Bienvenue sur mon profil développeur !</div>,
    origin: { top: `${10}%`, left: `${28}%` },
    alt: "Découvrir qui je suis",
  },
  {
    id: "computer",
    name: "Ordinateur",
    image: computerImage,
    content: <div>Explorateur de fichiers</div>,
    origin: { top: 200, left: 200 },
  },
  {
    id: "docs",
    name: "Documents",
    image: folderImage,
    content: <div>Mes documents</div>,
    origin: { top: 300, left: 300 },
  },
  {
    id: "msn",
    name: "MSN",
    image: msnImage,
    content: <div>MSN Messenger</div>,
    origin: { top: 400, left: 400 },
    alt: "Me contacter",
  },
];

type OpenWindow = {
  id: string;
  origin: { top: number; left: number };
};

export default function App() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);

  // Fonction pour ouvrir une fenêtre
  const openAppWindow = (id: string, origin: { top: number; left: number }) => {
    if (!openWindows.some((w) => w.id === id)) {
      setOpenWindows((prev) => [...prev, { id, origin }]);
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover overflow-hidden relative"
      style={{
        backgroundImage: "url('src/assets/Windows_Fond.png')",
      }}
    >
      {/* Icônes du bureau */}
      <div className="ml-5 flex flex-col w-35 align-center h-screen gap-5 mt-10">
        {apps.map((app) => (
          <ButtonBackground
            key={app.id}
            image={app.image}
            name={app.name}
            alt={app.alt}
            onClick={() => {
              openAppWindow(app.id, app.origin);
            }}
          />
        ))}
      </div>

      {/* Corbeille */}
      <div className="fixed w-35 bottom-20 right-10 flex flex-col items-center cursor-not-allowed hover:bg-white/20 p-2 transition duration-300 ease-in-out">
        <img
          src={recyclebinImage}
          alt="Recycle Bin"
          className="w-10 max-w-md rounded-lg shadow-lg"
        />
        <p className="mt-4 text-white text-sm text-shadow-sm px-2 font-bold font-myfont">
          Corbeille
        </p>
      </div>

      {/* Fenêtres ouvertes */}
      {openWindows.map(({ id, origin }) => {
        const app = apps.find((a) => a.id === id);
        if (!app) return null;

        // Affiche le composant spécifique de la fenêtre
        switch (id) {
          case "dev":
            return (
              <Developer
                key={id}
                origin={origin}
                onClose={() =>
                  setOpenWindows((prev) => prev.filter((w) => w.id !== id))
                }
              />
            );
          case "computer":
            return (
              <Computer
                key={id}
                origin={origin}
                onClose={() =>
                  setOpenWindows((prev) => prev.filter((w) => w.id !== id))
                }
              />
            );
          // Tu peux ajouter ici d'autres fenêtres comme "docs", "msn", etc.
          default:
            return null;
        }
      })}

      {/* Barre des tâches */}
      <Taskbar />
    </div>
  );
}
