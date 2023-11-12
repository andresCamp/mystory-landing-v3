'use client'
import React from 'react'
import Image from 'next/image'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import PricingSection from '@/components/home/PricingSection'
import PricingSectionMobile from '@/components/home/PricingSectionMobile'
import footerImg from "/public/footerImg.png"
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
  
    <main className="flex flex-col items-center justify-between sm:px-24 h-full relative pb-[400px]">

      <div className='h-screen'>
          <HeroSection />
      </div>
    
      <HowItWorksSection />

      <div className='hidden sm:block'>
        <PricingSection />
      </div>
      
      <div className='sm:hidden'>
        <PricingSectionMobile />
      </div>

      <div className='flex-row hidden sm:block gap-3 items-first justify-center text-center text-3xl'>
                Let us do the work <br/>So you can spend more time with the ones you love
      </div>
      
      <div className='sm:hidden flex flex-row gap-3 items-first justify-center text-center my-12 text-2xl'>
                Let us do the work <br/> so you can spend more time <br/> with the ones you love
      </div>

      <div className="absolute bottom-0 w-full h-[700px] -mb-20">
        <Image
          src={footerImg}
          alt=''
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className='flex text-white p-1 justify-center absolute bottom-0 -mb-20 backdrop-blur w-screen'>
      © 2023 MyStory Inc.
      </div>

    </main>
  )
}

export default HomePage




  {/* <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='h-screen '>
      <HeroSection />

    </motion.div> */}