import React from "react";
import clsx from "clsx";

interface Props {
  word: {
    letter: string;
    color: "gray" | "yellow" | "green";
  }[];
}

const WordleIcon = ({ word }: Props) => {
  return (
    <div className="select-none flex gap-2 justify-center">
      {word?.map(({ color, letter }, index) => (
        <div
          key={index}
          className={clsx("letter", {
            "gray-letter": color === "gray",
            "yellow-letter": color === "yellow",
            "green-letter": color === "green",
          })}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default WordleIcon;
