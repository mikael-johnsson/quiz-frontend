import type { QuestionResponse } from "../types/questionResponse";
import { clearHtml, createErrorMsg, createHtml } from "../utils/HtmlUtils";

export const getData = async (theme: string, difficulty: string) => {
  await fetch(
    `http://quiz-backend-one-alpha.vercel.app/api/questions?theme=${theme}&difficulty=${difficulty}`
  )
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        // this does not work as of now
        console.log("inside 404 error message");

        createErrorMsg();
      } else {
        return res.json();
      }
    })
    .then((data: QuestionResponse) => {
      clearHtml();
      data.questions.forEach((question) => createHtml(question));
    });

  console.log("this is theme: ", theme, "this is difficulty: ", difficulty);
};
