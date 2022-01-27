// Desafio 1
function compareTrue(bool, bool2) {
  if (bool === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let arrayOfWords = phrase.split(' ');
  return arrayOfWords;
}

// Desafio 4
function concatName(words) {
  return (words[words.length - 1].concat(', ', words[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (ties);
}

// Desafio 6
function highestCount(numbersList) {
  let count = 0;
  let maior = numbersList[0];
  for (let percorrer = 0; percorrer < numbersList.length; percorrer += 1) {
    if (numbersList[percorrer] === maior) {
      maior = numbersList[percorrer];
      count += 1;
    } else if (numbersList[percorrer] > maior) {
      maior = numbersList[percorrer];
      count = 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  } if (distanciaGato2 < distanciaGato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(listaNumeros) {
  let divList = [];
  let resposta = [];
  for (let percorrer = 0; percorrer < listaNumeros.length; percorrer += 1) {
    for (let tests = 2; tests <= listaNumeros[percorrer]; tests += 1) {
      if (listaNumeros[percorrer] % tests === 0) {
        divList.push(tests);
        console.log(divList);
      }
    } if (divList[0] === 3 && divList[1] % 3 === 0) {
      resposta.push('fizz');
    } else if (divList[0] === 5 && divList[1] % 5 === 0) {
      resposta.push('buzz');
    } else if (divList.includes(3) && divList.includes(5)) {
      resposta.push('fizzBuzz');
    } else {
      resposta.push('bug!');
    }
    divList = [];
  }
  return resposta;
}

// Desafio 9
function encode(textToEncode) {
  let newText = [];
  for (let i = 0; i < textToEncode.length; i += 1) {
    newText.push(textToEncode[i]);
  }
  for (let d = 0; d < newText.length; d += 1) {
    if (newText[d] === 'a') {
      newText[d] = '1';
    } else if (newText[d] === 'e') {
      newText[d] = '2';
    } else if (newText[d] === 'i') {
      newText[d] = '3';
    } else if (newText[d] === 'o') {
      newText[d] = '4';
    } else if (newText[d] === 'u') {
      newText[d] = '5';
    }
  }
  return newText.join('');
}

function decode(textToDecode) {
  let oldText = [];
  for (let i = 0; i < textToDecode.length; i += 1) {
    oldText.push(textToDecode[i]);
  }
  for (let d = 0; d < oldText.length; d += 1) {
    if (oldText[d] === '1') {
      oldText[d] = 'a';
    } else if (oldText[d] === '2') {
      oldText[d] = 'e';
    } else if (oldText[d] === '3') {
      oldText[d] = 'i';
    } else if (oldText[d] === '4') {
      oldText[d] = 'o';
    } else if (oldText[d] === '5') {
      oldText[d] = 'u';
    }
  }
  return oldText.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
