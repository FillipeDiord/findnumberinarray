import { toast } from 'react-toastify';

export function generateRandomSequence(min: number, max: number, count: number = max - min + 1): number[] {
  const numbers: number[] = [];
  let range: number = max - min + 1;

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
    range = max - min + 1;
  }

  if (count > range) {
    toast.error('Não é possível gerar uma sequência com mais números do que o intervalo');
    throw new Error('Não é possível gerar uma sequência com mais números do que o intervalo');
  }

  while (numbers.length < count) {
    const newNumber: number = Math.floor(Math.random() * range) + min;

    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    }
  }

  numbers.sort((a, b) => a - b);

  return numbers;
}
