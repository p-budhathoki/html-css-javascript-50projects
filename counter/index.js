// get the span element
const valueEl = document.querySelector(".value");
// get all the buttons
const btnsEl = document.querySelectorAll(".btn");
console.log(btnsEl);

let num = 0;

// get access to all the buttons
btnsEl.forEach((btn) => {
  console.log(btn);
});

// add event listener to the buttons
btnsEl.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(event.currentTarget);
    console.log(event.currentTarget.classList);
    // store teh value of currentTarget.classlist in a variable
    const styles = event.currentTarget.classList;

    if (styles.contains("btn-danger")) {
      num--;
      // console.log(num--)
    } else if (styles.contains("btn-success")) {
      num++;
    } else {
      num = 0;
    }
    // update the value of num
    valueEl.textContent = num;

    // change the color of the number
    if (num < 0) {
      valueEl.style.color = "red";
    } else if (num > 0) {
      valueEl.style.color = "#72ffff";
    } else {
      valueEl.style.color = "whitesmoke";
    }
  });
});
