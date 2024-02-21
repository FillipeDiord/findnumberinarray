import { FormEvent, useRef } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { generateRandomSequence } from '../../utils/generateRandomSequence';

export type GenerateArrayProps = {
  updateNumberArrayState: (generatedArray: number[]) => void;
}

export function GenerateArray({ updateNumberArrayState }: GenerateArrayProps) {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const numbersInterval = useRef<HTMLInputElement>(null);

  function handleGeneratedArray(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (minRef.current && maxRef.current && numbersInterval.current) {
      const min = Number(minRef.current.value);
      const max = Number(maxRef.current.value);
      const interval = Number(numbersInterval.current.value);

      const generatedArray: number[] = generateRandomSequence(min, max, interval);

      updateNumberArrayState(generatedArray);
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-[50rem]'>
        <Label className='font-bold m-10'>Escolha o número inicial e o número final,
          para que o array seja gerado com números aleatórios
        </Label>
      </div>
      <div className='flex items-center justify-center'>
        <form
          onSubmit={handleGeneratedArray}>
          <Label
            className='font-bold mr-2'
          >
            De:
          </Label>
          <Input
            ref={minRef}
            type='number'
            className='rounded-lg py-2 px-3'
            required
          />
          <Label
            className='font-bold mr-2 ml-2'
          >
            Até:
          </Label>
          <Input
            ref={maxRef}
            type='number'
            className='rounded-lg py-2 px-3'
            required
          />
          <div className='flex flex-col items-center justify-center'>
            <Label
              className='font-bold mx-2 mt-8 mb-4'
            >
              Deseja gerar quantos números entre o intervalo?
            </Label>
            <Input
              ref={numbersInterval}
              type='number'
              className='rounded-lg py-2 px-3 w-32'
              min={1}
              required
            />
          </div>
          <div className='flex items-center justify-center mt-8'>
            <Button
              className='bg-gray-950 text-white font-bold w-28 h-10 rounded-md'
            >
              Gerar Array
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}