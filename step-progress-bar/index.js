// get the next button, steps, button - previous,hr
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");
console.log(stepsEl);

// variable to keep track of currently checked icon
let currentChecked = 1;
// add event listener to the nextEl button
nextEl.addEventListener("click", () => {
  currentChecked++;
  //   console.log(currentChecked);
  // if the steps are more than 5 set the value of currentChecked to the last value
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  console.log(currentChecked);
  updateStepProgress();
});

// event listener to the previousEl button

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  console.log(currentChecked);
  updateStepProgress();
});

function updateStepProgress() {
  // create a loop that contains all the steps and update each steps according to the number of currentChecked
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `<i class="fas fa-check"></i>
            <small>${
              idx === 0
                ? "Start"
                : idx === stepsEl.length - 1
                ? "Final"
                : "Step " + idx
            }</small>`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
        <i class="fas fa-times"></i>
        `;
    }
  });
  const checkNumber = document.querySelectorAll(".checked");
  progressEl.style.width =
    ((checkNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  // disable the buttons when at the beginning and at the end
  if (currentChecked == 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}
