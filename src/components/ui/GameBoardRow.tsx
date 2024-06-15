import React from "react";

interface Props {
  isReadonly?: boolean;
  value: string;
  targetWord: string;
}

const GameBoardRow = ({ value, targetWord, isReadonly = false }: Props) => {
  const columns = targetWord.length;
  const columnArray = new Array(columns).fill(null);

  return (
    <div className="flex justify-center gap-2">
      {columnArray.map((_, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md cursor-pointer transition-all duration-300 ease-in-out text-center text-4xl text-gray-700 uppercase flex justify-center items-center w-20 h-20"
        >
          {value[index]}
        </div>
      ))}
    </div>
  );
};

export default GameBoardRow;
