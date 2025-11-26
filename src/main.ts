import type { QuestionResponse } from "./models/questionResponse";
import "./style.css";
import { getVercelData } from "./testingBE";
import { clearHtml, createHtml } from "./utils/HtmlUtils";

let chosenTheme: any; //fix this

const fetchButton = document.getElementById("fetch-button");

fetchButton?.addEventListener("click", () => {
  fetch("data/fakeDB.json")
    .then((res) => res.json())
    .then((data: QuestionResponse) => {
      clearHtml();
      const questions = data.questions;

      let chosenQuestions = questions.filter((question) =>
        question.theme.includes(chosenTheme)
      );

      // display a random question three times
      for (let i = 0; i < chosenQuestions.length; i++) {
        let randomX = Math.floor(Math.random() * chosenQuestions.length);
        createHtml(chosenQuestions[randomX]);
      }
    });
});

const checkTheme = () => {
  const themeForm = document.getElementById("theme-form") as HTMLFormElement;

  themeForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(themeForm);
    chosenTheme = formData.get("theme");
  });
};

checkTheme();
getVercelData();
