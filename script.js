const container = document.querySelector(".container");

const pictures = [
  "url('https://images.unsplash.com/photo-1560719268-60a714bd4c31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')",
  "url('https://images.unsplash.com/photo-1543237935-aa9ffc1c0bc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
  "url('https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
  "url('https://images.unsplash.com/photo-1563784269116-ff83fae17724?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80')",
];

let index = 1;

setInterval(() => {
  index++;
  if (index > pictures.length - 1) {
    index = 0;
  }
  container.style.backgroundImage = pictures[index];
}, 3000);

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

let count = 1;

// setInterval(() => {
//   carousel.style.transform = "translateY(" + -count * 100 + "%)";
//   count++;
//   if (count === slides.length) {
//     count = 0;
//   }
// }, 2000);
