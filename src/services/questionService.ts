import type { QuestionResponse } from "../types/questionResponse";
import { buildUrl } from "../utils/buildUrl";
import { clearQuestions, createErrorMsg, createHtml } from "../utils/HtmlUtils";
import { getData } from "./serviceBase";

export const getQuestions = (
  themes: string[],
  difficulties: string[],
  URL: string
) => {
  const difficultiesUrl = buildUrl(difficulties, "&difficulties=");
  const themesUrl = buildUrl(themes, "&themes=");

  const response = getData(URL, themesUrl, difficultiesUrl);
  response
    .then((res) => {
      if (!res.ok) {
        createErrorMsg();
        return;
      } else {
        return res.json();
      }
    })
    .then((data: QuestionResponse) => {
      if (!data) return;
      clearQuestions();
      data.questions.forEach((question) => createHtml(question));
    });
};
