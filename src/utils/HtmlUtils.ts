import { getData } from "../services/serviceBase";
import type { Question } from "../types/question";
import type { QuestionResponse } from "../types/questionResponse";

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

export const clearQuestions = () => {
  const questionsContainer = document.getElementById("questionsContainer");
  if (questionsContainer) {
    questionsContainer.innerHTML = "";
  }
};

export const createErrorMsg = async (msg: string) => {
  const questionsContainer = document.getElementById("questionsContainer");
  console.log(msg);

  if (questionsContainer) {
    questionsContainer.innerHTML = "Hittade inga frågor, testa en ny sökning!";
  }
};

export const createSearchMsg = (themes: string[], difficulties: string[]) => {
  clearSearchMsg();

  const container = document.createElement("div");

  let themeMsg = document.createElement("p");
  themeMsg.innerHTML = "You have searched for themes:";
  let difficultiesMsg = document.createElement("p");
  difficultiesMsg.innerHTML = "You have searched for difficulties:";

  const themesUl = document.createElement("ul");
  const difficultiesUl = document.createElement("ul");

  if (themes.length === 0) {
    themeMsg.innerHTML = "You have not specified any themes";
  } else {
    themes.forEach((theme) => {
      let li = document.createElement("li");
      li.innerHTML = theme;
      themesUl.appendChild(li);
    });
  }

  if (difficulties.length === 0 || difficulties.length === 3) {
    difficultiesMsg.innerHTML = "You have chosen all difficulties";
  } else {
    difficulties.forEach((difficulty) => {
      let li = document.createElement("li");
      li.innerHTML = difficulty;
      difficultiesUl.appendChild(li);
    });
  }

  container.appendChild(themeMsg);
  container.appendChild(themesUl);
  container.appendChild(difficultiesMsg);
  container.appendChild(difficultiesUl);

  const msgContainer = document.getElementById("message-container");
  msgContainer?.appendChild(container);
};

export const clearSearchMsg = () => {
  const messageContainer = document.getElementById("message-container");
  if (messageContainer) {
    messageContainer.innerHTML = "";
  }
};

export const getThemeOptions = async (URL: string) => {
  let optionThemes: string[] = [];
  const response = await getData(URL, "", "");
  const data: QuestionResponse = await response.json();
  data.questions?.forEach((question: Question) => {
    question.themes?.forEach((theme) => {
      if (!optionThemes.includes(theme)) optionThemes.push(theme);
    });
  });

  addSelectOptions(optionThemes);
};

export const addSelectOptions = (themes: string[]) => {
  const select = document.getElementById("themes-dropdown");

  themes.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme;
    option.innerText = theme;

    select?.appendChild(option);
  });
};
