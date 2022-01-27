let divPaleta = document.querySelectorAll('.color');

function createRandomColors() {
  let arrayColors = [];
  for (let i = 0; i < 4; i += 1) {
    if (i === 0) {
      arrayColors.push('black');
    } else {
      let randomNumber = Math.floor(Math.random() * 16777215).toString(16);
      let toBeAdded = '#' + randomNumber;
      arrayColors.push(toBeAdded);
    }
  }
  return arrayColors;
}
let colorsPaleta = createRandomColors();

function createPaletColors(divRecebida, colors) {
  for (let i = 0; i < divRecebida.length; i += 1) {
    divRecebida[i].style.backgroundColor = colors[i];
  }
}

createPaletColors(divPaleta, colorsPaleta);

function checkStatus() {
  let lerGrade = document.querySelector('#board-size').value;
  let lerGradeNum = parseInt(lerGrade);
  if (lerGradeNum >= 5 && lerGradeNum <= 50) {
    return lerGradeNum;
  } else if (lerGradeNum < 5) {
    return 5;
  } else if (lerGradeNum > 50) {
    return 50;
  } else if (lerGrade === '') {
    alert('Board inválido!');
    return 5;
  }
}

let numeroDeLinhas = checkStatus();

let pixelBoard = document.querySelector('#pixel-board');

function setLinesBoard(linhas) {
  for (let i = 0; i < linhas; i += 1) {
    let divLinha = document.createElement('div');
    divLinha.className = 'linha';
    pixelBoard.appendChild(divLinha);
  }
}

setLinesBoard(numeroDeLinhas);

function createPixels(colunas) {
  for (let d = document.querySelector('.linha'); d !== null; d = d.nextElementSibling) {
    for (let l = 0; l < colunas; l += 1) {
      let divTemp = document.createElement('div');
      divTemp.className = 'pixel';
      d.appendChild(divTemp);
    }
  }
}

createPixels(numeroDeLinhas);

function clearAll() {
  let board = document.querySelector('#pixel-board');
  for (let i = board.firstElementChild; i !== null; i = board.firstElementChild) {
    board.removeChild(i);
  }
  setLinesBoard(checkStatus());
  createPixels(checkStatus());
}

let button = document.querySelector('#generate-board');
button.addEventListener('click', clearAll);

let primeiraCor = document.querySelector('.color');
let segundaCor = primeiraCor.nextElementSibling;
let terceiraCor = segundaCor.nextElementSibling;
let quartaCor = terceiraCor.nextElementSibling;

primeiraCor.classList.add('selected');
primeiraCor.addEventListener('click', pickColor);
segundaCor.addEventListener('click', pickColor);
terceiraCor.addEventListener('click', pickColor);
quartaCor.addEventListener('click', pickColor);

function pickColor(element) {
  element.target.classList.add('selected');
  for (let i = element.target.previousSibling; i !== null; i = i.previousSibling) {
    i.className = 'color';
  }
  for (let i = element.target.nextSibling; i !== null; i = i.nextSibling) {
    i.className = 'color';
  }
}

function changeColorPixel(element) {
  element.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  element.currentTarget.style.backgroundColor = '';
}

function changePixel(element) {
  let primeiraLinha = document.querySelector('.linha');
  for (let d = primeiraLinha; d !== null; d = d.nextElementSibling) {
    d.addEventListener('click', changeColorPixel);
  }
}

let pixelsLinhaUm = document.querySelector('.linha');
pixelsLinhaUm.addEventListener('mouseover', changePixel);

button.addEventListener('click', changePixel);

let clickClear = document.getElementById('clear-board');

function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clickClear.addEventListener('click', clearBoard);
