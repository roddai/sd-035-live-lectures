// Nosso jogo
const studentGame = [20, 19, 37, 47, 59, 23];

// Jogo sorteado
const megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  megaSenaNumbers.push(Math.floor(Math.random() * 60) + 1);
}

// Confere jogo
let numberOfHits = 0;
let hits = [];

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawnNumber = megaSenaNumbers[index];

  for (let indexGame = 0; indexGame < studentGame.length; indexGame += 1) {
    let studentNumber = studentGame[indexGame];

    if (drawnNumber === studentNumber) {
      numberOfHits += 1;
      hits.push(drawnNumber);
    }
  }
}

console.log('Jogo sorteado:', megaSenaNumbers);
console.log('Jogo do estudante:', studentGame);
console.log('Quantidade de Acertos:', numberOfHits);
console.log('Acertos:', hits);