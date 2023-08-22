const { data } = require('./deckCards');
/* Encontrar todas as cartas de um determinado tipo. */
const getDragons = (data, typeNumber) => data.cards
  .filter((card) => card.typeId === typeNumber);

// console.log(getDragons(data, 2));


// ARRAY DESTRUCTURING;
const [object1, object2, object3] = data.cards;

console.log(object1);
console.log(object2);
console.log(object3);

// OBJECT DESTRUCTURING;
const {id, name, typeId, attributeId, atk, def, img, description} = data.cards[0];

console.log(id);
// console.log(name);
// console.log(typeId);
// console.log(attributeId);
// console.log(atk);
// console.log(def);
// console.log(img);
// console.log(description);