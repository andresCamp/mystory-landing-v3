import Image from 'next/image'
import React from 'react'
import logo from '/public/mystoryLogoTan.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex justify-center w-full sm:justify-start fixed top-0 p-2 sm:p-8 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
        <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
            <Image
                src={logo}
                alt=''
                // className='w-1/3 sm:w-full'
            />
        </Link>
    </div>
  )
}

export default NavBar
