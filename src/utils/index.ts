import confetti from "canvas-confetti";
import dictionary from "@/constants/dictionary.json";
import toast from "react-hot-toast";
import { CustomObject } from "@/models/types";
import { MIN_WORD_LENGTH, targetWords } from "@/constants";

export const generateArray = (length: number) => {
  return new Array(length).fill(null);
};

export const isWordValid = (word: string) => {
  const formattedDictionary = dictionary as CustomObject<string>;
  return Boolean(formattedDictionary[word?.trim()?.toLowerCase()]);
};

export const wordMatch = async ({
  triesLeft,
  targetWord,
  word,
}: {
  word: string;
  targetWord: string;
  triesLeft: number;
}) => {
  const isMatched = word?.trim()?.toLowerCase() === targetWord?.toLowerCase();

  if (isMatched) {
    return "match";
  }

  if (triesLeft > 0) {
    return "no-match";
  }

  return "game over";
};

export const getRandomWord = (letterCount?: number) => {
  letterCount = letterCount || MIN_WORD_LENGTH;

  const getTargetWord = () => {
    if (letterCount === 5) {
      return targetWords["fiveLetterWord"];
    }

    if (letterCount === 6) {
      return targetWords["sixLetterWord"];
    }

    if (letterCount === 7) {
      return targetWords["sevenLetterWord"];
    }

    if (letterCount === 8) {
      return targetWords["eightLetterWord"];
    }

    if (letterCount === 9) {
      return targetWords["nineLetterWord"];
    }

    if (letterCount === 10) {
      return targetWords["tenLetterWord"];
    }

    if (letterCount === 11) {
      return targetWords["elevenLetterWord"];
    }

    return targetWords["fourLetterWord"];
  };

  const words = getTargetWord();
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

export const showWrongWordToast = () => {
  toast.remove();
  toast("Word not found", {
    duration: 1000,
    style: { minWidth: "300px", fontSize: "25px", fontWeight: "400" },
  });
};

export const fireWorkShow = {
  stop: () => {
    setTimeout(() => {
      confetti.reset();
    }, 2000);
  },
  begin() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });

      // setTimeout(() => {
      //   confetti.reset();
      // }, 2000);
    }, 250);
  },
};

export const isAlphabet = (value: string) => {
  const pattern = /^[A-Za-z]+$/;
  return pattern.test(value);
};

export const countLetterOccurrences = (target: string, letter: string) => {
  const regex = new RegExp(letter, "g");
  const matches = target.match(regex);
  return matches ? matches.length : 0;
};
