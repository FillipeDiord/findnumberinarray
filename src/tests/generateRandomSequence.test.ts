import { generateRandomSequence } from '../utils/generateRandomSequence'
import { describe, expect, it } from 'vitest'

describe('generateRandomSequence', () => {
  it('returns an empty array if min equals max', () => {
    const result = generateRandomSequence(10, 10)
    expect(result).toEqual([])
  })

  it('returns an array with random numbers between min and max', () => {
    const result = generateRandomSequence(10, 20)

    expect(result.length).toBeGreaterThan(0)
    
    for (const number of result) {
      expect(number).toBeGreaterThanOrEqual(10)
      expect(number).toBeLessThanOrEqual(20)
    }
    
    expect(new Set(result).size).toEqual(result.length)
    
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i]).toBeLessThan(result[i + 1])
    }
  })
})
