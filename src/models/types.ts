import { keyboard } from "@/constants";

export interface PageLayout {
  children: React.ReactNode;
}

export interface CustomObject<T> {
  [key: string]: T;
}

export type KeyValue =
  | (typeof keyboard)["firstRow"][number]
  | (typeof keyboard)["secondRow"][number]
  | (typeof keyboard)["lastRow"][number];

export interface SettingConfigs {
  isModalOpen: boolean;
  wordLength: number | null;
  difficulty: "normal" | "hard" | null;
  theme: "light" | "dark" | null;
}

export type GameStatus = "match" | "no-match" | "game-over";

export type WordMatchFunc = (props: {
  word: string;
  targetWord: string;
  triesLeft: number;
}) => Promise<GameStatus>;
