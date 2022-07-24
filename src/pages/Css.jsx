import React from 'react'
import Die from '../components/Die'
import Ggr from '../components/Ggr'

import Carousel from '../components/Carousel'

import Sidebar from '../components/Sidebar'
const list = [
  {name:'DIE',href:'#box'},
  {name:'Carouselx',href:'#carousel'},
  {name:'Glowing Gradient Ring ',href:'#ggr'},
  
]
export default function Css() {
  return (
    <div className="flex ">
      <div className="w-1/6 h-full z-10 fixed top-[80px] ">
        <Sidebar list={list} />
      </div>
      
      <div className='w-full'>
        <Die />
        <Carousel />
        <Ggr />
   
      </div>
    </div>
    

  )
}
