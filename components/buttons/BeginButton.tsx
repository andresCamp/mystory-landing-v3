import Link from 'next/link'
import React from 'react'

const BeginButton = () => {
  return (
    <div >
      <Link href={"/begin"} className='begin-btn px-6 py-4'>
        <span className='text-xl inter font-thin'>
            Begin your Journey
            </span>
      </Link>
    </div>
  )
}

export default BeginButton

// px-6 py-4 rounded-full text-white bg-black 

// className='px-6 py-4 rounded-full text-white bg-black transition-all duration-500 hover:bg-gradient-begin shadow-white'