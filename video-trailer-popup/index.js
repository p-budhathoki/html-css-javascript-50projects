// get button, close icon, trailer-container, video tag
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

// add event listener to the button element
btnEl.addEventListener("click", () => {
  // remove active class from trailer-container when the button is clicked
  trailerContainerEl.classList.remove("active");
});

// add event listener to the close icon element thereby reinstating the active class
closeIconEl.addEventListener("click", () => {
  // add active class to trailer-container
  trailerContainerEl.classList.add("active");
  // stop playing the video
  videoEl.pause();
  videoEl.currentTime = 0;
});
