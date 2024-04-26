import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './ui/Navbar'
import home from '../src/assets/home.png'
import next from '../src/assets/sign.png'
import Content from './ui/Content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto space-y-10'>
    <Navbar></Navbar>
    <div className='flex items-center font-semibold text-[#696671] text-sm'>
      <div>
         <img src={home} alt="" />
      </div>
      <div>
        <img src={next} alt="" />
      </div>
      <div>
        <p>Flashcard</p>
      </div>
      <div>
        <img src={next} alt="" />
      </div>
      <div>
        <p>Mathematics</p>
      </div>
      <div>
        <img src={next} alt="" />
      </div>
      <div>
        <p className='text-[#06286E]'>Relation and Function</p>
      </div>
    </div>
    <div className=''>
      <Content></Content>
    </div>
    
    </div>
  )
}

export default App
