import Link from 'next/link'
import React from 'react'
import { caudex } from '../../app/fonts'

const BeginButton = () => {
  return (
      <Link href={"/begin"} >
        <div className={`bg-navy  text-white rounded-full flex px-14 py-4 transition-all duration-500 hover:bg-begin-gradient hover:scale-105 hover:shadow-begin-shadow`}>
        {/* <div className='cta-btn'> */}
          <span className='text-xl font-thin'>
            <p className={`font-medium ${caudex.className}`}>
              Start Now
            </p>
              </span>
        </div>
      </Link>
  )
}

export default BeginButton

{/* <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'> */}

// px-6 py-4 rounded-full text-white bg-black 

// className='px-6 py-4 rounded-full text-white bg-black transition-all duration-500 hover:bg-gradient-begin shadow-white'