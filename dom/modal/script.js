const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const pageButton = document.querySelector(".button");

pageButton.addEventListener("click", callWindow);

function callWindow() {
  const overlay = createOverlay();
  const window = createWindow();

  wrapper.appendChild(overlay);
  wrapper.appendChild(window);

  overlay.addEventListener("click", () => {
    wrapper.removeChild(overlay);
    wrapper.removeChild(window);
  });
  window.lastElementChild.addEventListener("click", () => {
    wrapper.removeChild(overlay);
    wrapper.removeChild(window);
  });
}

function createOverlay() {
  const overlay = document.createElement("div");

  overlay.style.backgroundColor = "lightblue";
  overlay.style.opacity = "0.5";
  overlay.style.height = "100%";
  overlay.style.width = "100%";
  overlay.style.position = "absolute";

  return overlay;
}

function createWindow() {
  const window = document.createElement("div");
  const text = document.createElement("p");
  const button = document.createElement("button");
  const buttonX = document.createElement("div");
  const buttonY = document.createElement("div");

  window.style.padding = "20px";
  window.style.position = "absolute";
  window.style.backgroundColor = "coral";
  window.style.borderRadius = "5px";
  window.style.border = "3px solid black";

  text.textContent = "Hello world!";
  text.style.color = "white";
  text.style.fontSize = "3rem";

  button.style.width = "20px";
  button.style.height = "20px";
  button.style.padding = "2px";
  button.style.borderRadius = "50%";
  button.style.position = "absolute";
  button.style.top = "0";
  button.style.right = "0";
  button.style.transform = "translate(50%, -50%)";

  buttonX.style.height = "3px";
  buttonY.style.height = "3px";
  buttonX.style.backgroundColor = "black";
  buttonY.style.backgroundColor = "black";
  buttonX.style.transform = "rotate(45deg) translate(1px, 1px)";
  buttonY.style.transform = "rotate(-45deg) translate(1px, -1px)";

  window.appendChild(text);
  window.appendChild(button);
  button.appendChild(buttonX);
  button.appendChild(buttonY);

  return window;
}
