import React from 'react'

const data = [
    { titleL: '', descL: '', titleR: 'Select a Journey', descR: 'Begin by choosing a Journey type that resonates with you. You can tell your own life story, the life story of a loved one who has passed, or help someone tell theirs' },
    { titleL: 'Story Starter', descL: "Upon selecting a Journey, you'll be directed to a personalized questionnaire. Your responses will aid our team in crafting questions tailored to your or your loved one's life story", titleR: '', descR: '' },
    { titleL: '', descL: '', titleR: 'Review Questions', descR: 'After you complete your Questionnaire, you will receive a link to your Interview Questions. This will give you the chance to prepare for your scheduled Interview.' },
    { titleL: 'Tell your Story', descL: 'Sit back, relax, and chat about your life with a MyStory professional interviewer. Conducted via video chat, all you need is a laptop, a charger, and we recommend a glass of water.', titleR: '', descR: '' },
    { titleL: '', descL: '', titleR: 'Recieve Edited Story', descR: 'Just a week post-interview, your edited life story will be delivered to you! It will arrive as a private link, making sharing with loved ones easy and seamless.' },
  ];
  

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="grid grid-cols-3 gap-x-7" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {/* Left Column - Fixed Width */}
          <div className="w-96 text-right -mt-3">
            <h1 className='text-3xl font-bold'>{item.titleL}</h1>
            <p className='text-md text-stone-500'>{item.descL}</p>
          </div>

          {/* Middle Column - Wraps Content */}
          <div className="flex flex-col items-center gap-1">
            <div className='h-3 w-3 rounded-full bg-black'></div>
            <div className='h-56 w-1.5 rounded-full bg-black mb-1'></div>
          </div>

          {/* Right Column - Fixed Width */}
          <div className="w-96 -mt-3">
            <h1 className='text-3xl font-bold'>{item.titleR}</h1>
            <p className='text-md text-stone-500'>{item.descR}</p>
          </div>
        </React.Fragment>
      ))}
        <React.Fragment>
          {/* Left Column - Fixed Width */}
          <div className="w-96 text-right">
          </div>

          {/* Middle Column - Wraps Content */}
          <div className="flex flex-col items-center gap-1">
            <div className='h-3 w-3 rounded-full bg-black'></div>
          </div>

          {/* Right Column - Fixed Width */}
          <div className="w-96">
          </div>
        </React.Fragment>


    
    </div>
        <div className="w-96 text-center mt-5">
            <h1 className='text-3xl font-bold'>Enjoy & Share</h1>
            <p className=' text-stone-500'>Relish in the beautiful narrative of your or your loved one&apos;s life, and share this precious legacy with whomever you choose, creating a timeless bond with generations to come.</p>
        </div>
  </div>
  )
}

export default Timeline





