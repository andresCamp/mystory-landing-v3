import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface MissionCardProps {
    title: string;
    description: string;
    image?: StaticImageData;
    }

const MissionCard: React.FC<MissionCardProps> = ({title, description, image}) => {

    const titleParts = title.split('|').map((part, index) => (
        <span key={index}>
            {part}
            {index < title.split('|').length - 1 && <br />}
        </span>
    ));


    return (

        <div className="relative flex items-center justify-center h-screen w-screen bg-black">
            {image && (
                        <Image
                        src={image}
                        fill
                        sizes="100vw"
                        placeholder='blur'
                        style={{
                          objectFit: 'cover',
                        }}                        
                        alt=""
                    />
            )}
            <h2 className="text-5xl sm:text-6xl text-center text-white z-10">{titleParts}</h2>
            <h3 className='absolute bottom-0 sm:right-0 text-stone-400 m-24 w-2/3 sm:w-auto  text-center sm:m-12 text-lg z-10'>{description}</h3>
        </div>





    // <div>
        // <div className='h-screen flex flex-col items-center justify-center'>
            
            
        //     <h1 className='text-6xl text-center text-white'>{title}</h1>
            
        //     <Image
        //         src={image}
        //         // fill={true}
        //         alt=''
        //         className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
        //         // className='h-full relative top-0 right-0 '
        //     />

        // </div>

    // </div>
  )
}

export default MissionCard
