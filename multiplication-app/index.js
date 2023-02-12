// create a random number between 2 and 20
const num1 = Math.floor(Math.random() * 20) + 2;
const num2 = Math.floor(Math.random() * 20) + 2;
console.log(num1, num2);
// get the form element, input element, h4 element with id of score
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

// get the value from the local storage and assign the value to the score
// let score = 0;
// json.parse is used to convert the string value of score to a number
let score = JSON.parse(localStorage.getItem("score"));

// if the value of score does not exist in the localStorage we create a default value
if (!score) {
  // if there is no score set the score to 0
  score = 0;
}

// initialize the value of score in web
scoreEl.innerText = `score : ${score}`;

// get the h1 element to ask the question to be answered
const questionEl = document.getElementById("question");

// formulate the question inside the h1 element dynamically
questionEl.innerText = `What is ${num1} multiplied by ${num2} ?`;

// correct answer to the question
const correctAns = num1 * num2;

// track the submission of the form and get the user input. add event listener to handle the submit event
formEl.addEventListener("submit", () => {
  // store user input - the user input is stored as string.
  // const userAns = inputEl.value;
  // console.log(userAns, typeof userAns);
  // to convert the user input from string to number we add + sign
  const userAns = +inputEl.value;
  console.log(userAns, typeof userAns);

  // check if the user answer is correct
  if (userAns === correctAns) {
    score = score + 1;
    console.log(score);
    updateLocalStorage();
  } else {
    score--;
    console.log(score);
    updateLocalStorage();
  }
});

// use localStorage to store the score values
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
