// return button using querySelector as it is a class
const btnEl = document.querySelector(".btn");

// listen to the event to track the position of the mouse around the button. when the mouseover happens, trigger the function
btnEl.addEventListener("mouseover", (event) => {
  // get the position of the mouse over the button from top and left
  console.log(event.pageX - btnEl.offsetTop);
  // store the position of x and y variables
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;
  // change the style in the css. this is where the center of the circle starts and prodeuces the ripple effect
  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
