import { FormEvent, useRef, useState } from "react";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";
import { findNumber } from "../../utils/findNumber";

export type FindNumberProps = {
  numbersArray: number[];
}

export function FindNumber({ numbersArray }: FindNumberProps) {
  const targetRef = useRef<HTMLInputElement>(null)
  const [numberFound, setNumberFound] = useState(false);
  const [numberIndex, setNumberIndex] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  function handleFindNumberInArray(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (targetRef.current) {
      const target = Number(targetRef.current.value);

      const result = findNumber(numbersArray, target);

      setNumberFound(result !== -1);
      setNumberIndex(result);
      setShowLabel(true);
    }
  }

  return (
    <>
      <div className='flex items-center justify-center flex-row mb-6'>
        {numbersArray.map((number) =>
          <Label
            className='flex font-bold mr-2 bg-white w-auto p-2 justify-center rounded-md'
            key={number}
          >
            {String(number)}
          </Label>
        )}
      </div>
      <form onSubmit={handleFindNumberInArray}>
        <div className='flex items-center justify-center flex-col gap-4'>
          <Label
            className='font-bold mr-2'
          >
            Array gerado, agora escolha o número para saber o índice dele no Array
          </Label>
          <Input
            ref={targetRef}
            type='number'
            className='rounded-lg py-2 px-3 w-32'
            required
          />
          <Button
            className="bg-gray-950 text-white font-bold w-28 h-14 rounded-md"
          >
            Encontrar índice
          </Button>
        </div>
      </form>


      <div className='flex items-center justify-center m-6'>
        {showLabel && (
          numberFound ?
            <Label
              className='font-bold mr-2'
            >{`O determinado número do índice é: ${numberIndex}`}</Label>
            : <Label
              className='font-bold mr-2'
            >{`O determinado número do índice não foi encontrado: ${numberIndex}`}</Label>
        )}
      </div>
    </>
  )
}
