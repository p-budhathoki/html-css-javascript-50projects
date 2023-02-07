// select div with the container class
const containerEl = document.querySelector(".container");

// create 30 divs with the class color-container and have them inside the div with container class. use for loop for this
for (let index = 0; index < 30; index++) {
  // create div element
  const colorContainerEl = document.createElement("div");
  // add class color-container to the div just created using classList
  colorContainerEl.classList.add("color-container");
  // append this new elements to the div with class container
  containerEl.appendChild(colorContainerEl);
}

// store all the 30 divs in a variable
const colorContainerEls = document.querySelectorAll(".color-container");
console.log(colorContainerEls);

generateColors();
// create function that generates the color by looping through all the 30 divs we have created

function generateColors() {
  // loop through all the 30 divs using forEach method
  colorContainerEls.forEach((colorContainerEl) => {
    // generate random color
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    // insert the respective color code in each div
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

randomColor();
// create function to generate color codes
function randomColor() {
  // charset for the color palette 0-9 and a-f
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  // create random color code using charset
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    // create random number between 0 and 15
    const randomNum = Math.floor(Math.random() * chars.length);
    console.log(randomNum);
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode, randomNum);
  }
  return colorCode;
}
