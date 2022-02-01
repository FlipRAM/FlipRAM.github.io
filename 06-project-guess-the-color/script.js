function createRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const balls = document.querySelectorAll('.ball');

for (let index = 0; index < balls.length; index += 1) {
  balls[index].style.backgroundColor = createRGBColor();
}

const ballOne = document.querySelector('#ball1');
const ballTwo = document.querySelector('#ball2');
const ballThree = document.querySelector('#ball3');
const ballFour = document.querySelector('#ball4');
const ballFive = document.querySelector('#ball5');
const ballSix = document.querySelector('#ball6');

function checkAnswer(element) {
  const answer = element.target.style.backgroundColor;
  const feedback = document.querySelector('#rgb-color').innerText;
  const response = document.querySelector('#answer');
  if (answer === `rgb${feedback}`) {
    response.innerText = 'Acertou!';
  } if (answer !== `rgb${feedback}`) {
    response.innerText = 'Errou! Tente novamente!';
  }
}

ballOne.addEventListener('click', checkAnswer);
ballTwo.addEventListener('click', checkAnswer);
ballThree.addEventListener('click', checkAnswer);
ballFour.addEventListener('click', checkAnswer);
ballFive.addEventListener('click', checkAnswer);
ballSix.addEventListener('click', checkAnswer);

function appendRightColor() {
  const redRight = Math.floor(Math.random() * 255);
  const greenRight = Math.floor(Math.random() * 255);
  const blueRight = Math.floor(Math.random() * 255);
  const colorToFind = document.querySelector('#rgb-color');
  colorToFind.innerText = `(${redRight}, ${greenRight}, ${blueRight})`;
  const ballToPaint = Math.floor(Math.random() * 5);
  const allTheBalls = document.querySelectorAll('.ball');
  allTheBalls[ballToPaint].style.backgroundColor = `rgb(${redRight}, ${greenRight}, ${blueRight})`;
}

function resetGame() {
  const ballsToReplace = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    ballsToReplace[index].style.backgroundColor = createRGBColor();
  }
  appendRightColor();
  const textToUpdate = document.querySelector('#answer');
  textToUpdate.innerText = 'Escolha uma cor';
}

const buttonReset = document.querySelector('#reset-game');
buttonReset.addEventListener('click', resetGame);

function isRightAnswer() {
  const answer = document.querySelector('#answer').innerText;
  if (answer === 'Acertou!') {
    return true;
  } if (answer !== 'Acertou!') {
    return false;
  }
}

function updateScore() {
  let score = document.querySelector('#score');
  let num = parseInt(score.innerText);
  if (isRightAnswer() === true) {
    num += 3;
    score.innerText = num;
  } if (isRightAnswer() === false && num > 0) {
    num -= 1;
    score.innerText = num;
  }
}

ballOne.addEventListener('click', updateScore);
ballTwo.addEventListener('click', updateScore);
ballThree.addEventListener('click', updateScore);
ballFour.addEventListener('click', updateScore);
ballFive.addEventListener('click', updateScore);
ballSix.addEventListener('click', updateScore);
