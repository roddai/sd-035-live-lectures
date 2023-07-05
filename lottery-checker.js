const lotteryChecker = [34, 43, 23, 56, 28, 12];

console.log(lotteryChecker);

// console.log(lotteryChecker[0]);
// console.log(lotteryChecker[1]);
// console.log(lotteryChecker[2]);
// console.log(lotteryChecker[3]);
// console.log(lotteryChecker[4]);
// console.log(lotteryChecker[5]);

// console.log('O comprimento do array é: ' + lotteryChecker.length);

// for (let index = 0; index < lotteryChecker.length; index += 1) {
//   console.log(index);
//   console.log(lotteryChecker[index]);
//   console.log('---');
// }

for (let value of lotteryChecker) {
  console.log(value);
}