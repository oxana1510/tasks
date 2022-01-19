let message = prompt("Введите строку", "");

let getSum = (str) => {
  let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  return str
    .toLowerCase()
    .split("")
    .filter((el) => vowels.indexOf(el) >= 0).length;
};

alert(`В этой строке ${getSum(message)} строчные/х букв`);
