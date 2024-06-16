"use client";

import React, { useEffect, useState } from "react";
import GamePlay from "./GamePlay";
import useSettings from "@/utils/useSettings";
import Spinner from "../common/Spinner";
import { getRandomWord } from "@/utils";
import { MAX_WORD_TRIES } from "@/constants";

interface ComponentReducerState {
  maxTries: number;
  targetWord: string | null;
}

const AnonymousGamePlay = () => {
  const { settings, isSettingsConfigRetrived } = useSettings();
  const [state, updateState] = React.useReducer(
    (
      state: ComponentReducerState,
      newState: Partial<ComponentReducerState>
    ) => ({
      ...state,
      ...newState,
    }),
    {
      targetWord: null,
      maxTries: MAX_WORD_TRIES,
    }
  );

  const handleRestartGame = () => {
    if (settings?.wordLength) {
      updateState({
        targetWord: getRandomWord(settings?.wordLength),
        maxTries: 6,
      });
    }
  };

  useEffect(() => {
    if (isSettingsConfigRetrived && settings?.wordLength && !state.targetWord) {
      updateState({
        targetWord: getRandomWord(settings?.wordLength),
      });
    }
  }, [isSettingsConfigRetrived]);

  return state.targetWord && isSettingsConfigRetrived ? (
    <GamePlay
      targetWord={state.targetWord}
      maxTries={state.maxTries}
      onRestart={handleRestartGame}
    />
  ) : (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
};

export default AnonymousGamePlay;
