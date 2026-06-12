# t4cgas

A simple calculator package for NPM.

## Installation

```bash
npm install t4cgas
```

## Usage

```js
const calculator = require('t4cgas');

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(4, 3)); // 12
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.power(2, 4)); // 16
console.log(calculator.squareRoot(25)); // 5
```

## API

### `add(a, b)`
Returns the sum of `a` and `b`.

### `subtract(a, b)`
Returns `a - b`.

### `multiply(a, b)`
Returns `a * b`.

### `divide(a, b)`
Returns `a / b`. Throws an error when dividing by zero.

### `power(a, b)`
Returns `a` raised to the power of `b`.

### `squareRoot(value)`
Returns the square root of `value`. Throws an error for negative numbers.

## Test

```bash
npm test
```

## License

MIT
