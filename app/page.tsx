import NavBar from '@/components/NavBar'
import NavTab from '@/components/NavTab'
import BeginButton from '@/components/buttons/BeginButton'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import PricingSection from '@/components/home/PricingSection'
import Image from 'next/image'
import footerImg from "/public/footerImg.png"
import FooterSection from '@/components/home/FooterSection'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 h-full relative pb-[400px]">

      <div className='h-screen '>
        <HeroSection />

      </div>

      <HowItWorksSection />

      <PricingSection />

      <div className="absolute bottom-0 w-full h-[700px] -mb-20"> {/* Adjust the height as needed */}
        <Image
          src={footerImg}
          alt=''
          layout="fill"
          objectFit="cover"
        />
      </div>

    </main>
  )
}
