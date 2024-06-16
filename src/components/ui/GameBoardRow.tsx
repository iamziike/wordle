import { countLetterOccurrences } from "@/utils";
import clsx from "clsx";
import React from "react";

interface Props {
  reveal?: boolean;
  showCloseNess?: boolean;
  value: string;
  targetWord: string;
}

const GameBoardRow = ({ value, targetWord, reveal = false }: Props) => {
  const columns = targetWord.length;
  const columnArray = new Array(columns).fill(null);

  const isIncluded = (letter: string) => {
    // code works well but its schitako
    // will do another implementation later
    // for now this works

    // check if the word is included in the targetWord
    if (!targetWord.includes(letter)) {
      return false;
    }

    if (
      countLetterOccurrences(targetWord, letter) >=
      countLetterOccurrences(value, letter)
    ) {
      return true;
    }

    // all the areas that the value word [index] matches the targetWord[index] replace the targeWord with null and then return the remaining targetWord
    // then check if the remaining targetWord includes the letter
    // if it does then return true
    // else return false

    const remainingTargetWord = targetWord
      .split("")
      .map((letter, index) => (letter === value[index] ? null : letter))
      .join("");

    if (remainingTargetWord.includes(letter)) {
      return true;
    }

    return false;
  };

  return (
    <div className="flex justify-center gap-2">
      {columnArray.map((_, index) => (
        <div
          key={index}
          className={clsx(
            "border border-gray-300 rounded-md cursor-pointer transition-all duration-300 ease-in-out text-center text-4xl text-gray-700 uppercase flex justify-center items-center w-12 h-12 font-mono",
            {
              "gray-letter": value[index] && reveal,
              "yellow-letter": isIncluded(value[index]) && reveal,
              "green-letter": value[index] === targetWord[index] && reveal,
            }
          )}
        >
          {value[index]}
        </div>
      ))}
    </div>
  );
};

export default GameBoardRow;
