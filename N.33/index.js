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

      let agle = 360 / numberHours;
      let curAgle = i * agle;
      let radAgle = curAgle * Math.PI / 180;
      let widthCircle = 15;

      let bottom = (50 + ((50 - (widthCircle / 2)) * Math.cos(radAgle))) - (widthCircle / 2);
      let left = (50 + ((50 - (widthCircle / 2)) * Math.sin(radAgle))) - (widthCircle / 2);

      let fontSize = val/numberHours;


      hourItem.innerHTML = i;
      hourItem.style.cssText = `position: absolute; left: ${left}%; bottom: ${bottom}%;border-radius: 50%; background: #48b382; width: ${widthCircle}%;height: 15%; font-weight: bold; font-family:sans-serif; font-size: ${fontSize}px; display: flex; justify-content: center; align-items:center;`;

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

    time.style.fontSize = input.value/numberHours;

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

console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)