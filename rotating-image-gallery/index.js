// generate random number between 1 and 900
let randomNumber = Math.floor(Math.random() * 900) + 1;
console.log(randomNumber);
document.querySelector(
  "img"
).src = `https://picsum.photos/id/${randomNumber}/300/200`;

// select image-container class, nexts and next buttons
const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
// variable for degrees of rotation
let x = 0;
// variable for stopping the infinite loop
let timer = 0;
// add event listener previous button
prevEl.addEventListener("click", () => {
  // add 45 degrees of rotation
  x = x + 45;
  // clear the timer
  clearTimeout(timer);
  // update the image gallery
  updateGallery();
});
// next button - event listener
nextEl.addEventListener("click", () => {
  // add 45 degrees of rotation
  x = x - 45;
  // clear the timer
  clearTimeout(timer);
  // update the image gallery
  updateGallery();
});

// updateGallery
function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  // set the timer for 3 seconds so there is automatic slide show if the previous or next button is not pressed
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

// call the function updateGallery so that the loop starts for the first time
updateGallery();
