'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import TypeformPopup from './TypeformPopup'

interface JourneyCardTypes {
    title: string,
    src: string,
    desc1: string,
    desc2: string,
    desc3: string,
    popupId: string,
}

const JourneyCard: React.FC<JourneyCardTypes> = ({title, src, desc1, desc2, desc3, popupId}) => {
  return (
    <div className='bg-white flex flex-col gap-6 text-center items-center justify-center rounded-xl shadow-lg px-0 py-4'>
        <Image
            src={src}
            alt=''
            width={200}
            height={200}
        />
        
        <h1 className='text-xl'>{title}</h1>

        <ul className='font-light'>
            <li><p>{desc1}</p></li>
            <li><p>{desc2}</p></li>
            <li><p>{desc3}</p></li>
        </ul>

      <TypeformPopup
        formId={popupId}
       />
    </div>
  )
}

export default JourneyCard
