// target the div with counter class which now contains an array of three elements
const countersEl = document.querySelectorAll(".counter");

// loop through each counter, once for each element of the array
countersEl.forEach((counterEl) => {
  // set the text to 0 in the beginning
  counterEl.innerText = "0";

  incrementCounter();
  // function to increment the counterEl
  function incrementCounter() {
    // get the initial value of the counter i.e. 0
    let currentNum = +counterEl.innerText;
    // get the maximum value of the counter
    const dataCeil = counterEl.getAttribute("data-ceil");
    console.log(dataCeil);
    // rate of increment of the counter dataCeil/lowest counter so that all three elements reach their final value at the same time
    const increment = dataCeil / 15;
    // get the current value of the counter
    currentNum = Math.ceil(currentNum + increment);
    counterEl.innerText = currentNum;

    // call the function to increment the counter every 50ms until the final value is reached
    if (currentNum < dataCeil) {
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
