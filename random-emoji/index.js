// target button and paragraph elements and store their references
const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

// store emoji in arrays
const emoji = [];

// function to add/get emoji. call this function when the website is loaded
async function getEmoji() {
  // get the response from the api server
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=a9ca6258a5536c5282011b33a87f3fef463d8719"
  );
  // change the response to the json data
  data = await response.json();
  //   console.log(data);

  // use the emojis upto 1500 as there rest of the emojis are related to country codes,etc
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
  console.log(emoji);
}

getEmoji();
console.log(emoji);

// add event listener for the button
btnEl.addEventListener("click", () => {
  //   console.log("clicked");
  // create a random number between 0 and 1500
  const randomNum = Math.floor(Math.random() * emoji.length);
  console.log(randomNum);
  // generate a random emoji using random number
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});

// a9ca6258a5536c5282011b33a87f3fef463d8719
