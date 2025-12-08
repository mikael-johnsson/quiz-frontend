import type { QuestionResponse } from "../types/questionResponse";
import { buildUrl } from "../utils/buildUrl";
import { clearQuestions, createErrorMsg, createHtml } from "../utils/HtmlUtils";

export const getData = async (
  themes: string[],
  difficulties: string[],
  URL: string
) => {
  const difficultiesUrl = buildUrl(difficulties, "&difficulties=");
  const themesUrl = buildUrl(themes, "&themes=");

  await fetch(`${URL}${themesUrl}${difficultiesUrl}`)
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
