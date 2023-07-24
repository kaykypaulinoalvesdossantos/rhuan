import Image from 'next/image'

import { Key } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SliderGalerie({ images }: any) {
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper h-full !w-[300px]"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images.map((item: any, index: Key | null | undefined) => (
        <SwiperSlide key={index} className=" !bg-transparent">
          <Image
            src={item.img}
            alt={''}
            className=" h-[300px] w-[300px] cursor-grab rounded-3xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
