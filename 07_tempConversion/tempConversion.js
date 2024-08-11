const convertToCelsius = function(fdeg) { 
  return Math.round((fdeg - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(cdeg) {
 return Math.round(((cdeg * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
