// bring image-container div into javascript and store it in a constant so that it can be used to manipulate images
const imageContainerEl = document.querySelector(".image-container");
// select button
const btnEl = document.querySelector(".btn");

// add event listener to the button
btnEl.addEventListener("click", () => {
  console.log("button clicked");

  addNewImages();
});

// function to add more images
function addNewImages() {
  // set the number of images to display when the button is clicked
  let imageNum = 4;
  for (let index = 0; index < imageNum; index++) {
    // create new image element using createElement method
    const newImageEl = document.createElement("img");

    // add the src attribute to the newly created image element and use random number generator to generate random image number
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    // add th newly created image element with src attribute to the image-container div
    imageContainerEl.appendChild(newImageEl);
  }
}
