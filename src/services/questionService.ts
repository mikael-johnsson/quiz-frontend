import type { QuestionResponse } from "../types/questionResponse";
import { buildUrl } from "../utils/buildUrl";
import { clearQuestions, createErrorMsg, createQuestions } from "../utils/HtmlUtils";
import { getData } from "./serviceBase";

export const getQuestions = async (
  themes: string[],
  difficulties: string[],
  URL: string,
) => {
  const difficultiesUrl = buildUrl(difficulties, "&difficulties=");
  const themesUrl = buildUrl(themes, "&themes=");

  const response = getData(URL, themesUrl, difficultiesUrl);
  response
    .then(async (res) => {
      if (!res.ok) {
        const msg = await res.text();
        createErrorMsg(msg);
        return;
      } else {
        return res.json();
      }
    })
    .then((data: QuestionResponse) => {
      if (!data) return;
      clearQuestions();
      createQuestions(data.questions);
    });
};
