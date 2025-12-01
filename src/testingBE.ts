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

// den här url:en svara endast om man är på port 5173
export const getVercelDataOne = () => {
  fetch("https://quiz-backend-one-alpha.vercel.app/api/questions/12")
    .then((res) => res.json())
    .then((data: testQuestion) => {
      console.log("This is question 1: ", data);
    });
};
