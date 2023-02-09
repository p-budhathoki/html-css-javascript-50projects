// get the button element, input element, icon element and alert container
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

// add event listener to generate the password
btnEl.addEventListener("click", () => {
  createPassword();
});

// add event listener to the copy icon element
copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    // use setTimeout to briefly show the copied password
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

// create password function
function createPassword() {
  // characters
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";

  // create a new password using 14 characters from char
  for (let index = 0; index < passwordLength; index++) {
    // random number from 0 to the end of the chars
    const randomNum = Math.floor(Math.random() * chars.length);
    // substring method extracts characters, between two indices(positions), from a string and returns the substring
    // substring() method extracts characters from start to end (exclusive), it does not change the original string
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, password);
  }
  // generated password is shown on the input field after the button is clicked
  inputEl.value = password;
  // store alert container with the generated password and show it when the icon is clicked
  alertContainerEl.innerText = password + "copied!";
}

function copyPassword() {
  // select the generated password
  inputEl.select();
  // select the generated password in mobile devices
  inputEl.setSelectionRange(0, 9999);
  // copy the generated password into clipboard
  navigator.clipboard.writeText(inputEl.value);
}
