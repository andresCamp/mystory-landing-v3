import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '/public/mystorylogotanhand.svg'


const NavBarMission = () => {
  return (
    // <div className='flex justify-center w-full sm:justify-start fixed top-0 p-2 sm:p-8 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
    <div className='flex justify-center gap-16 sm:gap-0 sm:justify-between items-center w-full fixed top-0  pt-8 pb-4 sm:py-8 sm:px-12 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
        
        <div className='flex w-1/3 flex-row justify-end items-center text-lg gap-8 text-primary'>
            <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
                <h2 className='text-primary text-xl'>MyStory</h2>
            </Link>
        </div>


        <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
            <Image
                src={logo}
                alt=''
                className='w-14 sm:w-16'
            />
        </Link>

        <div className='flex w-1/3 flex-row justify-start items-center text-lg gap-8 text-primary'>
            <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
                <h3 className='text-xl'>Home</h3>
            </Link>
        </div>
    </div>
  )
}

export default NavBarMission
