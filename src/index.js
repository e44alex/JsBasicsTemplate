function f() {
  return 1 + 10;
}

f();

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add, multiply, greet };
}

console.log('Hello World!');
