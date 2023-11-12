import { PopupButton } from '@typeform/embed-react'

const TypeformPopup = ({formId}) => {
  return (
    <PopupButton id={formId} style={{ fontSize: 20 }} className="bg-[#418A2F] text-white font-bold px-6 py-4 rounded-full transition-all duration-1000 hover:bg-[#336926]">
      <p>Begin Journey</p>
    </PopupButton>
  )
}

export default TypeformPopup