import { config } from "dotenv";
import { getQuestions } from "../services/questionService";
import { checkChosenDifficulty } from "./checkChosenDifficulties";
import { checkChosenThemes } from "./checkChosenThemes";
import { createSearchMsg, getThemeOptions } from "./HtmlUtils";

config();
const BASE_URL = process.env.BASE_URL || "";
const DEV_URL = process.env.DEV_URL || "";

const searchForm = document.getElementById("search-form");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const themes: string[] = checkChosenThemes();
  const difficulties: string[] = checkChosenDifficulty();

  getQuestions(themes, difficulties, BASE_URL);
  createSearchMsg(themes, difficulties);
});

getThemeOptions(BASE_URL);
