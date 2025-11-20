import type { Question } from "./models/question";
import type { QuestionResponse } from "./models/questionResponse";
import "./style.css";
import { clearHtml, createHtml } from "./utils/HtmlUtils";

const fetchButton = document.getElementById("fetch-button");
fetchButton?.addEventListener("click", () => {
  fetch("data/fakeDB.json")
    .then((res) => res.json())
    .then((data: QuestionResponse) => {
      clearHtml();
      const questions = data.questions;

      for (let i = 0; i < 3; i++) {
        let randomX = Math.floor(Math.random() * 10);
        createHtml(questions[randomX]);
      }
    });
});
