// Nosso jogo
const studentGame = [20, 19, 37, 47, 59, 23];
console.log('Jogo do estudante:', studentGame);

// Jogo sorteado
const number1 = 20;
const number2 = 17;
const number3 = 33;
const number4 = 23;
const number5 = 59;
const number6 = 19;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
console.log('Jogo sorteado:', megaSenaNumbers);

// Confere jogo
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawnNumber = megaSenaNumbers[index];

  for (let indexGame = 0; indexGame < studentGame.length; indexGame += 1) {
    let studentNumber = studentGame[indexGame];

    if (drawnNumber === studentNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('Quantidade de Acertos:', numberOfHits);