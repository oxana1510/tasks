"use strict";

class HashStorageFunc {
  #values = {};

  addValue(key, value) {
    return (this.#values[key] = value);
  }

  getValue(key) {
    return this.#values[key];
  }

  deleteValue(key) {
    if (!(key in this.#values)) return false;
    delete this.#values[key];
    return true;
  }

  getKeys() {
    return Object.keys(this.#values);
  }
}

let drinkStorage = new HashStorageFunc();

function info() {
  let drinkInfo = { recipe: "", alco: "" };

  let drinkName = prompt("Введите название напитка", "");
  let drinkRecipe = prompt("Введите рецепт", "");

  drinkInfo.recipe = drinkRecipe;
  let drinkAlco = confirm("Напиток алкогольный?", "");
  drinkInfo.alco = drinkAlco;
  drinkStorage.addValue(drinkName, drinkInfo);
}

function getInfo() {
  let enterDrinkName = prompt("Введите название напитка", "");
  let getDrink = drinkStorage.getValue(enterDrinkName);

  if (getDrink) {
    let alcoInfo = () => (getDrink.alco ? "да" : "нет");
    alert(`
    Напиток: ${enterDrinkName};
    алкогольный: ${alcoInfo()};
    рецепт приготовления: ${getDrink.recipe};`);
  } else {
    alert("Такого напитка нет");
  }
}

function deleteDrink() {
  let enterDrinkName = prompt("Введите название напитка", "");
  let getDrink = drinkStorage.deleteValue(enterDrinkName);

  if (getDrink) {
    alert("Напиток был удален");
  } else {
    alert("Такого напитка нет");
  }
}

function getAllDrinks() {
  alert(drinkStorage.getKeys());
}
