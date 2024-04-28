import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './ui/Navbar'
import home from '../src/assets/home.png'
import next from '../src/assets/sign.png'
import Content from './ui/Content'
import logo1 from './assets/onlylogo.png'
import logo2 from './assets/hyggexlogo2.png'
import { FaPlus } from "react-icons/fa";
import Faq from './ui/Faq'
import './mainstyle.css'
function App() {

  return (
    <div className='container mx-auto md:space-y-10 space-y-7 font-inter'>
      <Navbar></Navbar>
      <div className='flex items-center font-semibold text-[#696671] lg:text-[17px] text-xs'>
        <div>
          <button><img src={home} alt="" /></button>
        </div>
        <div>
          <button><img src={next} alt="" /></button>
        </div>
        <div>
          <button><p>Flashcard</p></button>
        </div>
        <div>
          <button><img src={next} alt="" /></button>
        </div>
        <div>
          <button><p>Mathematics</p></button>
        </div>
        <div>
          <button><img src={next} alt="" /></button>
        </div>
        <div>
          <button><p className='text-[#06286E]'>Relation and Function</p></button>
        </div>
      </div>
      <div className=''>
        <Content></Content>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center md:gap-4 gap-2'>
          <div className='md:py-5 py-3 md:px-4 px-2 bg-white rounded-full shadow-md shadow-slate-400'>
            <img className='w-8' src={logo1} alt="" />
          </div>
          <div>
            <div>
              <p className='font-inter md:text-sm text-[8px] flex justify-start md:mb-2 mb-1 font-semibold text-[#696671]'>Published by</p>
            </div>
            <div>
              <img className='w-20 md:w-full' src={logo2} alt="" />
            </div>
          </div>
        </div>
        <button className='flex items-center md:gap-2 gap-1'>
          <div className='text-white md:p-2 p-1 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0]'>
            <FaPlus />
          </div>
          <div>
            <p className='md:text-xl text-xs bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text font-bold'>Create Flashcard</p>
          </div>
        </button>
      </div>
      <div className='md:pt-16 pt-5'>
        <Faq></Faq>
      </div>
    </div>
  )
}

export default App
