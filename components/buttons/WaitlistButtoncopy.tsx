import Link from 'next/link'
import React from 'react'

const WaitlistButton = () => {
  return (
    <div >
      <Link href={"/begin"} className='bg-[#12375A] rounded-full px-6 py-5 hover:transition-all hover:scale-125 hover:duration-300  hover:brightness-150 hover:cursor-pointer'>
        <span className='text-xl text-white inter font-thin'>
            Join the the Waitlist
            </span>
      </Link>
    </div>
  )
}

export default WaitlistButton

// px-6 py-4 rounded-full text-white bg-black 

// className='px-6 py-4 rounded-full text-white bg-black transition-all duration-500 hover:bg-gradient-begin shadow-white'