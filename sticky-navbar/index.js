// return navbar element with querySelector
const navbarEl = document.querySelector(".navbar");
console.log(navbarEl);
// height of navbar element(40px)
console.log(navbarEl.offsetHeight);
// get the bottom container element and its top offset(706px)
const bottomContainerEl = document.querySelector(".bottom-container");
console.log(bottomContainerEl.offsetTop);
// add event listener when scrolling
window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
