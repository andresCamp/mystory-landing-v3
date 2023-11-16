import { caudex } from '@/app/fonts'
import { PopupButton } from '@typeform/embed-react'

const TypeformPopup = ({formId}) => {
  return (
    <PopupButton id={formId} style={{ fontSize: 20 }} className={`bg-begin-gradient text-white font-bold ${caudex.className} px-14 py-3 rounded-full transition-all duration-1000 hover:scale-105 hover:shadow-begin-shadow`}>
      <p>Start Now</p>
    </PopupButton>
  )
}

export default TypeformPopup