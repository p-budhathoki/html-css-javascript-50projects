// target the id with celsius, kelvin and fahrenheit and store the reference in the celsiusEl, kelvinEl and fahrenheitEl
const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

// calculate teh temperature
function computeTemp(event) {
  //   console.log("change");
  //   console.log(event.target.name, event.target.value);
  // adding + makes sure the temperature is number and not a string
  const currentValue = +event.target.value;

  // event.target.name gives celsius or kelvin or fahrenheit as the result
  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    default:
      break;
  }
}
