import React from 'react'

const data = [
    { titleL: '', descL: '', titleR: 'Select a Journey', descR: 'Start by making Backyard yours. Choose your layout, colors, windows, doors, decks, interior, roof, and solar.' },
    { titleL: 'Complete Questionnaire', descL: 'Start by making Backyard yours. Choose your layout, colors, windows, doors, decks, interior, roof, and solar.', titleR: '', descR: '' },
    { titleL: '', descL: '', titleR: 'Review Questions', descR: 'Start by making Backyard yours. Choose your layout, colors, windows, doors, decks, interior, roof, and solar.' },
    { titleL: 'Schedule Interview', descL: 'Start by making Backyard yours. Choose your layout, colors, windows, doors, decks, interior, roof, and solar.', titleR: '', descR: '' },
    { titleL: '', descL: '', titleR: 'Complete Interview', descR: 'Start by making Backyard yours. Choose your layout, colors, windows, doors, decks, interior, roof, and solar.' },
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
            <p className=' text-stone-500'>Start by making Backyard yours. Choose your layout, colors, windows, doors, decks, interior, roof, and solar.</p>
        </div>
  </div>
  )
}

export default Timeline





