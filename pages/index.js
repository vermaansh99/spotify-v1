import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import MainArea from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='pt-16 px-3 grid grid-cols-4 bg-black h-screen gap-6'>
       {/*Sidebar*/}
<Sidebar/>
<MainArea/>
     
      {/*Main Area */}
    </main>
  )
}
