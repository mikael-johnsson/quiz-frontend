import type { Question } from "./models/question";
import type { QuestionResponse } from "./models/questionResponse";
import "./style.css";
import { createHtml } from "./utils/HtmlUtils";

const fetchButton = document.getElementById("fetch-button");
fetchButton?.addEventListener("click", () => {
  fetch("data/fakeDB.json")
    .then((res) => res.json())
    .then((data: QuestionResponse) => {
      data.questions.forEach((question: Question) => {
        createHtml(question);
      });
    });
});
