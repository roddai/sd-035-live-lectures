// Nosso jogo
const studentGame = [20, 19, 37, 47, 59, 23];
const rodsGame = [45, 60, 10, 20, 30, 40];

// Jogo sorteado
const megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  megaSenaNumbers.push(Math.floor(Math.random() * 10) + 1);
}

// Confere jogo
let hits;

const megaSenaChecker = (studentGame, megaSenaNumbers) => {
  let numberOfHits = 0;
  hits = [];

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

  return numberOfHits;
}

console.log('Jogo sorteado:', megaSenaNumbers);
console.log('-----------');
console.log('Jogo do estudante:', studentGame);
console.log('Quantidade de Acertos:', megaSenaChecker(studentGame, megaSenaNumbers));
console.log('Acertos:', hits);
console.log('-----------');
console.log('Jogo do estudante:', rodsGame);
console.log('Quantidade de Acertos:', megaSenaChecker(rodsGame, megaSenaNumbers));
console.log('Acertos:', hits);
