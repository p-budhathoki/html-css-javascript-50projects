// get h1 and p from date div
const monthEl = document.querySelector("h1");
const fullDateEl = document.querySelector("p");

// get total days in a month
const lastDay = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();
console.log(lastDay);

// get first day of a month
const firstDay =
  new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() - 1;
console.log(firstDay);

// get days div
const daysEl = document.querySelector(".days");

// the index of month starts at 0
const monthIndex = new Date().getMonth();
// console.log(monthIndex);

// create an array of months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[monthIndex]);

// update the month and todays date
monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString();

let days = "";

// to create an empty days
for (let i = firstDay; i > 0; i--) {
  days += `<div class = "empty"></div>`;
}

// to update the days
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class = "today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
