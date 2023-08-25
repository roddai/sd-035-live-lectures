const data = require('./deckCards');

// Faça a soma dos poderes de ataque de todos os monstros

// Resolvendo com forEach()
const sumAtk = (arrayCards) => {
  let sum = 0;

  arrayCards.forEach((card) => {
    const { atk = 0 } = card;
    sum += atk;
  });

  return sum;
}

console.log(sumAtk(data.cards));
