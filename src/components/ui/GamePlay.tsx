"use client";

import React, { useCallback } from "react";
import GameBoardRow from "./GameBoardRow";
import ConfirmModal from "../common/ConfirmModal";
import useConfetti from "@/utils/useConfetti";
import VisualKeyboard from "./VisualKeyboard";
import { GameStatus, WordMatchFunc } from "@/models/types";
import {
  generateArray,
  isWordValid,
  showWrongWordToast,
  wordMatch,
} from "@/utils";

interface ComponentReducerState {
  noOfTriesDone: number;
  attemptedWords: string[];
  noOfIncorrectlySpeltWords: number;
  isSuccess: boolean;
  isFailed: boolean;
  isGameOver: boolean;
}

interface Props {
  targetWord: string;
  maxTries: number;
  onRestart: VoidFunction;
  customWordMatch?: WordMatchFunc;
  onGameOver?: (props: {
    status: GameStatus;
    noOfIncorrectlySpeltWords: number;
    attemptedWords: string[];
    noOfTriesDone: number;
  }) => void;
}

const GamePlay = ({
  maxTries,
  targetWord,
  onRestart,
  onGameOver,
  customWordMatch,
}: Props) => {
  const [state, updateState] = React.useReducer(
    (
      state: ComponentReducerState,
      newState: Partial<ComponentReducerState>
    ) => ({
      ...state,
      ...newState,
    }),
    {
      noOfTriesDone: 0,
      noOfIncorrectlySpeltWords: 0,
      attemptedWords: [],
      isSuccess: false,
      isFailed: false,
      isGameOver: false,
    }
  );

  const fireWorkShow = useConfetti();

  const handleChange = useCallback(
    (value: string) => {
      const updatedAttemptedWords = [...state.attemptedWords];
      const word = updatedAttemptedWords[state.noOfTriesDone] ?? "";

      updatedAttemptedWords[state.noOfTriesDone] = word + value;

      if (word.length >= targetWord.length) {
        return;
      }

      updateState({
        attemptedWords: updatedAttemptedWords,
      });
    },
    [state.attemptedWords, state.noOfTriesDone, targetWord.length]
  );

  const handleBackSpace = useCallback(() => {
    const updatedAttemptedWords = [...state.attemptedWords];
    const word = updatedAttemptedWords[state.noOfTriesDone] ?? "";
    updatedAttemptedWords[state.noOfTriesDone] = word.slice(0, -1);

    updateState({
      attemptedWords: updatedAttemptedWords,
    });
  }, [state.attemptedWords, state.noOfTriesDone]);

  const handleSubmit = async () => {
    const word = state.attemptedWords[state.noOfTriesDone];

    if (state.isFailed || state.isSuccess) {
      return;
    }

    if (word.length !== targetWord.length) {
      return;
    }

    if (!isWordValid(word)) {
      showWrongWordToast();
      updateState({
        noOfIncorrectlySpeltWords: state.noOfIncorrectlySpeltWords + 1,
      });
      return;
    }

    const noOfTriesDone = ++state.noOfTriesDone;
    updateState({ noOfTriesDone });

    const gameStatus = await (customWordMatch ?? wordMatch)({
      word,
      targetWord,
      triesLeft: maxTries - noOfTriesDone,
    });

    if (gameStatus === "match") {
      fireWorkShow.begin();
      updateState({ isSuccess: true, isGameOver: true });
      return onGameOver?.({
        status: "match",
        attemptedWords: state.attemptedWords,
        noOfIncorrectlySpeltWords: state.noOfIncorrectlySpeltWords,
        noOfTriesDone: noOfTriesDone,
      });
    }

    if (gameStatus === "game over") {
      updateState({ isFailed: true, isGameOver: true });

      return onGameOver?.({
        status: "game-over",
        attemptedWords: state.attemptedWords,
        noOfIncorrectlySpeltWords: state.noOfIncorrectlySpeltWords,
        noOfTriesDone: state.noOfTriesDone,
      });
    }
  };

  const handleRestart = () => {
    updateState({
      noOfIncorrectlySpeltWords: 0,
      noOfTriesDone: 0,
      attemptedWords: [],
      isSuccess: false,
      isFailed: false,
      isGameOver: false,
    });
    fireWorkShow.stop();
    onRestart();
  };

  return (
    <>
      <ConfirmModal
        onProceed={handleRestart}
        isOpen={state?.isFailed}
        onClose={handleRestart}
        content={{
          title: "Game Over",
          description: (
            <div>
              <div>
                You failed to get the word{" "}
                <h2 className="uppercase font-bold">{`" ${targetWord} "`}</h2>
              </div>
              <br />
              <div>Do you want to play again?</div>
            </div>
          ),
        }}
      />

      <ConfirmModal
        onProceed={handleRestart}
        isOpen={state?.isSuccess}
        onClose={handleRestart}
        content={{
          title: "Word matched",
          description: "Do you want to play again?",
        }}
      />

      <div>
        <div className="flex flex-col gap-2 justify-center">
          {generateArray(maxTries).map((_, index) => (
            <div key={index}>
              <GameBoardRow
                reveal={state.noOfTriesDone > index}
                targetWord={targetWord}
                value={state.attemptedWords[index] ?? ""}
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <VisualKeyboard
            disabled={state.isGameOver}
            onChange={handleChange}
            onBackspace={handleBackSpace}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default GamePlay;
