import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './components/Home'

import './App.css'

function App() {
  return (
    <>
      <div className='flex items-center justify-center w-[50rem]'>
        <div className='flex-row items-center justify-center'>
          <Home />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
