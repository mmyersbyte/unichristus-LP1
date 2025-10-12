const prompt = require('prompt-sync')();

let nomeCompleto = prompt('Digita seu nome: ');

console.log(nomeCompleto.toLocaleLowerCase());
console.log(nomeCompleto.toLocaleUpperCase());
