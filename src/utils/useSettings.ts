import { SettingConfigs } from "@/models/types";
import { MIN_WORD_LENGTH, SETTINGS_KEY } from "@/constants";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const defaultState = atomWithStorage<SettingConfigs>(SETTINGS_KEY, {
  difficulty: "normal",
  isModalOpen: false,
  wordLength: MIN_WORD_LENGTH,
  theme: "light",
});

const useSettings = () => {
  const [isSettingsConfigRetrived, setIsSettingsConfigRetrived] =
    useState(false);
  const [settings, setSettings] = useAtom(defaultState);

  const updateSettings = async (newSettings: Partial<SettingConfigs>) => {
    setSettings((state) => ({ ...state, ...newSettings }));
  };

  useEffect(() => {
    setIsSettingsConfigRetrived(true);

    // if the app is refreshed the change it to false
    updateSettings({ isModalOpen: false });
  }, []);

  return {
    settings,
    isSettingsConfigRetrived,
    updateSettings,
  };
};

export default useSettings;
