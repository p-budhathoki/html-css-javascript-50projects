// array for kits
const kits = ["crash", "kick", "snare", "tom"];
// get the container
const containerEl = document.querySelector(".container");

// for each kit in kits create button element and append it to the div with .container class
kits.forEach((kit) => {
  // create button element and append it to the container
  const btnEl = document.createElement("button");
  containerEl.appendChild(btnEl);
  // add the class .btn to the button elements
  btnEl.classList.add("btn");
  // add the text inside the button element
  btnEl.innerText = kit;
  // add the background image to the button element
  //   url(../images/drum-kits-images/tom.png)
  btnEl.style.backgroundImage =
    "url(../images/drum-kits-images/" + kit + ".png";

  // create audio element and append it to the button elements
  const audioEl = document.createElement("audio");
  // add the audio file to the audio element
  audioEl.src = "drum-kits-sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  // add event listeners to the buttons so that we can hear the audio
  btnEl.addEventListener("click", () => {
    // play the audio
    audioEl.play();
  });
  // add event listeners to the buttons so that we can hear the audio when pressing the keyboard button
  window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    if (event.key === kit.charAt(0)) {
      audioEl.play();
      // show animation in button when pressing the keyboard button

      btnEl.style.transform = "scale(.9)";
      // get the buttons back to the original position
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
