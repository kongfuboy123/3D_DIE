import React,{useState} from 'react'

export default function Sidebar({list}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='w-full h-full justify-center items-center bg-gray-600 sticky left-0 top-[80px] my-auto'>
      <ul  className='flex flex-col text-red-400 text-xl items-center'>
        {list.map((item,i) =><li key={i}  onClick={(e)=>setCurrentIndex(Number(e.target.id))} className={`${currentIndex===i ? "text-white":""} p-4 inline-block w-full `} ><a id={i} href={item.href}>{item.name}</a></li>)}
      </ul>
    </div>
  )
}
