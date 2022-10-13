const pixelBoard = document.getElementById('pixel-board');
const clickedColor = document.getElementById('color-palette');
const clearBoard = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');
let boardSize = document.getElementById('board-size');
let lengthSize = 25;

clearBoard.addEventListener("click", limpaPixel);

function limpaPixel(event) {
 let container = pixelBoard.getElementsByClassName("pixel");
 for (let i = 0; i < container.length ; i += 1) {
   container[i].style.backgroundColor = "white";
 }
}

generateBoard.addEventListener("click", changeSize);

function changeSize(event) {
  let inputedValue = boardSize.value;
  let valueSize = Number(inputedValue);
  if (inputedValue === '') {
    return alert('Board inválido!')
  } 
  if (valueSize < 5) {
    valueSize = 5
  } else if (valueSize > 50) {
    valueSize = 50
  };
 pixelBoard.style.width = `${(valueSize * 42) + valueSize}px`;
 removePixels();
 lengthSize = valueSize * valueSize;
 createPixel(lengthSize);
}

function removePixels() {
  let pixelsList = document.querySelectorAll('.pixel')
  for (let i = 0; i < pixelsList.length; i += 1) {
    pixelsList[i].remove();
  }
}

function createPixel(lengthSize) {
  for (let x = 0; x < lengthSize; x += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('click', recebeCor);
    pixelBoard.appendChild(pixel);
  }
}

createPixel(lengthSize);

clickedColor.addEventListener('click', recebeClick);

function recebeClick(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function recebeCor(event) {
  const pixelSelected = event.target;
  const selectedColor = document.getElementsByClassName('selected')[0];
  const colorName = selectedColor.id;
  pixelSelected.style.backgroundColor = colorName;
}

