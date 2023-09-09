// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";
const simpleForm = document.querySelector("#form");
const formText = document.querySelector("#input");
const btnForm = document.querySelector(".addBtn");
const ulAllContent = document.querySelector(".second-list-js");
const clearListLocal = document.querySelector(".clear-list");
clearListLocal.addEventListener("click", oneClick);
function oneClick(evt) {
  localStorage.clear(evt);
  ulAllContent.textContent = "";
}
window.addEventListener("load", () => {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  for (const item of storedItems) {
    appendListItem(item);
  }
});

function fromContent(event) {
  event.preventDefault();
  const inputTextEl = formText.value;

  appendListItem(inputTextEl);

  saveToLocalStorage(inputTextEl);

  formText.value = "";
}

function appendListItem(text) {
  const screenText = `<li>${text}</li>`;
  ulAllContent.innerHTML += screenText;
}

function saveToLocalStorage(item) {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];

  storedItems.push(item);

  localStorage.setItem("items", JSON.stringify(storedItems));
}

// СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ
