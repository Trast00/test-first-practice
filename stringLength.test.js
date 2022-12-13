
const { default: expect } = require('expect');

const stringLength = require('./stringLength');

test('test length', () => {
  expect(stringLength("Salut les")).toBe(9);
})

test('test 0 str', () => {
  expect(() => stringLength("")).toThrow('The value length is below 0');
})

test('test above 10 str', () => {
  expect(() => stringLength("Salut les poto cool")).toThrow('The value length is above 10');
})

test('test not a str', () => {
  expect(() => stringLength(2)).toThrow('The value is not a string');
  expect(() => stringLength(null)).toThrow('The value is not a string');
  expect(() => stringLength(undefined)).toThrow('The value is not a string');
})

