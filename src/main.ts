import { getData } from "./services/serviceBase";
import "./scss/main.scss";
import { checkChosenDifficulty } from "./utils/checkChosenDifficulty";
import { createSearchMsg } from "./utils/HtmlUtils";
import { getQuestions } from "./services/questionService";

//move these
const BASE_URL = "http://quiz-backend-one-alpha.vercel.app/api/questions?";
const DEV_URL = "http://localhost:3000/api/questions?";

const searchForm = document.getElementById("search-form");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("theme-input") as HTMLInputElement;
  const themes: string[] = [input.value];
  const difficulties: string[] = checkChosenDifficulty();

  getQuestions(themes, difficulties, BASE_URL);
  createSearchMsg(themes, difficulties);
});

// för select values kan man faktiskt göra ett API call för alla frågor,
// ´loopa ur deras themes och sen sätta de i selecten
