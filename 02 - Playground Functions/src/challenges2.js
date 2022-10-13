/* eslint-disable max-lines-per-function */
const { concatName } = require('./challenges');

// Desafio 11
function countNumberRepetition(array) {
  for (let x = 0; x < array.length; x += 1) {
    let number = array[x];
    let counter = 0;
    for (let y = 0; y < array.length; y += 1) {
      if (array[y] === number) {
        counter += 1;
      }
      if (counter >= 3) {
        return false;
      }
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  let telefone = [];
  let checker = countNumberRepetition(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0 || checker === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (i === 0) {
      telefone.push('(');
    }
    if (i === 2) {
      telefone.push(') ');
    }
    if (i === 7) {
      telefone.push('-');
    }
    telefone.push(array[i]);
  }
  telefone = telefone.join('');
  return telefone;
}

// Desafio 12
function calculo(principal, secundaria1, secundaria2) {
  let soma = secundaria1 + secundaria2;
  let absoluto = Math.abs(secundaria1 - secundaria2);
  if (principal < soma && principal > absoluto) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let linhaA = calculo(lineA, lineB, lineC);
  let linhaB = calculo(lineB, lineA, lineC);
  let linhaC = calculo(lineC, lineA, lineB);
  if (linhaA === true || linhaB === true || linhaC === true) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let numeros = 0;
  for (let i = 0; i < string.length; i += 1) {
    let number = Number(string[i]);
    console.log(number);
    if (Number.isNaN(number) === false) {
      console.log(Number.isNaN(number));
      numeros += number;
      console.log(numeros, "numeros");
    }
  }
  if (numeros === 1) {
    let hidratacao = '1 copo de água';
    return hidratacao;
  }
  let hidratacao = `${numeros} copos de água`;
  return hidratacao;
}

// hydrate('1 copo de água');

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
