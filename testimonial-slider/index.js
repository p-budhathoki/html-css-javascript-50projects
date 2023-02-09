// array to hold name, photo and reviews for the testimonial section
const testimonials = [
  {
    name: "Romola K.",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1673296129756-e45408e25250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Hp laptops has completely surpassed our expectations. I would be lost without hp laptops. If you want real marketing that works and effective implementation - hp laptops's got you covered. Without hp laptops, we would have gone bankrupt by now.",
  },
  {
    name: "Godwin D.",
    photoUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "I would gladly pay over 600 dollars for vaccum cleaner. I will refer everyone I know. Your company is truly upstanding and is behind its product 100%.",
  },
  {
    name: "Carree I.",
    photoUrl:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    text: "It's the perfect solution for our business. I wish I would have thought of it first. Thank you for making it painless, pleasant and most of all hassle free! Absolutely wonderful!",
  },
];
// get paragraph, image and h4 tags
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();
// function to update testimonials
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  // dynamically update description
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  // increment index
  idx++;
  // reset the index so that the testimonial keeps looping through
  if (idx === testimonials.length) {
    idx = 0;
  }
  // set timer
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
