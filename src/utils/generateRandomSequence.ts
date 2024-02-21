export function generateRandomSequence(min: number, max: number): number[] {
  const numbers: number[] = [];
  let last: number = min;
  
  while (last < max) {
    const newNumber: number = Math.floor(Math.random() * (max - last + 1)) + last;

    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
      last = newNumber;
    }
  }
  return numbers;
}

