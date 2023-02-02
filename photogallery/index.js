// get the button element
const btnEl = document.getElementById("btn");
// get the error message element
const errorMsgEl = document.getElementById("errorMessage");
// get the gallery element to display images
const galleryEl = document.getElementById("gallery");

// create a function named fetchImage
async function fetchImage() {
  //   console.log("clicked");
  const inputValue = document.getElementById("input").value;

  if (inputValue > 10 || inputValue < 1) {
    errorMsgEl.style.display = "block";
    errorMsgEl.innerText = "Please enter a number between 1 and 10 inclusive";
    return;
  }
  // create a constant for url
  imgs = " ";
  try {
    btnEl.style.display = "none";
    const loading = `<img src="../../webprojects/images/Spinner-1s-131px.svg" alt="Loading" />`;
    galleryEl.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=PO-rTqjk2AGjIcFNrrPxWIdB4NKxMS5qACYs8kdZbZs`
    ).then((res) =>
      res.json().then((data) => {
        // console.log(data);
        if (data) {
          data.forEach((pic) => {
            // console.log(pic.urls.small);
            imgs += `
            <img src=${pic.urls.small} alt = "image"/>
            `;
            galleryEl.style.display = "block";
            galleryEl.innerHTML = imgs;
            btnEl.style.display = "block";
            errorMsgEl.style.display = "none";
          });
        }
      })
    );
  } catch (error) {
    console.log(error);
    errorMsgEl.style.display = "block";
    errorMsgEl.innerHTML = "An error occurred, please try again later";
    btnEl.style.display = "block";
    galleryEl.style.display = "none";
  }
}

// event listener
btnEl.addEventListener("click", fetchImage);
