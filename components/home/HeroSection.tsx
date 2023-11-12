import React from 'react'
import BeginButton from '../buttons/BeginButton'
import Image from 'next/image'
import heroHands from "/public/heroHands.png"
import { AnimatePresence, motion } from 'framer-motion'
import WaitlistButton from '../buttons/WaitlistButton'

const HeroSection = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center bg-[#F1F1EA] absolute top-0 left-0'> 
          <motion.div 
            className='flex flex-col gap-16 sm:gap-8 items-center sm:items-start mt-16 mx-8 sm:mx-20'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            exit={{ opacity: 0 }}
          > 
              <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center sm:text-left sm:text-8xl'>Your Legacy,<br /> Their Treasure:<br /> The Ultimate Gift</h1>
                <h2 className=' sm:text-3xl text-2xl text-center sm:text-left font-light text-stone-700'>Capture your loved one’s life story as a video with MyStory</h2>
              </div>
              <BeginButton />
              {/* <WaitlistButton /> */}
          </motion.div>

      <div className='hidden sm:block'>
        <Image
            src={heroHands}
            alt=''
            className='w-1/2 absolute top-0 right-0 '
        />
      </div>
    </div>

  )
}

export default HeroSection
