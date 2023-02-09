// get day hour minute and second
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

// get the current date and time from computer using date constructor
const newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();
// console.log(newYearDate);

updateCountdown();
// function to create a new year countdown
function updateCountdown() {
  // get the date now
  const now = new Date().getTime();
  // gap between the current date and new year date
  const gap = newYearDate - now;
  //   console.log(now, gap);
  // convert milliseconds to seconds
  const second = 1000;
  const minutes = second * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  // remaining days
  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hours);
  const m = Math.floor((gap % hours) / minutes);
  const s = Math.floor((gap % minutes) / second);

  // display the countdown in web browsers
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  // refresh every one second
  setTimeout(updateCountdown, 1000);
}
