'use client'
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';



interface MissionCardProps {
    title: string;
    description: string;
    image?: StaticImageData;
    scrollY: number; // Added prop to control the position based on scroll
}

const MissionCard: React.FC<MissionCardProps> = ({ title, description, image, scrollY }) => {
    const titleParts = title.split('|').map((part, index) => (
        <span key={index}>
            {part}
            {index < title.split('|').length - 1 && <br />}
        </span>
    ));

    // Calculate the position of the card based on scrollY
    const yPos = Math.max(0, scrollY - 100); // Adjust the 100 to control when the card starts moving

    return (
        <motion.div 
            className="absolute top-0 left-0 right-0 flex items-center justify-center h-screen w-screen"
            style={{ y: yPos }}>
             {image && (<Image
                src={image}
                layout='fill'
                alt=""
            />)}
            <h2 className="text-6xl text-center text-white z-10">{titleParts}</h2>
            <h3 className='absolute bottom-0 right-0 text-stone-400 m-12 text-lg z-10'>{description}</h3>
        </motion.div>
    );
}

export default MissionCard;






// interface MissionCardProps {
//     title: string;
//     description: string;
//     image?: StaticImageData;
// }

// const MissionCard: React.FC<MissionCardProps> = ({ title, description, image }) => {
//     const { scrollYProgress } = useViewportScroll();
//     const yRange = [0, 1];
//     const opacityRange = [1, 0];
//     const scaleRange = [1, 1.5];

//     const opacity = useTransform(scrollYProgress, yRange, opacityRange);
//     const scale = useTransform(scrollYProgress, yRange, scaleRange);

//     const titleParts = title.split('|').map((part, index) => (
//         <span key={index}>
//             {part}
//             {index < title.split('|').length - 1 && <br />}
//         </span>
//     ));

//     return (
//         <motion.div 
//             className="relative flex items-center justify-center h-screen w-screen"
//             style={{ opacity, scale }}>
//             {image && (<Image
//                 src={image}
//                 layout='fill'
//                 alt=""
//             />)}
//             <h2 className="text-6xl text-center text-white z-10">{titleParts}</h2>
//             <h3 className='absolute bottom-0 right-0 text-stone-400 m-12 text-lg z-10'>{description}</h3>
//         </motion.div>
//     );
// }

// export default MissionCard;
