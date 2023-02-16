// get tabs, buttons, content
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

// add event listener to the tabs
tabs.addEventListener("click", (event) => {
  console.log(event.target.dataset.id);
  // store the id
  const id = event.target.dataset.id;

  if (id) {
    // loop through each button
      btns.forEach((btn) => {
        // remove selected from other buttons
      btn.classList.remove("live");
    });
    event.target.classList.add("live");
    // loop through each article content
      articles.forEach((article) => {
        // hide other articles
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
