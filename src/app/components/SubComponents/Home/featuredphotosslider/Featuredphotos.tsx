import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { featuredphotos } from '@/mock/featuredphotos'
import './styles.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

export default function Featuredphotos() {
  return (
    <div className="ml-20 mr-20 mt-24 flex h-screen flex-col justify-center space-y-10 max-md:mb-0 max-md:mt-16 max-md:text-center ">
      <h2
        data-aos="fade-right"
        data-aos-duration="1500"
        className="font-montserratAlternates text-5xl font-bold text-[#0D0A09] max-md:text-center max-cell:text-4xl"
      >
        Fotos em Destaque
      </h2>
      <Swiper
        data-aos="fade-down"
        data-aos-duration="1500"
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper !max-cell:w-full h-full"
      >
        {featuredphotos.map((IMG: any) => (
          <SwiperSlide key={IMG.dir} className=" ">
            <Image
              src={IMG.img}
              alt=""
              className="!h-[37rem] !w-[25rem] max-lg:!h-[25rem] max-lg:!w-[16rem]  max-md:!h-[21rem] max-md:!w-[14rem]  max-sm:!h-[18rem] max-sm:!w-[12rem] max-cellSliderDepositions:!h-full max-cellSliderDepositions:!w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
