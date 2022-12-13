const { default: expect } = require('expect')
const stringReverse = require('./reverseString')

test('test reverse', () => {
  expect(stringReverse('Salut')).toBe("tulaS")
})