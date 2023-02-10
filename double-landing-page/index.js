// select container, div with class right and left
const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

// add event listener to the left side. when the mouse is over the left side we trigger the active-left css class
leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
});
// remove the class active-left from the container when the mouse leaves the container
leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
});
// add event listener to the right side. when the mouse is over the right side we trigger the active-right css class
rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-right");
});
// remove the class active-right from the container when the mouse leaves the container
rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-right");
});
