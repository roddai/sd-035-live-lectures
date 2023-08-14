// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter is not a number!');
  } else {
    console.log('Teste');
  }
}

try {
  getRectArea(3, 'A');
  // getRectArea(3, 5);
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}