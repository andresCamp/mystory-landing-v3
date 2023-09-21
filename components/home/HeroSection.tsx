import React from 'react'
import BeginButton from '../buttons/BeginButton'
import Image from 'next/image'
import heroHands from "/public/heroHands.png"

const HeroSection = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center bg-[#DEDFCD] absolute top-0 left-0'> 
        <div className='flex flex-col gap-8 items-start mt-16 mx-20'>
            <h1 className='font-bold text-8xl'>Your Legacy,<br /> Their Treasure:<br /> The Ultimate Gift</h1>
            <BeginButton />
        </div>

        <Image
            src={heroHands}
            alt=''
            className='w-1/2 absolute top-0 right-0 '
        />
    </div>

  )
}

export default HeroSection
