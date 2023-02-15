// get button elements, image-container, img tags,
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImg = 1;
// reset timer variable
let timeout;
// add event listener to the next element
nextEl.addEventListener("click", () => {
  // increment currentImg when next element is clicked
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

// add event listener to the previous element

prevEl.addEventListener("click", () => {
  // increment currentImg when next element is clicked
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  // if current image is greater than 4 bring the value of current image to 1
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(${-(currentImg - 1) * 500}px)`;

  // setup timer so that the image is updated without clicking the button
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
