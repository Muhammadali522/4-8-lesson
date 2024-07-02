let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let span = document.querySelector(".span")

let number = 0;

btn1.addEventListener("click", (evt) => {
  number++;
  span.textContent = number;
});

btn2.addEventListener("click", (evt) => {
  number--;
  span.textContent = number;
});

