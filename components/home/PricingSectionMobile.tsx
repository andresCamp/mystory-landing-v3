import React from 'react'
import BeginButton from '../buttons/BeginButton'
import {inter} from '../../app/fonts'

const PricingSection = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-28 my-16  bg-[#DEDFCD] h-screen w-screen'>

            {/* <div className='flex flex-col items-center gap-12 '> */}

                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-5xl font-bold'>Price</h1>
                        <h3 className='px-12 text-2xl text-center font-light text-stone-500'>{`"The most valuable $150 you’ll ever spend"`}</h3>
                    </div>


                    <div className='flex flex-col gap-8 items-center justify-center'>
                        {/* Top column */}
                        <div className="flex flex-col gap-3 items-center justify-start">
                            <h1 className='text-2xl font-bold'>What You Pay</h1>
                            <p className='text-2xl text-stone-500'>$150</p>
                        </div>

                        {/* Middle div line  */}
                        <div className='w-72 h-1.5 rounded-full bg-black'></div>

                        {/* Bottom column */}
                        <div className="flex flex-col gap-3 justify-start items-center text-center">
                            <h1 className='text-2xl font-bold'>What You Get</h1>
                            <p className={`text-md text-stone-500 ${inter.className}`}>Tailored interview questions<br/>One-on-one interview<br/>Edited life story video</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-center'>
                        <BeginButton />
                    </div>
                </div>


            {/* </div> */}


           

        </div>
    </div>
  )
}

export default PricingSection
