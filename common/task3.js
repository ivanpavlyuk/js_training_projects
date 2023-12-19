// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

const path = "/users/download/index.html";

function isHtml(path) {
  return path.endsWith(".html");
}

console.log(isHtml(path));
