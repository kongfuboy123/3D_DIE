import React from 'react'


export default function Carousel() {
 
  return (
    <div id='carousel' className='scene'>
    
      <section className="relative w-[300px] h-[200px] cursor-pointer preserve-3d animate-picRotate hover:pause " >
        <div className='pic' style={{transform:'rotateY(0deg) translateZ(300px)'}} ><img src="images/1.png" alt="" /></div>
        <div className='pic' style={{transform:'rotateY(60deg) translateZ(300px)'}} ><img src="images/2.png" alt="" /></div>
        <div className='pic' style={{transform:'rotateY(120deg) translateZ(300px)'}}><img src="images/3.png" alt="" /></div>
        <div className='pic' style={{transform:'rotateY(180deg) translateZ(300px)'}}><img src="images/4.png" alt="" /></div>
        <div className='pic' style={{transform:'rotateY(240deg) translateZ(300px)'}}><img src="images/5.png" alt="" /></div>
        <div className='pic' style={{transform:'rotateY(300deg) translateZ(300px)'}}><img src="images/6.png" alt="" /></div>
		  </section>
    </div>
  )
}
