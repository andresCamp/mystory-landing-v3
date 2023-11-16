import React from 'react'
import SVGanimation from './SVGanimation'
import MissionCard from '../components/MissionCard'
import CuevaManos from '../../../public/MissionImages/CuevaManos.png'
import Napoleon from '../../../public/MissionImages/Napoleon.png'
import WrightBrothers from '../../../public/MissionImages/WrightBrothers.png'
import Earthrise from '../../../public/MissionImages/Earthrise.png'
import TornPhoto from '../../../public/MissionImages/TornPhoto.png'
// import CuevaManos from '@MissionImages/CuevaManos.png'

//la fille aux pouvoirs magiques

const page = () => {
  return (
    // <div className='flex flex-col  snap-y snap-mandatory overflow-y-auto scroll-smooth  items-center justify-center bg-[#000000]'>

    <div className="relative h-screen flex-col snap-y snap-mandatory scroll-smooth overflow-y-auto ">
      
      <section className="snap-start shrink-0">
        <MissionCard
          title="The next paradigm in human connection | is storytelling"
          description=""
        />
      </section>

      <section className="snap-start shrink-0">
        <MissionCard
            title="Storytelling is in our blood"
            description="Cueva de las Manos, Argentina (~7,300 BCE)"
            image={CuevaManos}  
          />
      </section>

      <section className="snap-start shrink-0">
        <MissionCard
          title="Politicians and Innovators are immortalized | in History"
          description="Napoleon crossing the Alps (1805)"
          image={Napoleon}
        />
      </section>

      <section className="snap-start shrink-0">
        <MissionCard
          title="For most of us, our stories are lost to time | within two generations"
          description="Unidentified Family (circa 1900)"
          image={TornPhoto}
        />
      </section>
      <section className="snap-start shrink-0">
        <MissionCard
          title="MyStory is everyone’s Story"
          description="Earthrise, Apollo 8 (1968)"
          image={Earthrise}
        />
      </section>
    </div>








// </div>
)
}

export default page




// <div className="relative flex-col  snap-y snap-mandatory overflow-y-auto">
    
//     <section className="snap-start shrink-0">
//       <MissionCard
//         title="The next paradigm in human connection | is storytelling"
//         description=""
//       />
//     </section>
//     <section className="snap-start shrink-0">
//       <MissionCard
//         title="Storytelling is in our blood"
//         description="Cueva de las Manos, Argentina (~7,300 BCE)"
//         image={CuevaManos}  
//       />
//     </section>
//   <section className="snap-start shrink-0 ">Section 3</section>
//   <section className="snap-start shrink-0">Section 4</section>
//   <section className="snap-start shrink-0">Section 5</section>
    
//   </div>

      
      
//       {/* <div className='h-screen flex flex-col items-center justify-center'>
//         <h1 className='text-6xl text-center text-white'>Storytelling is in our blood <br/></h1>
//       </div> */}

//       <div className='snap-center shrink-0'>
//       </div>
      
      // <MissionCard
      //   title="Politicians and Innovators are immortalized | in History"
      //   description="Napoleon crossing the Alps (1805)"
      //   image={Napoleon}
      // />
      
      // <MissionCard
      //   title="For most of us, our stories are lost to time | within two generations"
      //   description="Unidentified Family (circa 1900)"
      //   image={TornPhoto}
      // />
      
      // <MissionCard
      //   title="MyStory is everyone’s Story"
      //   description="Earthrise, Apollo 8 (1968)"
      //   image={Earthrise}
      // />
