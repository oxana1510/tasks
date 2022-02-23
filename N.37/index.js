"use strict";

let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let clock = document.querySelector(".clock");
let circle = clock.querySelector(".circle");
let time = clock.querySelector(".time");
let arrowSeconds = clock.querySelector(".arrow-second");
let arrowMinute = clock.querySelector(".arrow-minute");
let arrowHour = clock.querySelector(".arrow-hour");

let numberHours = 12;
let angleHour = 30;
let cell = 6;

btn.addEventListener("click", CLOCK_DOM, false);

function CLOCK_DOM() {
  let val = input.value;


  if (input.value && input.value >= 200 && input.value <= 800) {
    btn.style.display = "none";
    input.style.display = "none";
    clock.setAttribute("width", val);
    clock.setAttribute("height", val);
    circle.setAttribute("cx", val/2);
    circle.setAttribute("cy", val/2);
    circle.setAttribute("r", val/2);

    let hourItem;

    for (let i = 1; i <= numberHours; i++) {
      hourItem = document.createElementNS("http://www.w3.org/2000/svg",'circle');

      let agle = 360 / numberHours;
      let curAgle = i * agle;
      let radAgle = (curAgle * Math.PI) / 180;
      let widthCircle = 16;

      let bottom =
        58 + (47 - widthCircle / 2) * Math.cos(radAgle) - widthCircle / 2;
      let left =
        58 + (47 - widthCircle / 2 ) * Math.sin(radAgle) - widthCircle / 2;

      let fontSize = val / numberHours;

      hourItem.setAttribute("width",`${val/numberHours}`);
      hourItem.setAttribute("height",`${val/numberHours}`);
      hourItem.setAttribute("fill", "#48b382");
      hourItem.setAttribute("stroke", "#48b382");

      hourItem.setAttribute("cx", `${left}%`);
      hourItem.setAttribute("cy", `${bottom}%`);
      hourItem.setAttribute("r", val/numberHours);

      let textHourItem = document.createElementNS("http://www.w3.org/2000/svg",'text');

      textHourItem.setAttribute("class", "hour-item");
      textHourItem.setAttribute("x", `${left}%`);
      textHourItem.setAttribute("y", `${bottom + 2.5}%`);
     
      textHourItem.setAttribute("text-anchor", "middle");
      textHourItem.setAttribute("font-family", "sans-serif");
      textHourItem.setAttribute("font-weight", "bold");
      textHourItem.setAttribute("font-size", fontSize);
      
      console.log(textHourItem);
        textHourItem.innerHTML = i;


      circle.after(hourItem);
      hourItem.after(textHourItem)
    }
  }

  function getDateValues() {
    let date = new Date();
    let seconds = date.getSeconds();
    let sdegree = seconds * cell;
    arrowSeconds.setAttribute("transform", `rotate(${sdegree})`);

    let minutes = date.getMinutes();

    let hours = date.getHours();

    let hdegree = hours * angleHour + minutes / 2;

    arrowHour.setAttribute("transform", `rotate(${hdegree})`);

    let mdegree = minutes * cell;

    arrowMinute.setAttribute("transform", `rotate(${mdegree})`);

    digitalWatch(hours, minutes, seconds);
  }

  getDateValues();

  setInterval(() => {
    getDateValues();
  }, 1000);
}

function digitalWatch(getHours, getMinutes, getSeconds) {
  getMinutes.toString().length < 2
    ? (getMinutes = "0" + getMinutes)
    : getMinutes;

  getSeconds.toString().length < 2
    ? (getSeconds = "0" + getSeconds)
    : getSeconds;

  time.style.fontSize = input.value / numberHours;

  time.innerHTML = `${getHours}:${getMinutes}:${getSeconds}`;
  console.log(`${getHours}:${getMinutes}:${getSeconds}`);
}
