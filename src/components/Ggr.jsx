import React from 'react'

export default function Ggr() {
  return (
    <div id="ggr" className='scene '>
      <div className='relative w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#14ffe9]  via-[#ffeb3b] to-[#ff00e0] animate-ringRotate'>
            <span className='absolute w-full h-full rounded-full bg-gradient-to-b from-[#14ffe9]  via-[#ffeb3b] to-[#ff00e0] blur-[5px]'></span>
            <span className='absolute w-full h-full rounded-full bg-gradient-to-b from-[#14ffe9]  via-[#ffeb3b] to-[#ff00e0] blur-[10px]'></span>
            <span className='absolute w-full h-full rounded-full bg-gradient-to-b from-[#14ffe9]  via-[#ffeb3b] to-[#ff00e0] blur-[25px]'></span>
            <span className='absolute w-full h-full rounded-full bg-gradient-to-b from-[#14ffe9]  via-[#ffeb3b] to-[#ff00e0] blur-[50px]'></span>
            <span className='absolute w-[160px] h-[160px] bg-gray-600 rounded-full top-[20px] left-[20px] text-center text-white leading-[80px] cursor-pointer' ></span>
      </div>
      <h1 className='text-white text-3xl font-bold relative -left-[130px] cursor-pointer'>Start</h1>
    </div>
  )
}
