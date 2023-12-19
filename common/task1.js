// Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.

const string = "Привет! Как дела?";
const vowels = "АЕЁИЙОУЭЮЯаеёийоуэюя";
let result = "";

function getVowels(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) result += string[i];
  }
  return result;
}

console.log(getVowels(string));
