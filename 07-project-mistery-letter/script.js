const createLetter = document.querySelector('#criar-carta');

const texto = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');

function clearSpanText() {
  for (let i = paragraph.firstElementChild; i !== null; i = paragraph.firstElementChild) {
    i.remove();
  }
}

function createWords() {
  const carta = document.querySelector('#carta-gerada');
  const textoPartido = texto.value.split(' ');
  for (let index = 0; index < textoPartido.length; index += 1) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = textoPartido[index];
    div.appendChild(span);
    carta.appendChild(div);
  }
}

function checkStatus() {
  const textoPorPalavra = texto.value.split(' ');
  if (paragraph.innerText === 'Por favor, digite o conteúdo da carta.') {
    paragraph.innerText = '';
  } if (texto.value === '' || textoPorPalavra.every((element) => element === '')) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

createLetter.addEventListener('click', checkStatus);
createLetter.addEventListener('click', clearSpanText);
createLetter.addEventListener('click', createWords);

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function isTwoOrThree(number) {
  if (number === 2 || number === 3) {
    return true;
  }
  return false;
}

function randomNum(array) {
  const a = Math.round(Math.random() * 3);
  const b = Math.round(Math.random() * 3);
  const c = Math.round(Math.random() * 2);
  const d = Math.round(Math.random() * 1);
  if (a !== b) {
    if (isTwoOrThree(a) === true) {
      if (isTwoOrThree(b) === true) {
        return [array[a][d], array[b][d]];
      }
      return [array[a][d], array[b][c]];
    } if (isTwoOrThree(b) === true) {
      return [array[a][c], array[b][d]];
    }
    return [array[a][c], array[b][d]]
  }
  return randomNum(array);
}

function randomness() {
  const list = [style, size, rotation, inclination];
  const divs = document.querySelectorAll('div span');
  divs.forEach((i) => {
    let classes = randomNum(list);
    i.parentElement.classList.add(classes[0]);
    i.parentElement.classList.add(classes[1]);
  });
}

createLetter.addEventListener('click', randomness);

function changeWord(element) {
  const word = element.target;
  const list = [style, size, rotation, inclination];
  const styles = randomNum(list);
  const atualClass = word.className;
  if (atualClass === `${styles[0]} ${styles[1]}` || atualClass === `${styles[1]} ${styles[0]}`) {
    changeWord(element);
  }
  word.parentElement.className = '';
  word.parentElement.classList.add(styles[0]);
  word.parentElement.classList.add(styles[1]);
}

function createOptionChangeWord() {
  const div = document.querySelectorAll('div span');
  if (div.length > 0) {
    for (let i = 0; i < div.length; i += 1) {
      div[i].onclick = changeWord;
    }
  }
}

createLetter.addEventListener('click', createOptionChangeWord)

