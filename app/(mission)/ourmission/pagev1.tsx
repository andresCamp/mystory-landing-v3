'use client'
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MissionCard from '../components/MissionCard';

import CuevaManos from '../../../public/MissionImages/CuevaManos.png';
import Napoleon from '../../../public/MissionImages/Napoleon.png';
import TornPhoto from '../../../public/MissionImages/TornPhoto.png';
import Earthrise from '../../../public/MissionImages/Earthrise.png';

const Page = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const containerHeight = containerRef.current.clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = scrollY / containerHeight;

                if (scrollProgress >= 0.25 && scrollProgress < 0.5) {
                    controls.start({ y: '-100vh' });
                } else if (scrollProgress >= 0.5 && scrollProgress < 0.75) {
                    controls.start({ y: '-200vh' });
                } else if (scrollProgress >= 0.75) {
                    controls.start({ y: '-300vh' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <div ref={containerRef} className='relative h-screen w-screen overflow-hidden bg-[#000000]'>
            <motion.div animate={controls} initial={{ y: 0 }} style={{ position: 'absolute', top: 0, zIndex: 1 }}>
                <MissionCard
                    title="The next paradigm in human connection | is storytelling"
                    description=""
                    image={CuevaManos}
                />
            </motion.div>

            <motion.div animate={controls} initial={{ y: '100vh' }} style={{ position: 'absolute', top: 0, zIndex: 2 }}>
                <MissionCard
                    title="Storytelling is in our blood"
                    description="Cueva de las Manos, Argentina (~7,300 BCE)"
                    image={Napoleon}
                />
            </motion.div>

            {/* Additional cards with similar structure */}
        </div>
    );
};

export default Page;









            // <motion.div ref={card1Ref} animate={controls} initial={{ y: 0 }} style={{ zIndex: 4 }}>
            //     <MissionCard
            //         title="The next paradigm in human connection | is storytelling"
            //         description=""
            //         image={CuevaManos}
            //     />
            // </motion.div>

            // <motion.div ref={card2Ref} animate={controls} initial={{ y: '100%' }} style={{ zIndex: 3 }}>
            //     <MissionCard
            //         title="Storytelling is in our blood"
            //         description="Cueva de las Manos, Argentina (~7,300 BCE)"
            //         image={Napoleon}
            //     />
            // </motion.div>

            // <motion.div ref={card3Ref} animate={controls} initial={{ y: '200%' }} style={{ zIndex: 2 }}>
            //     <MissionCard
            //         title="Politicians and Innovators are immortalized | in History"
            //         description="Napoleon crossing the Alps (1805)"
            //         image={TornPhoto}
            //     />
            // </motion.div>

            // <motion.div ref={card4Ref} animate={controls} initial={{ y: '300%' }} style={{ zIndex: 1 }}>
            //     <MissionCard
            //         title="For most of us, our stories are lost to time | within two generations"
            //         description="Unidentified Family (circa 1900)"
            //         image={Earthrise}
            //     />
            // </motion.div>