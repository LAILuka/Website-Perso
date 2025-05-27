type ComputerProps = {
  origin: { top: number; left: number };
  onClose: () => void;
};

export const Computer = ({ origin, onClose }: ComputerProps) => {
  return (
    <div
      className="absolute z-50 bg-white p-4 border rounded shadow-lg w-96"
      style={{
        top: origin.top,
        left: origin.left,
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">Ordinateur</h2>
        <button onClick={onClose} className="text-red-500 font-bold">
          X
        </button>
      </div>
      <div>Explorateur de fichiers</div>
    </div>
  );
};
