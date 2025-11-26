type testQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const getVercelData = () => {
  fetch("https://quiz-backend-one-alpha.vercel.app/api/questions")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data: testQuestion) => {
        console.group(`Group for question number ${data.id}`);
        console.log(`This is id: ${data.id}`);
        console.log(`This is question: ${data.question}`);
        console.log(`This is answer: ${data.answer}`);
        console.groupEnd();
      });
    });
};
