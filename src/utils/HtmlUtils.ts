import { getData } from "../services/serviceBase";
import type { Question } from "../types/question";
import type { QuestionResponse } from "../types/questionResponse";

export const createQuestions = (questions: Question[]) => {
  const questionsContainer = document.getElementById("questionsContainer");
  if (!questionsContainer) return;

  // Reuse or create the quiz result container
  let card = questionsContainer.querySelector<HTMLDivElement>(".quizResult");

  if (!card) {
    card = document.createElement("div");
    card.className = "quizResult";

    const headerRow = document.createElement("div");
    headerRow.className = "quizResult__row quizResult__row--headings";

    const questionHeading = document.createElement("p");
    questionHeading.className = "quizResult__heading";
    questionHeading.innerHTML = "Fråga";

    const answerHeading = document.createElement("p");
    answerHeading.className = "quizResult__heading";
    answerHeading.innerHTML = "Svar";

    headerRow.appendChild(questionHeading);
    headerRow.appendChild(answerHeading);

    card.appendChild(headerRow);

    const list = document.createElement("div");
    list.className = "quizResult__list";
    card.appendChild(list);

    questionsContainer.appendChild(card);
  }

  const list = card.querySelector<HTMLDivElement>(".quizResult__list");
  if (!list) return;

  questions.forEach((question) => createQuestionCard(question, list));

  const clearButton = document.createElement("button");
  clearButton.className = "quizResult__clear";
  clearButton.innerHTML = "Rensa quiz";
  clearButton.addEventListener("click", () => {
    clearQuestions();
    clearSearchMsg();
  });

  questionsContainer.appendChild(clearButton);
};

export const createQuestionCard = (question: Question, list: HTMLDivElement) => {
  const row = document.createElement("div");
  row.className = "quizResult__row";

  const title = document.createElement("p");
  title.className = "quizResult__question";
  title.innerHTML = question.question;

  const answer = document.createElement("p");
  answer.className = "quizResult__answer";
  answer.innerHTML = question.answer;

  row.appendChild(title);
  row.appendChild(answer);

  list.appendChild(row);
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

  const msgContainer = document.getElementById("message-container");
  if (!msgContainer) return;

  const card = document.createElement("div");
  card.className = "quizResult quizResult--summary";

  const headerRow = document.createElement("div");
  headerRow.className = "quizResult__row quizResult__row--headings";

  const themesHeading = document.createElement("p");
  themesHeading.className = "quizResult__heading";
  themesHeading.innerHTML = "Teman";

  const difficultiesHeading = document.createElement("p");
  difficultiesHeading.className = "quizResult__heading";
  difficultiesHeading.innerHTML = "Svårighetsgrad";

  headerRow.appendChild(themesHeading);
  headerRow.appendChild(difficultiesHeading);

  const list = document.createElement("div");
  list.className = "quizResult__list";

  const row = document.createElement("div");
  row.className = "quizResult__row";

  const themesCol = document.createElement("div");
  const difficultiesCol = document.createElement("div");

  const themesUl = document.createElement("ul");
  const difficultiesUl = document.createElement("ul");

  themesUl.className = "quizResult__ul";
  difficultiesUl.className = "quizResult__ul";

  if (themes.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = "Inga teman valda";
    themesUl.appendChild(li);
  } else {
    themes.forEach((theme) => {
      const li = document.createElement("li");
      li.innerHTML = theme.toUpperCase();
      themesUl.appendChild(li);
    });
  }

  if (difficulties.length === 0 || difficulties.length === 3) {
    const li = document.createElement("li");
    li.innerHTML = "Alla svårighetsgrader";
    difficultiesUl.appendChild(li);
  } else {
    difficulties.forEach((difficulty) => {
      const li = document.createElement("li");
      li.innerHTML = difficulty.toUpperCase();
      difficultiesUl.appendChild(li);
    });
  }

  themesCol.appendChild(themesUl);
  difficultiesCol.appendChild(difficultiesUl);

  row.appendChild(themesCol);
  row.appendChild(difficultiesCol);

  list.appendChild(row);

  card.appendChild(headerRow);
  card.appendChild(list);

  msgContainer.appendChild(card);
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
    option.innerText = theme.toUpperCase();

    select?.appendChild(option);
  });
};
