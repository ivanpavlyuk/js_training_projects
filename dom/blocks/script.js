const list = document.querySelector(".blocks");
const color = document.querySelector("#color");
const quantity = document.getElementById("quantity");
let isEven = true;

quantity.addEventListener("input", createBlocks);
color.addEventListener("input", changeColor);

function createBlocks() {
  list.innerHTML = "";
  for (let i = 0; i < quantity.value; i++) {
    const block = document.createElement("li");
    block.textContent = i + 1;
    list.appendChild(block);
    console.log(i);
  }
}

function changeColor() {
  const blocks = document.querySelectorAll("li");
  blocks.forEach((block) => (block.style.backgroundColor = "initial"));
  for (let i = 0; i < blocks.length; i++) {
    if (isEven && i % 2 != 0) {
      blocks[i].style.backgroundColor = color.value;
    } else if (!isEven && i % 2 == 0) {
      blocks[i].style.backgroundColor = color.value;
    }
  }
  isEven = !isEven;
}
