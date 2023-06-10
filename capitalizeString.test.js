const capitalizeString = require('./capitalizeString.js');

test('capitalizeString will return first char of the string capitalized and with the rest as same as input', () => {
  expect(capitalizeString('hello there')).toBe('Hello there');
});
test('capitalizeString will receive only string input', () => {
  function capsS() {
    capitalizeString(2);
  }
  expect(capsS).toThrow('only string as input');
});
