import { expect, test, describe } from 'vitest';

import { findNumber } from '../utils/findNumber';

describe('findNumber', () => {

  // Verifica se a função findNumber retorna o índice correto do alvo no array
  test('should return the correct index of target in nums', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const expected = 4;

    const result = findNumber(nums, target);

    expect(result).toBe(expected);
  });

  // Verifica se a função findNumber retorna -1 se o alvo não existir no array
  test('should return -1 if target does not exist in nums', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const expected = -1;

    const result = findNumber(nums, target);

    expect(result).toBe(expected);
  });

  // Verifica se a função findNumber retorna -1 se o array estiver vazio
  test('should return -1 if nums is empty', () => {
    const nums: Array<number> = [];
    const target = 5;
    const expected = -1;

    const result = findNumber(nums, target);

    expect(result).toBe(expected);
  });

  // Verifica se o array está em ordem crescente, caso não deve retornar -1
  test('should return -1 if nums is not in ascending order', () => {    
    const nums = [3, 1, 5, 2, 4];
    const target = 4;
    const expected = -1;

    const result = findNumber(nums, target);

    expect(result).toBe(expected);
  });
});
