// get button, video, font awesome class fa, preloader
const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

// add event listener for button click
btn.addEventListener("click", () => {
  // if the button has class pause remove it
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
  }
});

// trigger this function when the window is completely loaded
window.addEventListener("load", () => {
  preloader.style.zIndex = "-2";
});
