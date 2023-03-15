const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputArea = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const allBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = `${30 + i * 10}px`;
    const singleBox = document.createElement("div");
    singleBox.style.backgroundColor = getRandomHexColor();
    singleBox.style.width = size;
    singleBox.style.height = size;
    console.log(singleBox);
    allBoxes.appendChild(singleBox);
  }
  document.getElementById("boxes").appendChild(allBoxes);
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = '';
}

createButton.addEventListener("click", () => createBoxes(inputArea.value));
destroyButton.addEventListener("click", destroyBoxes);