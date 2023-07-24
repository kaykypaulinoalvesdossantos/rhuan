import Image from 'next/image'
import primaryImg from '@/../public/imgs/DSC_3834.png'
import primaryImgBlack from '@/../public/imgs/fundo.png'
import Link from 'next/link'
export default function About() {
  return (
    <div className="relative flex h-screen flex-col justify-center space-y-14 bg-[#D9BEA7]">
      <div className="ml-[12rem] max-lg:ml-[9rem] max-md:ml-[0rem] max-md:text-center">
        <h2
          className="font-montserratAlternates text-5xl text-[#0D0A09]"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          Sobre
        </h2>
        <h1
          className="pl-[4.25rem] font-montserrat text-7xl font-bold text-[#0D0A09] max-md:pl-0"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          RHUAN
        </h1>
      </div>
      <div className="flex items-center justify-around">
        <div className="relative z-10 max-md:hidden ">
          <Image
            src={primaryImg}
            alt=""
            data-aos="fade-down"
            data-aos-duration="1500"
            className=" !z-0 h-[35rem] w-[20rem] shadow-lightShadow max-lg:h-[29rem] max-lg:w-[21rem] max-md:h-[20rem] max-md:w-[15rem]"
          />
          <div className="absolute left-[-3rem] top-[-20px] -z-10 ">
            <Image
              src={primaryImgBlack}
              alt=""
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" -z-20 h-[39rem] w-[22rem] max-lg:h-[35rem] max-lg:w-[23rem] max-md:left-[-4rem] max-md:h-[28rem] max-md:w-[18rem] "
            />
          </div>
          <div
            className="absolute left-[-4.25rem] top-[-2.50rem] -z-30 h-[18rem] w-[12rem] bg-[#553315] max-md:left-[-5.25rem]"
            data-aos="fade-left"
            data-aos-duration="2500"
          />
        </div>
        <div className="space-y-12">
          <p
            className="w-[40rem] text-center text-2xl text-[#0D0A09] max-xl:w-[35rem] max-lg:w-[28rem] max-md:w-[18rem] max-md:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex items-center justify-around">
            <Link
              className="rounded-xl bg-[#DAA520] px-[3rem] py-[1rem] font-montserrat text-2xl font-bold text-[#FBF4EE] max-md:px-[2rem] max-md:text-xl max-sm:text-sm"
              data-aos="fade-left"
              data-aos-duration="500"
              href={'/'}
            >
              Contato
            </Link>
            <Link
              className="rounded-xl bg-[#DAA520] px-[3rem] py-[1rem] font-montserrat text-2xl font-bold text-[#FBF4EE] max-md:px-[2rem] max-md:text-xl max-sm:text-sm"
              data-aos="fade-right"
              data-aos-duration="500"
              href={'/'}
            >
              Galeria
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
