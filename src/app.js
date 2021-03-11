/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["I", "My baby", "My car", "My boss"];
  let action = ["forgot", "peed", "changed", "killed"];
  let what = ["my homework", "the bathtub", "colors", "Susan"];
  let when = [
    "before the class",
    "while bathing",
    "when I finished",
    "while I was sleeping",
    "during my lunch"
  ];

  let myH1 = document.querySelector("#excuse");
  let sentence =
    who[getRndInteger(0, who.length - 1)] +
    " " +
    action[getRndInteger(0, action.length - 1)] +
    " " +
    what[getRndInteger(0, what.length - 1)] +
    " " +
    when[getRndInteger(0, when.length - 1)];

  myH1.innerHTML = sentence;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
