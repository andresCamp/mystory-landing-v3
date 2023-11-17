import React from 'react'
import BeginButton from '../buttons/BeginButton'
import {inter} from '../../app/fonts'

const PricingSection = () => {
  return (
    <div>
        <div className='flex flex-col items-center gap-12 my-48'>

            <div className='flex flex-col items-center gap-12 px-20 py-4 '>
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className='text-6xl font-bold'>Price</h1>
                    <h3 className='text-3xl font-light text-stone-500'>The most valuable $150 you’ll ever spend</h3>
                </div>


                <div className='flex flex-row gap-3 items-first justify-center bg-[#DEDFCD] shadow-xl p-8 rounded-xl'>
                    <React.Fragment>
                    {/* Left Column - Fixed Width */}
                    <div className="w-56 py-2 flex flex-col -mt-3 gap-3 items-center justify-start">
                        <h1 className='text-2xl font-bold'>What You Pay</h1>
                        <p className='text-5xl font-thin text-neutral-400'>$150</p>
                    </div>

                    {/* Middle Column - Wraps Content */}
                    <div className="flex flex-col items-center gap-1 px-4">
                        <div className='h-28 w-1.5 rounded-full bg-black mb-1'></div>
                    </div>

                    {/* Right Column - Fixed Width */}
                    <div className="w-56 py-2 flex flex-col gap-3 justify-start items-center text-center -mt-3">
                        <h1 className='text-2xl font-bold'>What You Get</h1>
                        <p className={`text-md text-stone-500 ${inter.className}`}>Tailored interview questions<br/>One-on-one interview<br/>Edited life story video</p>
                    </div>
                    </React.Fragment>     
                </div>

                <BeginButton />
            </div>


           

        </div>
    </div>
  )
}

export default PricingSection
