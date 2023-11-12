import Link from 'next/link'
import React from 'react'

const BeginButton = () => {
  return (
    <div >
      <Link href={"/begin"} className='waitlist-btn px-6 py-4 hover:bg-[#12375A]'>
        <span className='text-xl inter font-thin'>
            Join the Waitlist
            </span>
      </Link>
    </div>
  )
}

export default BeginButton

// px-6 py-4 rounded-full text-white bg-black 

// className='px-6 py-4 rounded-full text-white bg-black transition-all duration-500 hover:bg-gradient-begin shadow-white'