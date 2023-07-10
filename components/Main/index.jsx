import React, { useEffect, useState } from 'react'
import {BiChevronRight,BiChevronLeft} from "react-icons/bi"
import ShortcutCard from '../ShortcutCard'
import getUserTopItems from '@/utils/getUserTopItems'
import getUser from '@/utils/getUser'
function MainArea() {
    const [user,setUser] = useState(null)
    const [items,setItems] = useState([])

    useEffect(()=>{
        const getShortcuts = async ()=>{
            const shortcuts = await getUserTopItems()
            console.log(shortcuts)
        }

        const fetchUser = async ()=>{
            const u = await getUser()
            console.log(u)
            setUser(u)
        }
        getShortcuts();
        fetchUser();
    },[])

  return (
    <div className='col-span-3 bg-gradient-to-r from-indigo-500 rounded-md'>
        <div className="main-navbar w-full px-3 py-3 flex justify-between items-center rounded-t-md">
            <div className="header-controls flex items-center gap-3">
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-white'><BiChevronLeft/></button>
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-white'><BiChevronRight/></button>
            </div>
            <div className="header-user-account">
                <a href="http://localhost:5001/login" className="block w-8 h-8 bg-red-300 rounded-full relative">
                    <span className="notification-count w-3 h-3 bg-blue-400 rounded-full block absolute -top-1 right-0"></span>
                   { user && <img src={user.images[0].url} alt="user-avatar" className='w-full h-full rounded-full' />}
                </a>
            </div>
        </div>
        <div className="main-area-content px-4 mt-6">
            <div className="greeting-box">
                <h3 className='text-3xl font-semibold text-white'>Good Evening</h3>
            </div>
            <div className="main-content-area mt-12">
                <div className="main-content-area-shortcuts grid grid-cols-3 gap-6">
                <ShortcutCard/>
                <ShortcutCard/>
                <ShortcutCard/>
                <ShortcutCard/>
                <ShortcutCard/>
                <ShortcutCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainArea