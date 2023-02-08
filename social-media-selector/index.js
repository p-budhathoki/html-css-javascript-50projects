// get the menu, social-list element and the arrow icon
const menuEl = document.querySelector(".menu");
const socialListEl = document.querySelector(".social-lists");
// select paragraph element
const menuTextEl = document.querySelector(".menu p");
// select all the li elements in the menu
const liEls = document.querySelectorAll(".social-lists li");
console.log(liEls);
//select p inside social-list
const socialP = document.querySelector(".social-lists li p");
const socialI = document.querySelector(".social-lists li i");

// add the event listener to the menuEl
menuEl.addEventListener("click", () => {
  // toggle the class called hide on the ul with social-lists class
  socialListEl.classList.toggle("hide");
  // rotate the down arrow icon upward using the class rotate
  menuEl.classList.toggle("rotate");
});

// document.querySelector(".social-lists li p").style.order = 2;
// document.querySelector(".social-lists li i").style.order = 1;

liEls.forEach((element) => {
  socialP.style.order = 2;
  socialI.style.order = 1;
});

// loop through all the li elements using forEach method
liEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
  });
});

// .social-lists li p {
//     order: 2;
// }

// .social-lists li i {
//     order: 1;
// }
