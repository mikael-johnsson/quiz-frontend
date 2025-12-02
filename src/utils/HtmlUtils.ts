import type { Question } from "../types/question";

export const createHtml = (question: Question) => {
  const questionsContainer = document.getElementById("questionsContainer");
  const questionDiv = document.createElement("div");
  const title = document.createElement("p");
  const answer = document.createElement("span");

  title.innerHTML = question.question;
  answer.innerHTML = question.answer;

  questionDiv.appendChild(title);
  questionDiv.appendChild(answer);
  questionsContainer?.appendChild(questionDiv);
};

export const clearHtml = () => {
  const questionsContainer = document.getElementById("questionsContainer");
  if (questionsContainer) {
    questionsContainer.innerHTML = "";
  }
};

export const createErrorMsg = () => {
  const questionsContainer = document.getElementById("questionsContainer");
  console.log(questionsContainer);

  // why does these two lines not run when theres an 404?
  if (questionsContainer) {
    questionsContainer.innerHTML = "Hittade inga frågor, testa en ny sökning!";
  }
};
