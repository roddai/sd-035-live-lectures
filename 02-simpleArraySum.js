function simpleArraySum(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }

  return sum;
}

const arrayNumbers = [1, 2, 3, 10];
console.log(simpleArraySum(arrayNumbers));