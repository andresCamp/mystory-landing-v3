import Link from 'next/link'
import React from 'react'
import Arrow from '../../../public/Arrow.svg'
import Image from 'next/image'
import { inter } from '../../fonts'


const JoinBeta = () => {
  return (
    <div className={`flex flex-wrap gap-4 ${inter.className} fixed bottom-10 inset-x-0 justify-center sm:py-4 text-white`}>
      <Link href={"/begin"} className=' transition-all duration-500 hover:opacity-70'>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <h3>Tell your Story</h3>
          {/* <h3>Join the Waitlist</h3> */}
          {/* <h3>Join our Public Beta</h3> */}
          <Image src={Arrow} alt='' className='w-3.5 h-3.5 text-white' />
        </div>
      
      </Link>
    </div>
  )
}

export default JoinBeta
