const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "4y/mRR23k4OWD6B9KIvfhw==Ijy3Sl4DH5vuK4lC";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    //   console.log("clicked");
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    //   console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke...";
  } catch (error) {
    jokeEl.innerText = "An error occurred, please try again later.";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke...";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);

/*

var limit = 3;
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
  headers: { "X-Api-Key": "YOUR_API_KEY" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

*/
