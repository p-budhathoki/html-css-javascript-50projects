// target first div which contains the first group of currencies and store the reference in currencyFirstEl and do the same for the second group of currencies
const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
// target the first input  or the first currency and the second input too
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
// target the exchange rate
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();
// function to update the rates
function updateRate() {
  console.log("called");
  fetch(
    `https://v6.exchangerate-api.com/v6/2f18a0cc20bb983e6783c923/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(data);
      console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}
// ${worthFirstEl.value}
// ${worthSecondEl.value}*${worthFirstEl.value}

// add event listener to the currencyFirstEl which means any change that happens will call the function updateRate
currencyFirstEl.addEventListener("change", updateRate);

// add a second event listener to the currencySecondEl which means any change that happens will call the function updateRate
currencySecondEl.addEventListener("change", updateRate);

// add the third event listener to the worthFirstEl which means any change that happens will call the function updateRate
worthFirstEl.addEventListener("input", updateRate);
