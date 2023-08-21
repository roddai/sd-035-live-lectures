const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 30 },
  { name: 'Zeros', value: 37 }
];

// Ordene os elementos do array de forma alfabética CRESCENTE, pelo nome

const compare = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

items.sort(compare);
console.log(items);
