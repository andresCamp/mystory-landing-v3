import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '/public/mystorylogotanhand.svg'


const NavBarMission = () => {
  return (
    // <div className='flex justify-center w-full sm:justify-start fixed top-0 p-2 sm:p-8 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
    <div className='flex justify-center gap-8 sm:gap-0 sm:justify-between items-center w-full fixed top-0  pt-8 sm:py-8 sm:px-12 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
        <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
            <h2 className='text-primary text-xl'>MyStory</h2>
        </Link>
        <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
            <Image
                src={logo}
                alt=''
                className='w-16'
            />
        </Link>
        <div className='flex  flex-row justify-center items-center text-lg gap-8 text-primary'>
            <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
                <h3>Home</h3>
            </Link>

            {/* <h3>Blog</h3>
            <h3>Contact</h3> */}
        </div>
    </div>
  )
}

export default NavBarMission
