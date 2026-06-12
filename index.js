function assertNumber(value, name) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a valid number`);
  }
}

function add(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a + b;
}

function subtract(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a - b;
}

function multiply(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a * b;
}

function divide(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');

  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }

  return a / b;
}

function power(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a ** b;
}

function squareRoot(value) {
  assertNumber(value, 'value');

  if (value < 0) {
    throw new RangeError('Cannot calculate the square root of a negative number');
  }

  return Math.sqrt(value);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
};
