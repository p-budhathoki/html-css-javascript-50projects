// get all the stars and emojis
const starsEl = document.querySelectorAll(".fa-star");
// console.log(starsEl);
const emojisEl = document.querySelectorAll(".far");
// colors for the emojis
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

// add event listeners to each stars so that it handles click event
// loop through all the elements once
starsEl.forEach((starEl, index) => {
  // add event listeners to each star
  starEl.addEventListener("click", () => {
    // console.log("clicked", index);
    // update the rating
    updateRating(index);
  });
});

function updateRating(index) {
  // loop through all the stars
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  // loop through all the emojis
  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
