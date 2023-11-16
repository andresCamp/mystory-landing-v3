import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { inter } from '../../app/fonts';

// Define the structure of each item in the data array
interface TimelineItemData {
  title: string;
  desc: string;
}

// Define the props for the TimelineItem component
interface TimelineItemProps {
  item: TimelineItemData;
  isLast: boolean;
}

const data: TimelineItemData[] = [
  { title: 'Select a Journey', desc: 'Begin by choosing a Journey type that resonates with you. You can tell your own life story, the life story of a loved one who has passed, or help someone tell theirs' },
  { title: 'Story Starter', desc: "Upon selecting a Journey, you'll be directed to a personalized questionnaire. Your responses will aid our team in crafting questions tailored to your or your loved one's life story" },
  { title: 'Review Questions', desc: 'After you complete your Questionnaire, you will receive a link to your Interview Questions. This will give you the chance to prepare for your scheduled Interview.' },
  { title: 'Tell Your Story', desc: 'Sit back, relax, and chat about your life with a MyStory professional interviewer. Conducted via video chat, all you need is a laptop, a charger, and we recommend a glass of water.' },
  { title: 'Recieve Edited Story', desc: 'Just a week post-interview, your edited life story will be delivered to you! It will arrive as a private link, making sharing with loved ones easy and seamless.' },
  { title: 'Enjoy & Share', desc: 'Relish in the beautiful narrative of your or your loved one&apos;s life, and share this precious legacy with whomever you choose, creating a timeless bond with generations to come.' },
];

// Animation variants for framer-motion
const fadeInVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-25%' });

  return (
      <div className="flex items-start w-full">
      

    {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center mr-2">
        <div className='h-3 w-3 my-1 rounded-full bg-black'></div>
        <div className='h-56 w-1.5 rounded-full' style={{ backgroundColor: isLast ? 'transparent' : 'black' }}></div>
      </div>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      >

      {/* Text Content */}
      <div className="flex-col -mt-1.5">
        <h1 className='text-2xl font-bold'>{item.title}</h1>
        <p className={`text-md text-stone-500 ${inter.className}`}>{item.desc}</p>
      </div>
    </motion.div>
      </div>  
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full px-4">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} isLast={index === data.length - 1} />
        ))}
      </div>
    </div>
  )
}

export default Timeline;
 









// import React from 'react';
// import { inter } from '../../app/fonts';

// const data = [
//   { title: 'Select a Journey', desc: 'Begin by choosing a Journey type that resonates with you. You can tell your own life story, the life story of a loved one who has passed, or help someone tell theirs' },
//   { title: 'Story Starter', desc: "Upon selecting a Journey, you'll be directed to a personalized questionnaire. Your responses will aid our team in crafting questions tailored to your or your loved one's life story" },
//   { title: 'Review Questions', desc: 'After you complete your Questionnaire, you will receive a link to your Interview Questions. This will give you the chance to prepare for your scheduled Interview.' },
//   { title: 'Tell Your Story', desc: 'Sit back, relax, and chat about your life with a MyStory professional interviewer. Conducted via video chat, all you need is a laptop, a charger, and we recommend a glass of water.' },
//   { title: 'Recieve Edited Story', desc: 'Just a week post-interview, your edited life story will be delivered to you! It will arrive as a private link, making sharing with loved ones easy and seamless.' },
//   { title: 'Enjoy & Share', desc: 'Relish in the beautiful narrative of your or your loved one&apos;s life, and share this precious legacy with whomever you choose, creating a timeless bond with generations to come.' },
// ];

// const Timeline = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="flex flex-col items-center w-full px-4">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-start w-full">

//             {/* Timeline Dot and Line */}
//             <div className="flex flex-col items-center mr-2">
//               <div className='h-3 w-3 my-1 rounded-full bg-black'></div>
//               <div className='h-56 w-1.5 rounded-full' style={{ backgroundColor: index === data.length - 1 ? 'transparent' : 'black' }}></div>

//             </div>

//             {/* Text Content */}
//             <div className="flex-col -mt-1.5">
//               <h1 className='text-2xl font-bold'>{item.title}</h1>
//               <p className={`text-md text-stone-500 ${inter.className}`}>{item.desc}</p>
//             </div>

//           </div>
//         ))}
//       </div>



     
//     </div>
//   )
// }

// export default Timeline;
