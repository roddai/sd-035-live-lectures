// Ordene os números do array de forma CRESCENTE
const scores = [2, 9, 7, 1];
const scores2 = [2, 10, 21, 1];

scores.sort();
scores2.sort(); 

// console.log(scores);
// console.log(scores2);

// Resolvendo o problema

const comparar = (a, b) => {
  if (a < b) return -1;
    if (a > b) return 1;
  // a deve ser igual a b
      return 0;
}

scores.sort(comparar);
scores2.sort(comparar);

// console.log(scores);
// console.log(scores2);


// Forma simplificada

// Ordene os números do array de forma CRESCENTE

scores.sort((a, b) => a - b);
scores2.sort((a, b) => a - b);

console.log(scores);
console.log(scores2);

// Ordene os números do array de forma DECRESCENTE
scores.sort((a, b) => b - a);
scores2.sort((a, b) => b - a);

// console.log(scores);
// console.log(scores2);