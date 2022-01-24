// Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом.
// (Палиндром - это фраза, которая слева направо читается так же как справа налево)
// Массивы при решении не использовать.
// При проверке должны игнорироваться:
//  - регистр букв;
//  - пробелы;
//  - знаки препинания;
//  - мягкие и твёрдые знаки;
//  - разница между буквами "е" и "ё".
// Спросить у пользователя строку. Вывести через alert сообщение "это палиндром" или "это не палиндром".

const message = prompt("Введите слово палиндром", "");

function palindrom(str) {
  str = str
    .toLowerCase()
    .replace(/[- .,:;!?/ъь]/g, "")
    .replace(/ё/g, "е");

  let strItem = "";
  let strItem2 = "";

  for (let i = 0; i < str.length; i++) {
    strItem = str.charAt(str.length - 1 - i);
    strItem2 = str.charAt(i);

    if (strItem !== strItem2) {
      return false;
    }
  }

  return true;
}

palindrom(message);

if (palindrom(message)) {
  alert("Это палиндром");
} else {
  alert("Это не палиндром");
}
