const ftoc = function(fahrenheit) {
  if (fahrenheit == 32) {
    return 0;
  }
  const celcius = (fahrenheit - 32) * (5/9);
  return parseFloat(celcius.toFixed(1));
};

const ctof = function(celsius) {
  if (celsius == 0) {
    return 32;
  }
  const fahrenheit = celsius * (9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
