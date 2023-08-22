const data = require('./deckCards');

// ORDENAR O ARRAY data.cards, PELO NOME DOS MONSTROS
const compare = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

const sortObjectsMonsters = (cards) => cards.sort(compare);

// console.log(sortObjectsMonsters(data.cards));


// GERAR UM ARRAY COM OS NOMES DOS MONSTROS, EM ORDEM ALFABÉTICA
// const generateSortMonsterNames = (cards) => {
//   return cards.map((card) => {
//     return card.name;
//   }).sort();
// }

// Refatorando
const generateSortMonsterNames = (cards) => cards
  .map((card) => card.name).sort();

console.log(generateSortMonsterNames(data.cards));