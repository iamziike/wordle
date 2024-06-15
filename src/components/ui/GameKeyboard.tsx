import React from "react";

interface Props {
  currentWord: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

interface KeyProps {
  value: string;
  onClick: (value: string) => void;
  label?: string | React.ReactElement;
  type?: "button" | "submit";
  className?: string;
}

const keyboard = {
  firstRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P  "],
  secondRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  lastRow: ["DEL", "Z", "X", "C", "V", "B", "N", "M", "ENTER"],
};

const Key = ({
  value,
  className,
  onClick,
  label,
  type = "button",
}: KeyProps) => {
  return (
    <button
      type={type}
      onClick={() => onClick(value)}
      className={
        className +
        " bg-gray-800 text-white py-2 m-1 rounded text-xl border border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300 ease-in-out"
      }
    >
      {label ?? value}
    </button>
  );
};

const GameKeyboard = ({ currentWord, onChange, onSubmit }: Props) => {
  const handleKeyClick = (value: string) => {
    const word = currentWord ?? "";

    if (value === "DEL") {
      onChange(word?.slice(0, -1));
      return;
    }

    if (value === "ENTER") {
      onSubmit(currentWord);
      return;
    }

    onChange(word + value);
  };

  return (
    <div className="flex flex-col text-center mx-auto py-3 lg:w-2/5 lg:mx-auto">
      <div className="flex">
        {keyboard?.firstRow.map((key, index) => (
          <Key
            key={index}
            value={key}
            className="flex-1"
            onClick={handleKeyClick}
          />
        ))}
      </div>

      <div className="flex">
        {keyboard?.secondRow.map((key, index) => (
          <Key
            key={index}
            value={key}
            className="flex-1"
            onClick={handleKeyClick}
          />
        ))}
      </div>

      <div className="flex">
        {keyboard?.lastRow.map((key, index) => {
          if (key === "DEL") {
            return (
              <Key
                key={index}
                value={key}
                className="flex-1 px-4"
                onClick={handleKeyClick}
                label={<i className="fa-solid fa-delete-left"></i>}
              />
            );
          }

          if (key === "ENTER") {
            return (
              <Key
                type="submit"
                key={index}
                value={key}
                label={<i className="fa-solid fa-right-to-bracket"></i>}
                className="flex-1 px-4"
                onClick={handleKeyClick}
              />
            );
          }

          return (
            <Key
              key={index}
              value={key}
              className="flex-1"
              onClick={handleKeyClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameKeyboard;
