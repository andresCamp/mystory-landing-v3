import React from 'react'

const ExitSurvey = () => {
  return (
    <div>
      <iframe 
            data-tally-src="https://tally.so/embed/merzQl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="1101" 
            // frameborder="0" 
            // marginheight="0" 
            // marginwidth="0" 
            title="MyStory Exit Survey">
        </iframe>
        {/* <script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script> */}
    </div>
  )
}

export default ExitSurvey
