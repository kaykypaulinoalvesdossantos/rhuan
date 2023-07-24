import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './styles.css'
import { featuredphotos } from '@/mock/featuredphotos'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

export default function Featuredphotos() {
  return (
    <div className="ml-20 mr-20 mt-24 flex h-screen flex-col justify-center space-y-10 max-md:my-0 max-md:text-center">
      <h2
        data-aos="fade-right"
        data-aos-duration="1500"
        className="font-montserratAlternates text-5xl font-bold text-[#0D0A09]"
      >
        Fotos em Destaque
      </h2>
      <Swiper
        data-aos="fade-down"
        data-aos-duration="1500"
        slidesPerView={2}
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper h-full"
      >
        {featuredphotos.map((IMG: any) => (
          <SwiperSlide key={IMG.dir} className=" ">
            <Image
              src={IMG.img}
              alt=""
              className="!h-[37rem] !w-[25rem] max-lg:!h-[25rem] max-lg:!w-[16rem]  max-md:!h-[21rem] max-md:!w-[14rem]  max-sm:!h-[18rem] max-sm:!w-[12rem] max-cellSliderDepositions:!h-[12rem] max-cellSliderDepositions:!w-[8rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
