// target the button
const btnEl = document.getElementById("btn");
// url of the api
const apiURL = "https://api.quotable.io/random";
// target the span element with the id of quote which displays the quote
const quoteEl = document.getElementById("quote");
// target the p element with the id of author which is displayed in the page
const authorEl = document.getElementById("author");

// getQuote function
async function getQuote() {
  try {
    // updating info when loading the  quote

    btnEl.innerText = "Loading ...";
    btnEl.disabled = true;

    quoteEl.innerText = "Updating ...";
    // authorEl.innerHTML = "Updating ...";
    authorEl.inertText = "Updating ...";
    //   console.log("clicked");
    // get the response from the api, await waits for the response of api before going to the next line
    const response = await fetch(apiURL);
    // convert to json file
    const data = await response.json();
    console.log(data);
    // store the quote and author in variables
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    // display the quote
    quoteEl.innerText = quoteContent;
    // display the author
    authorEl.innerText = "~" + quoteAuthor;

    // change the status of the button
    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error occurred, please try again later.";
    btnEl.innerText = "Get a Quote";
    authorEl.innerText = "";
    btnEl.disabled = false;
  }
}
// call the function so that there is a quote when first visiting the website
getQuote();

// add event listeners - listen for click events and call the function getQuote()
btnEl.addEventListener("click", getQuote);

// api.quotable.io/random
