function sortNumbers (array) {
  let temp;

  for (let index = 0; index < array.length; index += 1) {
    for (let compare = index + 1; compare < array.length; compare += 1) {
      if (array[index] > array[compare]) {
        temp = array[index];
        array[index] = array[compare];
        array[compare] = temp;
      }
    }
  }

  return array;
}

const arrayNumbers = [1, 2, 6, 8, 10, 4, 5, -78, 11];
console.log(sortNumbers(arrayNumbers));