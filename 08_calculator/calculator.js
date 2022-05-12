const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce((total, number) => {
    return total + number;
  }, 0);
  return sum;
};

const multiply = function(...numbers) {
  const product = Array.from(...numbers)
                       .reduce((total, number) => {
                          return total * number;
                        }, 1);
  return product;
};

const power = function(a, b) {
	let power = 1;
  for (let i = 1; i <= b; i++) power *= a;
  return power;
};

const factorial = function(n) {
	let factorial = 1;
  if (n === 0) return factorial;
  for (let i = 2; i <= n; i++) factorial *= i;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
