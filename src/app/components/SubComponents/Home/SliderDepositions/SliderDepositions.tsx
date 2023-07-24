'use client'
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { depositions } from '@/mock/depositions'
import { Autoplay, Pagination } from 'swiper/modules'

export default function SliderDepositions() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        data-aos-duration="1500"
        data-aos="fade-up"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {depositions.map((depositions, Index) => (
          <SwiperSlide
            key={depositions.name}
            className="!z-0  cursor-grab !bg-transparent object-cover text-black"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="font_montserrat text-textColor mt-8 w-[1100px] text-center text-2xl max-lg:w-[850px] max-lg:text-base max-md:w-[630px] max-md:text-sm max-sm:w-[450px] max-sm:text-xs max-cellSliderDepositions:w-[300px]">
                {depositions.text}
              </p>
              <h3 className="font_montserrat text-textColor mt-6 text-3xl font-medium max-lg:text-2xl max-md:text-xl max-sm:text-base">
                {depositions.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
