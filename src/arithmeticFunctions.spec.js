import {addNumbers,subtractNumbers} from './arithmeticFunctions'

describe('Arithmetic functions', () => {
  it('should add numbers',() => {
    const result = addNumbers(4,5);

    expect(result).toBe(9)
  });

  it('should subtract numbers',() => {
    const result = subtractNumbers(6,2);

    expect(result).toBe(4)
  });
});
