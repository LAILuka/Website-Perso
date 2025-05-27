import { useRef } from "react";
import { ButtonTaskBar } from "./ui/ButtonTaskBar";
import WindowsIcon from "../assets/Windows_ICon.png";
import InternetExplorerIcon from "../assets/InternetExplorer.png";
import MailIcon from "../assets/Mail.png";
import PaintIcon from "../assets/Paint.png";

export function Taskbar() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="fixed bottom-0 left-0 w-full h-15 bg-sky-600 flex items-center space-x-2 shadow-inner">
      <button className="bg-green-700 text-white text-sm font-bold shadow-xl h-full w-50 rounded-r-3xl flex items-center justify-center px-4 inset-shadow-sm inset-shadow-green-900 hover:bg-green-800 transition duration-300 ease-in-out hover:cursor-not-allowed ">
        <img src={WindowsIcon} alt="windows-icon" className="w-11 h-11 mr-2" />
        DÉMARRER
      </button>
      <ButtonTaskBar>
        <img src={MailIcon} alt="mail-icon" className="w-7 h-7" />
      </ButtonTaskBar>
      <ButtonTaskBar>
        <img
          src={InternetExplorerIcon}
          alt="internet-explorer-icon"
          className="w-7 h-7"
        />
      </ButtonTaskBar>
      <ButtonTaskBar>
        <img src={PaintIcon} alt="paint-icon" className="w-7 h-7" />
      </ButtonTaskBar>
    </div>
  );
}
