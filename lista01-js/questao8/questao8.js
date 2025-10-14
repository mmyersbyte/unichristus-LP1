// Quest˜ao 8 Fa¸ca um programa usando a linguagem JavaScript que cria uma fun¸c˜ao que verifica se um objeto
// JavaScript ´e vazio ou n˜ao

const objVazio = {};

const objComConteudo = {
  casa: 'casinha',
  apartamento: 'apartamentozinho',
};

// let arrayvazio = [];
// console.log(arrayvazio.length);

function verificaObj(obj) {
  if (Object.keys(obj).length === 0) {
    console.log('Objeto vazio');
  } else {
    console.log('Objeto com conteudo');
  }
}

verificaObj(objComConteudo);
verificaObj(objVazio);
