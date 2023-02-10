// get the background image
const bgimageEl = document.getElementById("bg-image");

// track the scroll bar using the event listener
window.addEventListener("scroll", () => {
  // function changes the size and opacity of the image
  updateImage();
});

function updateImage() {
  // change the opacity of the background image
  bgimageEl.style.opacity = 1 - window.scrollY / 800;
  console.log(window.scrollY, 1 - window.scrollY / 900);
  // change the background size of the background image
  bgimageEl.style.backgroundSize = 160 - window.scrollY / 12 + "%";
}
