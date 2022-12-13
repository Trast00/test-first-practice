const { default: expect } = require('expect')
const calculator = require('./calculator')

describe('add method', () => {
  test('add test ', () => {
    expect(new calculator().add(5,2)).toBe(7);
  });
  test('add test ', () => {
    expect(new calculator().add(2,-8)).toBe(-6);
  });
  test('add negative ', () => {
    expect(new calculator().add(-1,-5)).toBe(-6);
  });
})

describe('substract method', () => {
  test('substract test ', () => {
    expect(new calculator().subtract(5,2)).toBe(3);
  });
  test('substract negative ', () => {
    expect(new calculator().subtract(2,-8)).toBe(10);
  });
  test('substract error ', () => {
    expect(new calculator().subtract(-10,-5)).toBe(-5);
  });
})

describe('multiply method', () => {
  test('multiply test ', () => {
    expect(new calculator().multiply(5,2)).toBe(10);
  });
  test('multiplyadd negative ', () => {
    expect(new calculator().multiply(2,-8)).toBe(-16);
  });
  test('multiply zero ', () => {
    expect(new calculator().multiply(-1,0)).toBe(0);
  });
})

describe('divided method', () => {
  test('divided test ', () => {
    expect(new calculator().divide(4,2)).toBe(2);
  });
  test('divided negative ', () => {
    expect(new calculator().divide(8,-2)).toBe(-4);
  });
  test('divided error ', () => {
    expect(() => new calculator().divide(5,0)).toThrow('Cannot be divided by 0');
  });
})