const capitalizeString = (inputString) => {
  if (typeof inputString === 'string') return inputString[0].toUpperCase() + inputString.slice(1);
  throw new Error('only string as input');
};

module.exports = capitalizeString;
