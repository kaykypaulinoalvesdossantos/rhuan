'use client'
import { galerieconfig } from '@/mock/galerieconfig'
import Image from 'next/image'
import { SetStateAction, useState } from 'react'
import Modal from './Modal/Modal'

export default function GalerieModal() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  function handleCardClick(card: SetStateAction<null>) {
    setSelectedCard(card)
    setIsOpenModal(true)
  }

  return (
    <>
      <div className="mt-28 flex flex-wrap justify-evenly gap-7 ">
        {galerieconfig?.map((configGalerie: any) => {
          return (
            <div
              key={configGalerie.id}
              className="flex w-1/5 flex-col items-center gap-8 shadow-modalShadow max-lg:w-2/5 max-md:w-2/4 max-sm:mx-5 max-sm:w-full"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Image src={configGalerie.principalphoto} alt={''} />
              <p className=" w-full px-4 text-center text-2xl font-bold text-[#0D0A09]">
                {configGalerie.name}
              </p>
              <button
                className="font_inter mb-8 px-6 py-4 font-bold text-[#0D0A09]"
                onClick={() => handleCardClick(configGalerie)}
              >
                Ver mais
              </button>
            </div>
          )
        })}
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Modal
            card={selectedCard}
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
          />
        </div>
      )}
    </>
  )
}
