const reverseString = require('./reverseString.js');

test('reverseString function should return reverse string', () => {
  const result = reverseString('hello');
  expect(result).toBe('olleh');
});
