const { default: expect } = require('expect')
const capitalised = require('./capitalised')

test('low word', () => {
  expect(capitalised("salut")).toBe('Salut');
})

test('sentence low', () => {
  expect(capitalised("hi les Poto")).toBe("Hi les Poto");
})

test('capitalized word', () => {
  expect(capitalised('Joueur')).toBe('Joueur')
})

test('capitalized sentenece', () => {
  expect(capitalised('Capitalized Sentenece')).toBe('Capitalized Sentenece')
})

test('Empty', () => {
  expect(() => capitalised('')).toThrow('The value is empty')
})

test('Not a String', () => {
  expect(() => capitalised(4)).toThrow('The value is not a string');
  expect(() => capitalised(null)).toThrow('The value is not a string');
  expect(() => capitalised(["Salut"])).toThrow('The value is not a string');
})
