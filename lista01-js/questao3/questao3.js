// Quest˜ao 3 Fa¸ca um programa usando a linguagem JavaScript que cria uma fun¸c˜ao que receba dois valores e diga
// qual os valores pares entre esses dois n´umeros.

function retornaPar(v1, v2) {
  if (v2 % 2 == 0 && v1 % 2 == 0) console.log('Ambos são pares');

  if (v1 % 2 == 0) console.log('O valor par é ' + v1);
  if (v2 % 2 == 0) console.log('O valor par é ' + v2);

  if (v2 % 2 !== 0 && v1 % 2 !== 0) console.log('Ambos são impares');
}

retornaPar(7, 7);
