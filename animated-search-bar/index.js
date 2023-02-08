// select the div that contains the search bar and the magnifier which is contained in img element
const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

// add event listeners to searchBarContainer
magnifierEl.addEventListener("click", () => {
  // toggle the class active on div element
  searchBarContainerEl.classList.toggle("active");
});
