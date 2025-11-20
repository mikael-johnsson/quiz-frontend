import "./style.css";

const fetchButton = document.getElementById("fetch-button");
fetchButton?.addEventListener("click", () => {
  fetch("data/fakeDB.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.questions[0]);
    });
});
