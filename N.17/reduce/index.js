let message = prompt("Введите строку", "");

let getSum = (str) => {
  let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  str = str.toLowerCase().split("");
  return str.reduce((prev, cur) => {
    if (vowels.indexOf(cur) >= 0) {
      prev+=1;
    }
    return prev;
  }, 0);
};

alert(`В этой строке ${getSum(message)} строчные/х букв`);
