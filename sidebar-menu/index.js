// get .fa-bar, sidebar, closing button-fa-times
const bars = document.querySelector(".fa-bars");
console.log(bars);
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

// add event listener to the bar
bars.addEventListener("click", (params) => {
  console.log("clicked");
  // toggle sidebar
  sidebar.classList.toggle("show-sidebar");
});

// add event listener to the closing button
closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
