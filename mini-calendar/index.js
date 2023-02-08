// get months name, day and year from html
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

// get date from the computer calendar
const date = new Date();
// console.log(date);
// console.log(date.getFullYear(), date.getMonth);

// get the month
const month = date.getMonth();
console.log(month); // returns 1 as january is 0

// update the calendar with month
monthNameEl.innerText = date.toLocaleString("en", { month: "long" });

// update the calendar with day of the week
dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });

// update the calendar with number for day of the week and year
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
