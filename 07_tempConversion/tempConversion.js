const ftoc = function(fTemp) {
  // Math.round rounds to nearest integer
  // Multiply by 10 to grab 1st decimal, round, then
  // divide by 10 to put decimal in place
  return Math.round(((fTemp - 32) / 1.8) * 10) / 10;
};

const ctof = function(cTemp) {
  return Math.round(((cTemp * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
