import Image from 'next/image'
import React from 'react'
import logo from '/public/mystoryLogoTan.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex flex-col items-start justify-start fixed top-0 p-8 z-50'>
        <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'>
            <Image
                src={logo}
                alt=''
            />
        </Link>
    </div>
  )
}

export default NavBar
