import type { Question } from "./question";

export type QuestionResponse = {
  totalResult: number;
  questions: Question[];
};
