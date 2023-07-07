const biggestSmallerNumber = (array) => {
  let bigger = array[0];
  let smaller = array[0];
  
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    } else if (array[index] < smaller) {
      smaller = array[index];
    }
  }
  
  return `Menor: ${smaller} ----> Maior: ${bigger}`;
}

const arrayNumbers = [1, 2, 6, 8, 10, 4, 5, -78, 11];
console.log(biggestSmallerNumber(arrayNumbers));