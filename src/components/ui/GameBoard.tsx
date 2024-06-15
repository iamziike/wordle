"use client";

import React from "react";
import GameBoardRow from "./GameBoardRow";
import GameKeyboard from "./GameKeyboard";
import { generateArray, isWordValid, wordMatch } from "@/utils";

interface ComponentReducerState {
  maxTries: number;
  targetWord: string;
  noOfTriesDone: number;
  attemptedWords: string[];
  success: boolean;
  failed: boolean;
}

const componentReducerInitialState: ComponentReducerState = {
  targetWord: "hello",
  maxTries: 6,
  noOfTriesDone: 0,
  attemptedWords: [],
  failed: false,
  success: false,
};

const GameBoard = () => {
  const [state, updateState] = React.useReducer(
    (
      state: ComponentReducerState,
      newState: Partial<ComponentReducerState>
    ) => ({
      ...state,
      ...newState,
    }),
    componentReducerInitialState
  );

  const handleChange = (value: string) => {
    const updatedAttemptedWords = [...state.attemptedWords];
    updatedAttemptedWords[state.noOfTriesDone] = value;

    updateState({
      attemptedWords: updatedAttemptedWords,
    });
  };

  const handleSubmit = (value: string) => {
    if (!isWordValid(value)) {
      alert("Word not found");
      return;
    }

    if (wordMatch(value, state.targetWord)) {
      alert("CORRECT");
    }

    const noOfTriesDone = ++state.noOfTriesDone;
    updateState({ noOfTriesDone });

    // const updatedAttemptedWords = [...state.attemptedWords];
    // updatedAttemptedWords[state.noOfTriesDone] = value;

    // updateState({
    //   attemptedWords: updatedAttemptedWords,
    //   noOfTriesDone: state.noOfTriesDone + 1,
    // });
  };

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center">
        {
          // generate array based of lives
          generateArray(state.maxTries).map((_, index) => (
            <div key={index}>
              <GameBoardRow
                targetWord={state.targetWord}
                value={state.attemptedWords[index] ?? ""}
              />
            </div>
          ))
        }
      </div>

      <div className="mt-6">
        <GameKeyboard
          currentWord={state.attemptedWords[state.noOfTriesDone]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default GameBoard;
