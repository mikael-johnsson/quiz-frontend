import type { QuestionResponse } from "../types/questionResponse";
import { clearHtml, createErrorMsg, createHtml } from "../utils/HtmlUtils";

export const getData = async (
  theme: string,
  difficulty: string,
  URL: string
) => {
  await fetch(`${URL}theme=${theme}&difficulty=${difficulty}`)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        createErrorMsg();
        return;
      } else {
        return res.json();
      }
    })
    .then((data: QuestionResponse) => {
      if (!data) return;
      clearHtml();
      data.questions.forEach((question) => createHtml(question));
    });
};
