const convertToCelsius = function(temperature) {
  temperature = (temperature-32)*5/9;
  oneDecimalPlace = Math.round(temperature * 10) / 10;
  return oneDecimalPlace;
};

const convertToFahrenheit = function(temperature) {
  temperature = (temperature*9/5+32);
  oneDecimalPlace = Math.round(temperature * 10) / 10;
  return oneDecimalPlace;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
