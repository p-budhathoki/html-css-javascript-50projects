// get access to the textarea using getElementById
const textareaEl = document.getElementById("textarea");
// get the total-counter and remaining-counter inside javascript
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
// add the event listeners to the textarea and track the activity in textarea
textareaEl.addEventListener("keyup", () => {
  console.log("key is pressed");
  // update the counter with remaining characters and total characters
  updateCounter();
});

updateCounter();

// updates the counter with remaining characters and total characters
function updateCounter() {
  // calculate the length of the textarea
  totalCounterEl.innerText = textareaEl.value.length;
  // get the value of maxlength that is inside the textarea and store it in the remainingCounterEl
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
  //   console.log(totalCounterEl);
  //   remainingCounterEl.innerText = 50 - textareaEl.value.length;
}
