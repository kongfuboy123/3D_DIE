import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const navList = [
  {id:0,name:'CSS',url:'/'},
  {id:1,name:'JS',url:'/js'},
  {id:2,name:'CANVAS',url:'/canvas'},
  {id:3,name:'THREE.JS',url:'/3djs'},
  
]

export default function Nav() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="w-full h-[80px] bg-gray-700 flex  justify-between items-center fixed top-0 z-10">
           <h1 className="w-1/6 text-center text-white text-3xl ">Animation</h1>
           <ul className='flex text-red-400 text-2xl'>
            {navList.map((item,i) =><li key={item.id} onClick={(e)=>setCurrentIndex(Number(e.target.id))} className={`${currentIndex===i ? "text-white":""} p-4`}><Link to={item.url} id={i} >{item.name}</Link></li>)}
           </ul> 
           <div></div>
    </div>
  )
}
