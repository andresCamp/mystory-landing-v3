import React from 'react'
import MissionCard from '../components/MissionCard'
import CuevaManos from '../../../public/MissionImages/CuevaManos.png'

const page = () => {
  return (
    <div>
      <div className="relative h-screen flex-col snap-y snap-mandatory overflow-y-auto ">
    
    <section className="snap-start shrink-0">
    <MissionCard
        title="Storytelling is in our blood"
        description="Cueva de las Manos, Argentina (~7,300 BCE)"
        image={CuevaManos}  
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
        title="Storytelling is in our blood"
        description="Cueva de las Manos, Argentina (~7,300 BCE)"
        image={CuevaManos}  
      />
</section>


  <section className="snap-start shrink-0 w-96 h-96 bg-blue-200">Section 2</section>
  <section className="snap-start shrink-0 w-96 h-96 bg-green-200">Section 3</section>
  <section className="snap-start shrink-0 w-96 h-96 bg-yellow-200">Section 5</section>
  <section className="snap-start shrink-0 w-96 h-96 bg-indigo-200">Section 4</section>
  <section className="snap-start shrink-0 w-96 h-96 bg-yellow-200">Section 5</section>
  <section className="snap-start shrink-0 w-96 h-96 bg-indigo-200">Section 4</section>
    
  </div>
    </div>
  )
}

export default page
