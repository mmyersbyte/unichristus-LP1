// 3. Um sistema de controle de vendas armazena os valores de cada transação do
// dia. O gerente precisa saber o total arrecadado ao final do expediente.
// a. Critério: utilize o método reduce.

const vendas = [150.0, 299.9, 450.5, 120.0, 79.9];

let valorTotal = vendas.reduce((acc, sum) => (acc += sum));
console.log(valorTotal);
