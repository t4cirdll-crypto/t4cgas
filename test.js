const calculator = require('./index');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

assertEqual(calculator.add(2, 3), 5, 'add');
assertEqual(calculator.subtract(5, 2), 3, 'subtract');
assertEqual(calculator.multiply(4, 3), 12, 'multiply');
assertEqual(calculator.divide(10, 2), 5, 'divide');
assertEqual(calculator.power(2, 4), 16, 'power');
assertEqual(calculator.squareRoot(25), 5, 'squareRoot');

console.log('All tests passed');
