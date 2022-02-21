"use strict";

let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let clock = document.querySelector(".clock");
let time = document.querySelector(".time");
let arrowSeconds = document.querySelector(".arrow-second");
let arrowMinute = document.querySelector(".arrow-minute");
let arrowHour = document.querySelector(".arrow-hour");

let numberHours = 12;
let angleHour = 30;
let cell = 6;

btn.addEventListener("click", CLOCK_DOM, false);

function CLOCK_DOM() {
  let val = input.value;

  if (input.value && input.value >= 200 && input.value <= 800) {
    btn.style.display = "none";
    input.style.display = "none";
    clock.style.cssText = `display: block; width:${val}px; height:${val}px;`;

    let hourItem;

    for (let i = 1; i <= numberHours; i++) {
      hourItem = document.createElement("div");
      hourItem.innerHTML = i;
      hourItem.style.cssText =
        "position: absolute; border-radius: 50%; background: #48b382; width: 30px;height: 30px; font-weight: bold; font-family:sans-serif; font-size: 12px; display: flex; justify-content: center; align-items:center; margin: auto;";

      hourItem.setAttribute("data-item", i);

      switch (hourItem.getAttribute("data-item")) {
        case "1":
          hourItem.style.top = "10%";
          hourItem.style.right = "22%";
          break;
        case "2":
          hourItem.style.top = "calc(30% - 15px)";
          hourItem.style.right = "8%";
          break;
        case "3":
          hourItem.style.top = "calc(50% - 15px)";
          hourItem.style.right = "3%";
          break;
        case "4":
          hourItem.style.top = "calc(70% - 15px)";
          hourItem.style.right = "7%";
          break;
        case "5":
          hourItem.style.bottom = "10%";
          hourItem.style.right = "22%";
          break;
        case "6":
          hourItem.style.bottom = "2%";
          hourItem.style.left = 0;
          hourItem.style.right = 0;
          hourItem.style.margin = "auto";
          break;
        case "7":
          hourItem.style.bottom = "10%";
          hourItem.style.left = "22%";
          break;
        case "8":
          hourItem.style.top = "calc(70% - 15px)";
          hourItem.style.left = "7%";
          break;
        case "9":
          hourItem.style.top = "calc(50% - 15px)";
          hourItem.style.left = "3%";
          break;
        case "10":
          hourItem.style.top = "calc(30% - 15px)";
          hourItem.style.left = "8%";
          break;
        case "11":
          hourItem.style.top = "10%";
          hourItem.style.left = "22%";
          break;
        case "12":
          hourItem.style.top = "2%";
          hourItem.style.left = 0;
          hourItem.style.right = 0;
          hourItem.style.margin = "auto";
          break;
      }

      clock.appendChild(hourItem);
    }
  }
}

function digitalWatch(getHours, getMinutes, getSeconds) {
  getMinutes.toString().length < 2
    ? (getMinutes = "0" + getMinutes)
    : getMinutes;

  getSeconds.toString().length < 2
    ? (getSeconds = "0" + getSeconds)
    : getSeconds;

  time.innerHTML = `${getHours}:${getMinutes}:${getSeconds}`;
}

setInterval(() => {
  let date = new Date();
  let seconds = date.getSeconds();
  let sdegree = seconds * cell;
  arrowSeconds.style.transform = "rotate(" + sdegree + "deg";

  let minutes = date.getMinutes();

  let hours = date.getHours();

  let hdegree = hours * angleHour + minutes / 2;

  arrowHour.style.transform = "rotate(" + hdegree + "deg";

  let mdegree = minutes * cell;

  arrowMinute.style.transform = "rotate(" + mdegree + "deg";
  digitalWatch(hours, minutes, seconds);
}, 1000);
