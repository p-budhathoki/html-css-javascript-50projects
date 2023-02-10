// get the main container, button, popup window,close icon
const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

// add event listener to the button element
btnEl.addEventListener("click", () => {
  // add active class to the container
  containerEl.classList.add("active");
  // remove active class from the popup window
  popupContainerEl.classList.remove("active");
});

// add event listener to the close icon element
closeIconEl.addEventListener("click", () => {
  // remove active class from the container
  containerEl.classList.remove("active");
  // add active class to the popup window
  popupContainerEl.classList.add("active");
});
