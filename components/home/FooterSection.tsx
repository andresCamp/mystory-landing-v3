import Image from 'next/image'
import React from 'react'
import footerImg from "/public/footerImg.png"


const FooterSection = () => {
    return (
        <div className="relative w-full h-[300px]"> {/* Adjust the height value as needed */}
        <Image
          src={footerImg}
          alt=''
          layout="fill"
          objectFit="cover"
        />
      </div>
    )
  }
  
  export default FooterSection
  