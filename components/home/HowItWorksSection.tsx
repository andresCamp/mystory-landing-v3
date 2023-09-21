import React from 'react'
import Timeline from './Timeline'

const HowItWorksSection = () => {
  return (
    <div className='flex flex-col gap-32 items-center w-screen mt-32'>

        <div className='flex flex-col items-center'>
            <h1 className='text-6xl font-bold'>How It Works</h1>
            <h3 className='text-3xl font-light'>Capture a life story in just a few hours</h3>
        </div>

        <div className='flex flex-col gap-1 items-center justify-start'>
            <Timeline/>
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
