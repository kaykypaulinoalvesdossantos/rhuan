import Image from 'next/image'
import Link from 'next/link'
import whats from '@/../public/imgs/Icons/whatsapp-contact.png'
import email from '@/../public/imgs/Icons/email-contact.png'
import face from '@/../public/imgs/Icons/Facebook-contact.png'
import insta from '@/../public/imgs/Icons/insta-contact.png'
import foto from '@/../public/imgs/fotos/2.png'
export default function Contact() {
  return (
    <div className="mt-36 flex items-center justify-center gap-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-7 font-montserratAlternates text-5xl text-[#0D0A09] max-md:text-4xl">
          Contato
        </h2>
        <h1 className="mb-2 font-montserrat text-4xl text-[#0D0A09]">RHUAN</h1>
        <p className="mb-12 font-montserratAlternates text-3xl text-[#0D0A09] ">
          Fotos & Filmes
        </p>
        <span className="mb-12 h-[2px] w-[600px] bg-[#1C1107] max-md:w-[31rem] max-sm:w-[25rem]"></span>
        <Link
          href={''}
          className="mb-4 flex items-center space-x-2 rounded-xl bg-[#0D9F16] px-4 py-2 font-montserratAlternates text-4xl text-[#FBF8F5] max-md:text-3xl max-cell:text-2xl"
        >
          <Image
            src={whats}
            alt={''}
            className="max-md:h-[3rem] max-md:w-[3rem] max-cell:h-8 max-cell:w-8"
          />
          (11) 9 1234-5678
        </Link>
        <Link
          href={''}
          className="mb-4 flex items-center space-x-2 rounded-xl  bg-[#E57069] px-4  py-2 font-montserratAlternates text-4xl text-[#FBF8F5] max-md:text-3xl max-cell:text-2xl"
        >
          <Image
            src={email}
            alt={''}
            className="max-md:h-[3rem] max-md:w-[3rem] max-cell:h-8 max-cell:w-8"
          />
          Contato@contato.com.br
        </Link>
        <Link
          href={''}
          className="mb-4 flex items-center space-x-2  rounded-xl bg-gradient-linear-insta px-4 py-2 font-montserratAlternates text-4xl text-[#FBF8F5] max-md:text-3xl max-cell:text-2xl"
        >
          <Image
            src={face}
            alt={''}
            className="max-md:h-[3rem] max-md:w-[3rem] max-cell:h-8 max-cell:w-8"
          />
          <Image
            src={insta}
            alt={''}
            className="max-md:h-[3rem] max-md:w-[3rem] max-cell:h-8 max-cell:w-8"
          />
          @RHUAN
        </Link>
      </div>
      <Image
        className="h-[46rem] w-[31rem] max-lg:h-[42rem] max-lg:w-[28rem] max-md:hidden"
        src={foto}
        alt={''}
      />
    </div>
  )
}
