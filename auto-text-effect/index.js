// select the container
const containerEl = document.querySelector(".container");
// an array of careers
const careers = ["Web Developer", "Youtuber", "Freelancer", "Instructor"];
// set default value for career - Web Developer
let careerIndex = 0;
// get the index of the characters in careers array
let characterIndex = 0;

updateText();
function updateText() {
  characterIndex++;
  // manipulate the containerEl
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  // call the function more than once after a delay
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  // reset the careerIndex to 0 so that the loop will continue
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
