import "./scss/main.scss";
import { checkChosenDifficulty } from "./utils/checkChosenDifficulties";
import { createSearchMsg, getThemeOptions } from "./utils/HtmlUtils";
import { getQuestions } from "./services/questionService";
import { checkChosenThemes } from "./utils/checkChosenThemes";

//move these
const BASE_URL = "http://quiz-backend-one-alpha.vercel.app/api/questions?";
const DEV_URL = "http://localhost:3000/api/questions?";

const searchForm = document.getElementById("search-form");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const themes: string[] = checkChosenThemes();
  const difficulties: string[] = checkChosenDifficulty();

  getQuestions(themes, difficulties, BASE_URL);
  createSearchMsg(themes, difficulties);
});

getThemeOptions(BASE_URL);
