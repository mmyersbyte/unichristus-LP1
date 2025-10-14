//  Fa¸ca um programa usando a linguagem JavaScript que remove um elemento de um array de objeto por
// meio de uma propriedade. Dica: utilize a fun¸c˜ao filter

const valor1 = 'sair';
const valor2 = 'naovaisair';

const arrObj = [{ prop: valor1 }, { prop: valor2 }, { prop: valor2 }];

let novo = arrObj.filter((elemento) => elemento.prop !== 'sair');

console.log(novo);
