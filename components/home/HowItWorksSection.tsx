import React from 'react'
import Timeline from './Timeline'
import TimelineMobile from './TimelineMobile'

const HowItWorksSection = () => {
  return (
    <div className='flex flex-col gap-20 sm:gap-32 items-center w-screen mt-32'>

        <div className='flex flex-col gap-2 items-center'>
            <h1 className=' text-4xl sm:text-6xl font-bold'>How It Works</h1>
            <h3 className=' text-xl sm:text-3xl font-light'>Capture a life story in just a few hours</h3>
        </div>

        <div className=' flex-col hidden sm:block gap-1 items-center justify-start'>
            <Timeline/>
        </div>
        
        <div className='flex flex-col sm:hidden gap-1 items-center justify-start'>
            <TimelineMobile/>
        </div>




     



        {/* <div className='h-screen flex flex-col gap-1 items-center justify-start'>
            <div className='h-3 w-3 rounded-full  bg-black'></div>
            <div className='h-64 w-1.5 rounded-full bg-black'></div>
            <div className='h-3 w-3 rounded-full  bg-black'></div>
            <div className='h-64 w-1.5 rounded-full bg-black'></div>
        </div> */}


      
    </div>
  )
}

export default HowItWorksSection
