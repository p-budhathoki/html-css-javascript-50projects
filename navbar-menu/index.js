// get hamburger menu, ul menu
const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

// add event listener to the bars
bar.addEventListener("click", () => {
  // if someone clicks on the bar show menu
  menu.classList.toggle("show-menu");
});
