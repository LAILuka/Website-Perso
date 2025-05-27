import React from "react";

type ButtonBackgroundProps = {
  image: string;
  name: string;
  alt: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonBackground: React.FC<ButtonBackgroundProps> = ({
  image,
  name,
  onClick,
  alt,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center hover:cursor-pointer hover:bg-white/20 p-2 transition duration-300 ease-in-out"
    >
      <img src={image} alt={name} title={alt} className="w-10 max-w-md" />
      <p className="text-center mt-2 text-white text-sm text-shadow-sm font-bold px-2">
        {name}
      </p>
    </button>
  );
};

export default ButtonBackground;
