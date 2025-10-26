// 4. Um restaurante digital armazena os pedidos realizados durante o dia em um
// array de objetos. Cada pedido contém o nome do cliente, o valor total e se foi
// entregue ou não.
// a. Use o método filter() para obter apenas os pedidos entregues.

// b. Em seguida, utilize reduce() para calcular o total arrecadado com esses pedidos.
// c. Exiba no console o valor total.

const pedidos = [
  { cliente: 'Lucas', valor: 32.5, entregue: true },
  { cliente: 'Marina', valor: 25.0, entregue: false },
  { cliente: 'Tiago', valor: 48.9, entregue: true },
  { cliente: 'Rafaela', valor: 19.5, entregue: true },
];

let pedidosEntregues = pedidos.filter((entregues) => {
  return entregues.entregue === true;
});

console.log(pedidosEntregues);

let somatorio = 0;

let valorTotal = pedidosEntregues.reduce((acc, item) => {
  return acc + item.valor;
}, 0);

console.log(valorTotal);
