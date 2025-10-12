// Quest˜ao 4 Fa¸ca um programa usando a linguagem JavaScript que crie uma fun¸c˜ao que soma dois n´umeros passados
// como argumentos. Verifique se as entradas s˜ao v´alidas.

function add(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return 404;
  } else {
    return num1 + num2;
  }
}

console.log(add(true, true));
console.log(add(2, 3));
console.log(add('2', 3));
console.log(add(true, true));
