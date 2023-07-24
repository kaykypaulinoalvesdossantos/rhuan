import { Dispatch, SetStateAction } from 'react'
import { X } from 'lucide-react'
import SliderGalerie from '../SliderGalerie/SliderGalerie'

interface ModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  card: any
}

export default function Modal({ isOpen, setIsOpen, card }: ModalProps) {
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      {isOpen && (
        <div className="relative flex flex-col items-center justify-center gap-8 rounded-lg bg-white py-12 shadow-navBarShadow">
          <button onClick={closeModal} className="absolute right-2 top-2 ">
            <X className="w-10" />
          </button>
          <SliderGalerie images={card.slide} />
          <p className="text-textColor mx-5 w-[500px] text-center text-xl max-md:w-[400px] max-md:text-lg max-sm:mx-3 max-sm:w-[300px] max-sm:text-base max-cell:mx-2">
            {card?.information}
          </p>
        </div>
      )}
    </>
  )
}
