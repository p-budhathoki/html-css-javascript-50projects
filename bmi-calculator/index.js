// get access to the button
const btnEl = document.getElementById("btn");
// get the input type with bmi-result as the id
const bmiInputEl = document.getElementById("bmi-result");
// get the element with the id of weight-condition and store it in the weight-conditionEl
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  //   console.log("clicked");
  // get height and weight values using their ids
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  //   console.log("height: " + heightValue + " weight: " + weightValue);
  // calculate the bmi : bmi = weight / height*2 (weight in meters)
  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
  console.log("bmi: " + bmiValue);
  // display the bmi
  bmiInputEl.value = bmiValue;

  // weight condition
  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

// add event listeners for the button
btnEl.addEventListener("click", calculateBMI);
