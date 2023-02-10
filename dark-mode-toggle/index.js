// get input
const inputEl = document.querySelector(".input");
console.log(inputEl.checked);
const bodyEl = document.querySelector("body");

// inputEl.checked = true;
inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody() {
  // if checked is true body is black else body is white
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "whitesmoke";
  }
}

// add event listener to toggle the modes
inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

// update the local storage
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
