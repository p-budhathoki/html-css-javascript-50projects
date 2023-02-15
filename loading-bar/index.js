// get div containing counter, loading-bar-front class
const counterEl = document.querySelector(".counter");
const loadingBarEl = document.querySelector(".loading-bar-front");

// function to update the counter and the width of the loading bar
let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  loadingBarEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout((updateNum), 40);
  }
}
