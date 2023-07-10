import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
function SidebarOption({Icon,label}){
    return <div className="sidebar-option text-white/50 flex px-3 py-3 items-center gap-6 cursor-pointer w-full hover:text-white transition-all font-semibold">
        <span><Icon/></span>
        <span>{label}</span>
    </div>
}

function Sidebar() {
  return (
    <div className='col-span-1 flex flex-col items-center h-full gap-3'>
        <div className="sidebar-header bg-gray-600/10 w-full  flex flex-col items-start">
            <SidebarOption Icon={AiFillHome} label={"Home"}/>
            <SidebarOption Icon={BiSearch} label={"Search"}/>
        </div>
        <div className="sidebar-library bg-gray-600/10 h-full w-full"></div>
    </div>
  )
}

export default Sidebar