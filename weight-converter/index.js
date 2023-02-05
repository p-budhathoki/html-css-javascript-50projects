//get the input into the javascript by selecting it
const inputEl = document.getElementById("input");
// create an error  element to target the error message
const errorEl = document.getElementById("error");
// target the span element inside the paragraph element which has the id of result
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;

function updateResults() {
  console.log("changed", inputEl.value);
  // if the input is less than zero or if the value is not a number
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number.";
    // remove the error message after a certain amount of time(2seconds in this case)
    // reset the timeout
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      // set the error message to an empty string
      errorEl.innerText = "";
      // clear the input element as well after two seconds
      inputEl.value = "";
    }, 2000);
  } else {
    // convert the value of input element in pounds to kilogram. use of + symbol converts the value to a number
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
    // remove the result after ten seconds
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      inputEl.value = "";
      resultEl.innerText = "";
    }, 10000);
  }
}

// add event listener to the inputEl element
inputEl.addEventListener("input", updateResults);
