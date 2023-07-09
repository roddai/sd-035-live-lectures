const mcDonalds = {
  bigMac: 26.90,
  bigTasty: 39.90,
  mcFritasMedia: 13.90,
  topSundayChocolate: 11.90,
  isDelicious: true,
  city: 'São Paulo',
  unit: 'Shopping Morumbi',
};

mcDonalds.bigMac = 30.78;
mcDonalds['bigMac'] = 89.54;

mcDonalds['isOpen'] = true;

const mcDonaldsKeys = Object.keys(mcDonalds);
// console.log(mcDonalds);
// console.log(mcDonaldsKeys);

const mcDonaldsValues = Object.values(mcDonalds);
// console.log(mcDonaldsKeys[2]);
// console.log(mcDonaldsValues);

const mcDonaldsEntries = Object.entries(mcDonalds);
// console.log(mcDonaldsValues[2]);
// console.log(mcDonaldsEntries);
// console.log(mcDonaldsEntries[5][1]);

const cloneMcDonalds = Object.assign({}, mcDonalds);
console.log(mcDonalds);

cloneMcDonalds.city = 'Rio de Janeiro';
console.log(cloneMcDonalds);