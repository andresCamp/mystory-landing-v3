import JourneyCard from '@/components/journey/JourneyCard'
import React from 'react'

const page = () => {
  return (
    <div className='sm:h-screen flex flex-col gap-16 items-center justify-center py-32 px-8 bg-[#EEF1DD]'>

        <h1 className='text-4xl sm:text-6xl font-normal text-begin-gradient text-center'>Select your Journey</h1>

        <div className='flex flex-col justify-center sm:flex-row gap-16 pb-16'>
            <div className=''>
                <JourneyCard
                    popupId="HYYXINuK"
                    title="Help Tell a Life Story"
                    src="/journeyA.png"
                    desc1="Complete their questionnaire"
                    desc2="Review their interview questions"
                    desc3="Schedule interview"
                />
            </div>

            <div className=''>
                <JourneyCard
                    popupId="WFvrrE0T"
                    title="Tell My Life Story"
                    src="/journeyB.png"
                    desc1="Complete your questionnaire"
                    desc2="Review your interview questions"
                    desc3="Schedule interview"
                />
            </div>

            <div className=''>
                <JourneyCard
                    popupId="g5ZGhqBw"
                    title="Tell a Departed One's Story"
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
