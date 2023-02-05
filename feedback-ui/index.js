// bring all the divs with rating class into the javascript. target all the classes with the class of rating
const ratingEls = document.querySelectorAll(".rating");
// create a variable for the selected rating
let selectedRating = "";
// bring the button inside the javascript by targeting the .btn id inside the button element
let btnEl = document.getElementById("btn");
// bring the container id into the javascript by targeting the div
const containerEl = document.getElementById("container");

ratingEls.forEach((ratingEl) => {
  // add event listener to each rating element using forEach loop
  ratingEl.addEventListener("click", (event) => {
    // remove all the active classes from the parent div with class rating
    removeActive();
    // stores one of the values : satisfied or neutral or unhappy
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    // get the inner text of the rating element. it does not get the innertext if emoji is clicked as it is not the part that has the text. in order to get the innertexst when emoji is clicked we need to target the parentNode of the rating element
    console.log(event.target.innerText || event.target.parentNode.innerText);
    // add the active class to the rating element that has been selected, the class needs to be added to the parent div so that the clicking of emoji can also add the active class to the rating element
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// now that we have access to the button element we add event listener to the button
btnEl.addEventListener("click", () => {
  // do nothing if the button is not clicked else the selectedRating is not empty then do the following
  if (selectedRating !== "") {
    // use backticks `` for dynamic updating
    containerEl.innerHTML = ` 
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <p>We'll use your Feedback to improve our customer support.</p>
    `;
  }
});

// remove active class using removeActive function
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
