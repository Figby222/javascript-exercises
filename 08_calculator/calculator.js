const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let result = 0;
  for (number of numbers) {
    result += number;
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  for (number of numbers) {
    result *= number;
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	if (number == 0) {
    return 1;
  }
  let result = number;

  for (let i = 1; i < number; i++) {
    result *= i;
  }

  return result;
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
