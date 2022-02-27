"use strict";

let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let clock = document.querySelector(".clock");

let numberHours = 12; //количество делений на циферблате
let five = 5; //для рачета расположения цифровых частов по высоте
let angleHour = 30; //для расчета угла
let cell = 6; //для расчета движения стрелок
let coefficient1 = 2.5; //коэффициент, используется в формуле для расположения цифр
let coefficient2 = 200; //коэффициент для расчета ширины секундной стрелки
let coefficient3 = 100; //коэффициент для расчета ширины минутной стрелки
let coefficient4 = 50; //коэффициент для расчета шириный стрелки часов
let coefficient5 = 2.3; //коэффициент для расчета длины секундной стрелки
let coefficient6 = 2.66; //коэффициент для расчета длины минутной стрелки
let coefficient7 = 3.6; //коэффициент для расчета длины стрелки часов

let sixty = 60; // количество секунд или минут

btn.addEventListener("click", CLOCK_CANVAS, false);

function CLOCK_CANVAS() {
  let context = clock.getContext("2d");
  let val = input.value;

  let halfVal = val / 2; //половина ширины или высоты окружности

  if (input.value && input.value >= 200 && input.value <= 800) {
    btn.style.display = "none";
    input.style.display = "none";

    context.canvas.width = val;
    context.canvas.height = val;

    context.translate(halfVal, halfVal);
  }

  function getDateValues() {
    let date = new Date();
    let seconds = (2 * Math.PI * date.getSeconds()) / sixty - Math.PI / 2;

    let minutes = (2 * Math.PI * date.getMinutes()) / sixty - Math.PI / 2;

    let hours =
      (2 * Math.PI * (date.getHours() % numberHours)) / numberHours -
      Math.PI / 2;

    context.clearRect(
      -halfVal,
      -halfVal,
      context.canvas.width,
      context.canvas.height
    );

    context.beginPath();
    context.fillStyle = "#FCCA66";
    context.arc(0, 0, halfVal, 0, Math.PI * 2, false);
    context.fill();

    for (let i = 1; i <= numberHours; i++) {
      let radAgle = (i / numberHours) * Math.PI * 2; // отображаемый угол в радианах

      let x = val / halfVal + Math.sin(radAgle) * (val / coefficient1); // проверяем для угла=0 - sin(0)=0 значит x=cx
      let y = val / halfVal - Math.cos(radAgle) * (val / coefficient1);

      context.beginPath();
      context.fillStyle = "#48b382";
      context.arc(x, y, val / numberHours, 0, Math.PI * 2, false);
      context.fill();

      context.fillStyle = "#000";
      context.font = `normal bold ${val / numberHours}px Arial, sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(`${i}`, x, y);
    }

    drawHand(seconds, val / coefficient2, val / coefficient5);
    drawHand(minutes, val / coefficient3, val / coefficient6);
    drawHand(hours, val / coefficient4, val / coefficient7);

    digitalWatch(
      context,
      val,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );

    let ms = date.getMilliseconds();
    setTimeout(() => {
      getDateValues();
    }, 1020 - ms);
  }

  function drawHand(value, width, length) {
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.lineTo(length * Math.cos(value), length * Math.sin(value));
    context.stroke();
  }

  getDateValues();
}

function digitalWatch(ctx, val, getHours, getMinutes, getSeconds) {
  getMinutes.toString().length < 2
    ? (getMinutes = "0" + getMinutes)
    : getMinutes;

  getSeconds.toString().length < 2
    ? (getSeconds = "0" + getSeconds)
    : getSeconds;

  ctx.fillStyle = "#000";
  ctx.font = `italic bold ${val / numberHours}px Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${getHours}:${getMinutes}:${getSeconds}`, 0, -val / five);
  console.log(`${getHours}:${getMinutes}:${getSeconds}`);
}
