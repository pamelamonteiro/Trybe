/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let arrayLength = array.length;
  let lastItem = array[arrayLength - 1];
  let concatenacao = `${lastItem}, ${firstItem}`;
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let scoreWins = 3 * wins;
  let scoreTies = 1 * ties;
  return scoreTies + scoreWins;
}

// Desafio 6
function highestCount(array) {
  let vezesAparece = 0;
  let highestNumber = array[0];
  for (let number in array) {
    if (array[number] > highestNumber) {
      highestNumber = array[number];
    }
  }
  for (let number2 in array) {
    if (array[number2] === highestNumber) {
      vezesAparece += 1;
    }
  }
  return vezesAparece;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = cat1 - mouse;
  let cat2Mouse = cat2 - mouse;
  let result = '';
  if (cat1Mouse < 0) {
    cat1Mouse *= -1;
  }
  if (cat2Mouse < 0) {
    cat2Mouse *= -1;
  }
  if (cat1Mouse < cat2Mouse) {
    result = 'cat1';
  } else if (cat1Mouse > cat2Mouse) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numeros) {
  let numeros2 = [];
  for (let x = 0; x < numeros.length; x += 1) {
    if (numeros[x] % 3 === 0 && numeros[x] % 5 === 0) {
      numeros2.push('fizzBuzz');
    } else if (numeros[x] % 3 === 0 && numeros[x] % 5 !== 0) {
      numeros2.push('fizz');
    } else if (numeros[x] & 3 !== 0 && numeros[x] % 5 === 0) {
      numeros2.push('buzz');
    } else {
      numeros2.push('bug!');
    }
  }
  return numeros2;
}

// Desafio 9
function encode(string) {
  let encodeNew = [];
  for (let letter = 0; letter < string.length; letter += 1) {
    if (string.charAt(letter) === 'a') {
      encodeNew.push(1);
    } else if (string.charAt(letter) === 'e') {
      encodeNew.push(2);
    } else if (string.charAt(letter) === 'i') {
      encodeNew.push(3);
    } else if (string.charAt(letter) === 'o') {
      encodeNew.push(4);
    } else if (string.charAt(letter) === 'u') {
      encodeNew.push(5);
    } else {
      encodeNew.push(string[letter]);
    }
  }
  let final = encodeNew.join('');
  return final;
}

function decode(string) {
  let decodeNew = [];
  for (let number = 0; number < string.length; number += 1) {
    if (string[number] == 1) {
      decodeNew.push('a');
    } else if (string[number] == 2) {
      decodeNew.push('e');
    } else if (string[number] == 3) {
      decodeNew.push('i');
    } else if (string[number] == 4) {
      decodeNew.push('o');
    } else if (string[number] == 5) {
      decodeNew.push('u');
    } else {
      decodeNew.push(string[number]);
    }
  }
  let final2 = decodeNew.join('');
  return final2;
}

decode('hi there!');

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  let saida = [];
  for (let i = 0; i < tech.length; i += 1) {
    saida.push({ tech: tech[i], name });
  }
  return saida;
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
  techList,
};
