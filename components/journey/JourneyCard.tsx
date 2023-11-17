'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import TypeformPopup from './TypeformPopup'
import { inter } from '../../app/fonts'

interface JourneyCardTypes {
    title: string,
    src: string,
    desc1: string,
    desc2: string,
    desc3: string,
    popupId: string,
}

const JourneyCard: React.FC<JourneyCardTypes> = ({title, src, desc1, desc2, desc3, popupId}) => {
  
  const titleParts = title.split('|').map((part, index) => (
    <span key={index}>
        {part}
        {index < title.split('|').length - 1 && <br />}
    </span>
));
  
  return (
    <div className='bg-white flex h-full  flex-col gap-3 text-center items-center justify-center rounded-lg shadow-lg px-2 pb-4'>
        <Image
            src={src}
            alt=''
            width={180}
            height={180}
        />
        
        <h1 className='text-sm text-[#4E4E4E]'>{titleParts}</h1>

        {/* <ul className={`list-disc font-light text-left text-sm ${inter.className}`}>
            <li><p>{desc1}</p></li>
            <li><p>{desc2}</p></li>
            <li><p>{desc3}</p></li>
        </ul> */}

      <TypeformPopup
        formId={popupId}
       />
    </div>
  )
}

export default JourneyCard
