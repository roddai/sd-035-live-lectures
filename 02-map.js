// Transforme o array birds em outro array que contenha SOMENTE os nomes dos pássaros, porém com letras maiúsculas

const birds = [
  { id: 'DV8', name: 'Eurasian Collared-Dove', type: 'Dove' },
  { id: 'HK12', name: 'Bald Eagle', type: 'Hawk' },
  { id: 'HK6', name: 'Red-Tailed Hawk', type: 'Hawk' },
  { id: 'SP11', name: 'Old World Sparrow', type: 'Sparrow' },
  { id: 'DV2', name: 'Mourning Dove', type: 'Dove' },
];

// USANDO FOR
const birdsNameWithFor = (birds) => {
  const myArray = [];

  for (let bird of birds) {
    const birdName = bird.name.toUpperCase();
    myArray.push(`${birdName}`);
  }

  return myArray;
}

console.log(birdsNameWithFor(birds));

// USANDO MAP
// const birdsName = (birds) => {
//   return birds.map( (bird) => {
//     return bird.name.toUpperCase();
//   } )
// }

// Refatorando
const birdsName = (birds) => birds.map( (bird) => bird.name.toUpperCase());

console.log(birdsName(birds));