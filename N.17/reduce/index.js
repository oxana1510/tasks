let message = prompt("Введите строку", "");

let getSum = (str) => {
  let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  let sum = 0;
  str = str.toLowerCase().split("");
  return str.reduce((prev, cur) => {
    if (vowels.indexOf(cur) >= 0) {
      sum += 1;
    }
    return sum;
  }, 0);
};а

alert(`В этой строке ${getSum(message)} строчные/х букв`);
