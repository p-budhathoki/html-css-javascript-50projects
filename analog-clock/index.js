// get hour, minute, second
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

console.log(hourEl, minuteEl, secondEl);

function updateClock() {
  // get the curent date which gives both date and time
  const currentDate = new Date();
  // console.log(currentDate);
  // update the clock every second using setTimeout
  setTimeout(updateClock, 1000);
  // console.log(currentDate);
  // get hour, minute, second and store it in the variables
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  //   console.log(hour, minute, second);

  // rotate the hour hand using (hour/12)*360deg to make it an analog clock
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  // rotate the second hand using (hour/60)*360deg to make it an analog clock
  const minuteDeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  // rotate the second hand using (hour/60)*360deg to make it an analog clock
  const secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();

// another method to update the instead of setTimeout method
// setInterval(updateClock, 1000);
