import JourneyCard from '@/components/journey/JourneyCard'
import React from 'react'

const page = () => {
  return (
    <div className='sm:h-screen flex flex-col gap-16 items-center justify-center py-32 px-8 bg-[#DEDFCD]'>

        <h1 className='text-4xl sm:text-8xl font-normal text-begin-gradient text-center'>Select your Journey</h1>

        <div className='flex flex-col sm:flex-row gap-8'>
            <div className='sm:w-1/3'>
                <JourneyCard
                    popupId="HYYXINuK"
                    title="Help Someone Tell | Their Life Story"
                    src="/journeyA.png"
                    desc1="Complete their questionnaire"
                    desc2="Review their interview questions"
                    desc3="Schedule interview"
                />
            </div>

            <div className='sm:w-1/3'>
                <JourneyCard
                    popupId="WFvrrE0T"
                    title="Tell My Life Story"
                    src="/journeyB.png"
                    desc1="Complete your questionnaire"
                    desc2="Review your interview questions"
                    desc3="Schedule interview"
                />
            </div>

            <div className='sm:w-1/3'>
                <JourneyCard
                    popupId="g5ZGhqBw"
                    title="Tell the Life Story of a | Deceased Loved One"
                    src="/journeyC.png"
                    desc1="Complete a questionnaire"
                    desc2="Review your interview questions"
                    desc3="Schedule interview"
                />
            </div>
        </div>
    </div>
  )
}

export default page
