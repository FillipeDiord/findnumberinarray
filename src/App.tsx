import { Home } from './components/Home'
import { Label } from './components/Label'

import './App.css'

function App() {
  return (
    <>
      <Label className='font-bold m-10'>Escolha o número inicial e o número final,
        para que o array seja gerado com números aleatórios
      </Label>
      <div className='flex items-center justify-center w-[50rem]'>
        <div className='flex-row items-center justify-center'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
