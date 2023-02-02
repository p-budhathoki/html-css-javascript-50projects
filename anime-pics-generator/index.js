const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImageEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");
const spinner = "../images/Rolling-1s-200px.svg";

btnEl.addEventListener("click", async function () {
  try {
    // change the button to disabled state after click event
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    animeNameEl.innerText = "Updating...";
    animeImageEl.src = spinner;

    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    console.log(data);

    // change the button to enabled state after the completion of the fetch operation
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";

    // display the anime-container for viewing anime characters
    animeContainerEl.style.display = "block";
    animeImageEl.src = data.url;

    // change the text inside the Anime Name h3 heading
    animeNameEl.innerText = data.artist;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "An error occurred, please try again later.";
    animeImageEl.src = "https://wallpapercave.com/wp/wp3595729.jpg";
  }
});

// ../images/Rolling-1s-200px.svg
