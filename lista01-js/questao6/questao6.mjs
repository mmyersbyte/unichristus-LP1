// Quest˜ao 6 Fa¸ca um programa usando a linguagem JavaScript que tenha uma fun¸c˜ao que gera captcha (valor
// inteiro aleat´orio).

function captcha() {
  let valor = Math.floor(Math.random() * 1000);

  console.log(valor);
}

captcha();
