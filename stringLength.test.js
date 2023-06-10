const stringLength = require('./stringLength.js');

test('function string length should return number of the length', () => {
  const strlen = stringLength('hello just');
  expect(strlen).toBe(10);
});
test('function string length max input 10 length', () => {
  const strlen = stringLength('hello just 13');
  expect(strlen).toBeUndefined();
});
test('function string length min input 1  length', () => {
  const strlen = stringLength('');
  expect(strlen).toBeUndefined();
});
