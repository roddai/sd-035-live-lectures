const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error ('Todos parâmetros precisam ser do tipo número');
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error ('Todos números devem pertencer ao conjunto dos números reais');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error ('Todos números devem ser finitos');
  }
  return a + b;
}

const myFunction = () => {
  const n1 = 10;
  const n2 = 2;
  let n3;

  // const n3 = sum(n1, n2);

  // if (typeof n3 !== "number") {
  //   console.error('Erro:', n3);
  //   return;
  // }

  try {
    n3 = sum(n1, n2);
  } catch (error) {
    console.log(error.message);
    return;
  }

  console.log(`A soma de ${n1} e ${n2} dá: ${n3}`);
};

myFunction();