import React from 'react'
import {FaPlay} from "react-icons/fa"
function ShortcutCard() {
  return (
    <div className='shortcut-card flex items-center bg-gray-600/50 rounded-md group cursor-pointer hover:bg-gray-500/70 transition-all'>
        <div className="shortcut-card-cover w-[150px] h-[100px] bg-gray-300 rounded-l-md"></div>
        <div className="shortcut-card-content px-6 flex items-center justify-between w-full">
            <h3 className='text-white font-semibold'>Revoic</h3>
            <button className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-all opacity-50 group-hover:opacity-100'><FaPlay/></button>
        </div>
    </div>
  )
}

export default ShortcutCard