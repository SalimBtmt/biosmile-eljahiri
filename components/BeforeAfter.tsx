import { useState, type ChangeEvent } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState<number>(50);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={beforeImage}
        alt="Avant"
        className="w-full h-auto object-cover"
      />
      <div
        className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300"
        style={{ width: `${position}%` }}
      >
        <img
          src={afterImage}
          alt="Après"
          className="w-full h-auto object-cover"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={handleChange}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 cursor-pointer
                   bg-transparent appearance-none"
      />
    </div>
  );
}
