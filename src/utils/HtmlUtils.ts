import type { Question } from "../models/question";

export const createHtml = (question: Question) => {
  const questionContainer = document.createElement("div");
  const title = document.createElement("p");
  const answer = document.createElement("span");

  title.innerHTML = question.question;
  answer.innerHTML = question.answer;

  questionContainer.appendChild(title);
  questionContainer.appendChild(answer);
  const main = document.getElementById("main");
  main?.appendChild(questionContainer);
};
