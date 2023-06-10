const stringLength = (stringInput) => {
  try {
    if (stringInput.length >= 1 && stringInput.length <= 10) return stringInput.length;
  } catch (error) {
    console.log('String should be around 1 to 10 length');
  }
};

module.exports = stringLength;
