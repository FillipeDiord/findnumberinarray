import { describe, test, expect } from 'vitest'
import { generateRandomSequence } from '../utils/generateRandomSequence';

describe("generateRandomSequence", () => {
  test("should generate a sequence of random numbers between min and max", () => {
    const min = 1;
    const max = 10;
    const count = 5;
    const sequence = generateRandomSequence(min, max, count);
    expect(sequence).toHaveLength(count);
    expect(sequence).toEqual(expect.arrayContaining(sequence));
    expect(Math.min(...sequence)).toBeGreaterThanOrEqual(min);
    expect(Math.max(...sequence)).toBeLessThanOrEqual(max);
  });

  test("should throw an error if count is greater than range", () => {
    const min = 1;
    const max = 5;
    const count = 10;
    expect(() => generateRandomSequence(min, max, count)).toThrowError(
      "Não é possível gerar uma sequência com mais números do que o intervalo"
    );
  });

  test("should sort the sequence in ascending order", () => {
    const min = 1;
    const max = 10;
    const count = 5;
    const sequence = generateRandomSequence(min, max, count);
    const sorted = [...sequence].sort((a, b) => a - b); 
    expect(sequence).toEqual(sorted); 
  });

  test("should swap min and max values if min is greater than max", () => {
    const min = 10;
    const max = 1;
    const count = 5;
    const sequence = generateRandomSequence(min, max, count);
    expect(Math.min(...sequence)).toBeGreaterThanOrEqual(max);
    expect(Math.max(...sequence)).toBeLessThanOrEqual(min);
  });

  test("should generate a sequence with all possible numbers if count is not specified", () => {
    const min = 1;
    const max = 5;
    const sequence = generateRandomSequence(min, max);
    expect(sequence).toHaveLength(max - min + 1);
    expect(sequence).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });
});
