// Crie um objeto chamado estoque que armazene informações sobre produtos disponíveis em uma loja Cada produto deve ter as propriedades nome, preço e quantidade.

// Em seguida, crie uma função chamada verificarEstoque que recebe o nome de um produto como parâmetro e retorna uma mensagem informando se o produto está disponível em estoque e quantas unidades estão disponíveis.

// ==> TEM Q USAR O PROMPT SYNC

const promptInstance = require('prompt-sync')();

const objEstoque = [
  { nome: 'mouse', price: 20, quantity: 30 },
  { nome: 'teclado', price: 20, quantity: 30 },
  { nome: 'cerave', price: 20, quantity: 30 },
];

let disponivel = false;

function verifica(nomeProduto) {
  for (let i = 0; i < objEstoque.length; i++) {
    if (objEstoque[i].nome === nomeProduto) {
      console.log(
        `O produto ${nomeProduto} está disponivel com ${objEstoque[i].quantity} unidades`
      );
    }
  }
}

let produto = promptInstance('Digite o produto que quer checar: ');

verifica(produto);
