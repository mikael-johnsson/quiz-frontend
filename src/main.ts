import { getData } from "./services/serviceBase";
import "./style.css";
import { checkChosenDifficulty } from "./utils/checkChosenDifficulty";

const searchForm = document.getElementById("search-form");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("theme-input") as HTMLInputElement;
  const theme: string = input.value;
  const difficulty: string = checkChosenDifficulty();

  getData(theme, difficulty);
});
