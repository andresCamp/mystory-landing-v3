import { caudex } from '@/app/fonts'
import { PopupButton } from '@typeform/embed-react'

const TypeformPopup = ({formId}) => {
  return (
    <PopupButton id={formId} style={{ fontSize: 20 }} className={`bg-begin-gradient  px-14 py-2 rounded-full transition-all duration-1000 hover:scale-105 shadow-begin-shadow`}>
      <p className={`${caudex.className} text-white font-medium text-md `}>Begin</p>
    </PopupButton>
  )
}

export default TypeformPopup