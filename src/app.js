/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Variables
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Función para obtener un elemento aleatorio de un array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Función para generar la excusa
  function generateExcuse() {
    let excuse = `${getRandomElement(who)} ${getRandomElement(
      action
    )} ${getRandomElement(what)} ${getRandomElement(when)}.`;
    return excuse;
  }

  // Función para mostrar la excusa en el elemento con id="excuse"
  function displayExcuse() {
    let excuseElement = document.getElementById("excuse");
    excuseElement.innerHTML = generateExcuse();
  }

  // Llamar a la función displayExcuse cuando se cargue la página
  displayExcuse();

  console.log("Hello Rigo from the console!");
};
