import { useState } from 'react';
import { FindNumber } from '../FindNumber';
import { GenerateArray } from '../GenerateArray';

export function Home() {
  const [numbersArray, setNumbersArray] = useState<number[]>([]);

  return (
    <>
      {numbersArray.length > 0 ?
        < FindNumber numbersArray={numbersArray} />
        :
        <GenerateArray updateNumberArrayState={setNumbersArray} />
      }
    </>
  )
}