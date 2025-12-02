import { getData } from "./services/serviceBase";
import "./style.css";
import { checkChosenDifficulty } from "./utils/checkChosenDifficulty";

//move these
const BASE_URL = "http://quiz-backend-one-alpha.vercel.app/api/questions?";
const DEV_URL = "http://localhost:3000/api/questions?";

const searchForm = document.getElementById("search-form");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("theme-input") as HTMLInputElement;
  const theme: string = input.value;
  const difficulty: string = checkChosenDifficulty();

  getData(theme, difficulty, DEV_URL);
});
