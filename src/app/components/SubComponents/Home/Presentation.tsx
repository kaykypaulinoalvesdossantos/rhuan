import Image from 'next/image'
import primaryImg from '@/../public/imgs/DSC_3958.png'
import primaryImgBlack from '@/../public/imgs/DSC_3958pretoebranco.png'
export default function Presentation() {
  return (
    <div className="m-28 flex h-full items-center justify-around max-md:m-0 max-md:h-screen">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="text-start max-md:text-center"
      >
        <h1 className="font-montserrat text-8xl font-bold text-[#0D0A09] max-lg:text-7xl max-sm:text-8xl max-[350px]:text-7xl">
          RHUAN
        </h1>
        <p className="font-montserratAlternates text-4xl font-normal">
          Fotos & Filmes
        </p>
      </div>
      <div className="relative max-md:hidden ">
        <Image
          src={primaryImg}
          alt=""
          data-aos="fade-down"
          data-aos-duration="1500"
          className="h-[35rem] w-[26rem] max-lg:h-[29rem] max-lg:w-[21rem] max-md:h-[20rem] max-md:w-[15rem]"
        />
        <div className="absolute right-[-3rem] top-[-20px] -z-10 ">
          <Image
            src={primaryImgBlack}
            alt=""
            data-aos="fade-up"
            data-aos-duration="2000"
            className="h-[39rem] w-[26rem] max-lg:h-[35rem] max-lg:w-[23rem] max-md:right-[-4rem] max-md:h-[28rem] max-md:w-[18rem]"
          />
        </div>
        <div
          className="absolute right-[-4.25rem] top-[-2.50rem] -z-20 h-[430px] w-[250px] bg-[#1C1107] max-md:right-[-5.25rem]"
          data-aos="fade-left"
          data-aos-duration="2500"
        />
      </div>
    </div>
  )
}
