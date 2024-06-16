import * as Yup from "yup";
import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from ".";

export const settingsValidationSchema = Yup.object().shape({
  theme: Yup.string().required("Theme is required").oneOf(["light", "dark"]),
  difficulty: Yup.string()
    .required("Difficulty is required")
    .oneOf(["normal", "hard"]),
  wordLength: Yup.number()
    .required("Word length is required")
    .min(MIN_WORD_LENGTH)
    .max(MAX_WORD_LENGTH),
});
