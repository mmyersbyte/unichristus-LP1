// Um professor precisa calcular as médias das notas de seus alunos. O array
// contém as notas de uma turma, e ele deseja transformar cada nota aplicando
// um bônus de 0.5, sem ultrapassar o valor máximo de 10.
// a. Critério: utilize o método map
const notas = [7.5, 8.0, 9.8, 6.4, 5.9];

const novasNotas = notas.map((notas) => {
  let bonus = 0.5;
  let notasFinais = notas + bonus;
  if (notasFinais > 10) {
    return 10;
  }
  return notasFinais;
});

console.log(novasNotas);
