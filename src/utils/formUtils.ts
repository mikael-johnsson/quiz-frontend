import { getQuestions } from "../services/questionService";
import { checkChosenDifficulty } from "./checkChosenDifficulties";
import { checkChosenThemes } from "./checkChosenThemes";
import { createSearchMsg, getThemeOptions } from "./HtmlUtils";

const BASE_URL = "https://quiz-backend-one-alpha.vercel.app/api/questions?";
// const DEV_URL = "http://localhost:3000/api/questions?";

const searchForm = document.getElementById("search-form");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const themes: string[] = checkChosenThemes();
  const difficulties: string[] = checkChosenDifficulty();

  getQuestions(themes, difficulties, BASE_URL);
  createSearchMsg(themes, difficulties);
});

getThemeOptions(BASE_URL);
