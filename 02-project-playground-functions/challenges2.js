// Desafio 10
function techList(listaTech, name) {
  let listaObj = [];
  let listaArrumada = listaTech.sort();
  if (listaTech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < listaArrumada.length; i += 1) {
    listaObj[i] = {
      tech: listaArrumada[i],
      name: name
    };
  }
  return listaObj;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let numeroTel = [];
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let d = 0; d < numeros.length; d += 1) {
    let valor = numeros[d];
    let count = 0;
    for (let percorrer = 0; percorrer < numeros.length; percorrer += 1) {
      if (numeros[percorrer] === valor) {
        count += 1
      } if (count >= 3 || numeros[percorrer] < 0 || numeros[percorrer] > 9){
        return 'não é possível gerar um número de telefone com esses valores';
      }   
    }
  }
  let e = 0;
  for (let i = 0; i < 16; i += 1) {
    if (i === 0) {
      numeroTel.push('(');
    } if (i === 3) {
      numeroTel.push(')');
    } if (i === 4) {
      numeroTel.push(' ')
    } if (i === 10) {
      numeroTel.push('-')
    } if (i !== 0 && i !== 3 && i !== 4 && i !== 10) {
      numeroTel.push(numeros[e])
      e += 1; 
    }
  }
  return numeroTel.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineA + lineC > lineB) {
    maior = true;
  } else {
    maior = false;
  } if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    abs = true;
  } else {
    abs = false;
  } if (maior === true && abs === true) {
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g, '');
  let numbersSeparated = numbers.split('');
  let soma = 0;
  for (let i = 0; i < numbersSeparated.length; i += 1) {
    soma += parseInt(numbers[i]);
  } if (soma === 1) {
    return (soma + ' copo de água');
  }
  return (soma + ' copos de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
