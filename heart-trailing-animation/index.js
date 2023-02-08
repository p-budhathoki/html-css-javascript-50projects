// use querySelector to get access to the body of html as it does not have any tags
const bodyEl = document.querySelector("body");

// add event listener to the bodyEl and attach event handler to detect the movement of the mouse inside the body element
bodyEl.addEventListener("mousemove", (event) => {
  //   console.log("mousemove");
  // get x and y position of the mouse
  //   console.log(`x position: ${event.offsetX}, y position: ${event.offsetY}`);

  // save the x and y position of the mouse in variables
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  // create a span element each time the mouse moves
  const spanEl = document.createElement("span");

  // style the span element and use the x position and y position
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  // generate random number and use it to generate different sizes span element
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // append the span element inside the body element
  bodyEl.appendChild(spanEl);

  // remove the span element after a certain amount of time
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
