let message = prompt("Введите строку", "");

let getSum = (str) => {
  let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  let sum = 0;
  str = str.toLowerCase().split("");

  str.forEach((el) => {
    if (vowels.includes(el)) {
      sum += 1;
    }
  });

  return sum;
};

alert(`В этой строке ${getSum(message)} строчные/х букв`);
