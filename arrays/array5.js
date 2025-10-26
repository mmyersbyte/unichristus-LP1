// 5. Uma empresa quer analisar o consumo mensal (em kWh) de um grupo de
// clientes. Ela precisa calcular o consumo médio apenas dos clientes com
// consumo acima de 100 kWh.
// a. Utilize filter() para obter apenas os consumos acima de 100.

// b. Calcule a média desses valores usando reduce().
// c. Exiba o resultado com duas casas decimais.

const consumos = [80, 120, 150, 95, 200, 110];

let consumoMaiorQcem = consumos.filter((consumo) => {
  return consumo >= 100;
});

console.log(consumoMaiorQcem);

let media = consumoMaiorQcem.reduce((acc, item) => {
  return (acc + item) / consumoMaiorQcem.length;
}, 0);

console.log(media.toFixed(2));
