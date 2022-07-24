import React from 'react'

export default function Die() {
 
  return (
    // 景深
    <div id='box' className='scene' >  
    
      <div className="box animate-boxRotate hover:pause">
      
        <div className='surface  justify-center items-center animate-oneFly ' style={{transform: 'rotateY(0deg) translateZ(100px) '}}>
          <span className='redDot'> </span>
        </div>

        <div className='surface  justify-between animate-twoFly ' style={{transform: 'rotateY(90deg) translateZ(100px)' }} >
          <span className='redDot'> </span>
          <span className='redDot self-end'> </span>
        </div>

        <div className='surface  justify-between animate-threeFly ' style={{transform: 'rotateX(90deg) translateZ(100px)'}}>
          <span className='redDot'> </span>
          <span className='redDot self-center'> </span>
          <span className='redDot self-end'> </span>
        </div>

        <div className='surface  justify-between animate-fourFly ' style={{transform: 'rotateX(270deg) translateZ(100px)'}}>
          <div className='flex flex-col justify-between' >
            <span className='redDot'> </span>
            <span className='redDot '> </span>
          </div>
          <div className='flex flex-col justify-between' >
            <span className='redDot'> </span>
            <span className='redDot '> </span>
          </div>
        </div>

        <div className='surface flex-wrap justify-between  content-between animate-fiveFly ' style={{transform:'rotateY(-90deg) translateZ(100px) '}}>
          <span className='redDot'> </span>
          <span className='redDot '> </span>

          <div className='w-full flex justify-center '>
            <span className='redDot '></span>
          </div>

          <span className='redDot '> </span>
          <span className='redDot '> </span>
        </div>

        <div className='surface flex justify-between animate-sixFly ' style={{transform:'rotateY(-180deg) translateZ(100px)'}}>
          
          <div className=' flex flex-col justify-between'>
            <span className='redDot '></span>
            <span className='redDot'> </span>
            <span className='redDot '> </span>
          </div>
          <div className=' flex flex-col justify-between'>
            <span className='redDot '> </span>
            <span className='redDot '> </span>
            <span className='redDot '> </span>
          </div>
        </div>

      </div>
    </div>
  )
}
