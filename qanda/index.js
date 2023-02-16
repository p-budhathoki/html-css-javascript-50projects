// select article using .question class
const questions = document.querySelectorAll(".question");
console.log(questions);

// loop through questions using foreach
questions.forEach(function (question) {
  console.log(question);
  // get the buttons for each question
  const btn = question.querySelector(".question-btn");
  console.log(btn);
  // toggle the class show-text by adding event listeners to the question
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
