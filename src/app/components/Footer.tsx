import Image from 'next/image'
import Facebook from '@/../public/imgs/Icons/facebook.png'
import Instagram from '@/../public/imgs/Icons/instagram.png'
import Whatsapp from '@/../public/imgs/Icons/whatsapp.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flx mt-24 w-full flex-col items-center justify-center bg-[#0D0A09] py-20 text-center ">
      <div className="mb-8 flex items-center justify-center space-x-14">
        <Link href={''} target="_blank">
          <Image src={Whatsapp} alt={''} className="w-12 max-md:w-8" />
        </Link>

        <Link href={'https://www.instagram.com/'} target="_blank">
          <Image src={Instagram} alt={''} className="w-12 max-md:w-8" />
        </Link>

        <Link href={'https://www.facebook.com/'} target="_blank">
          <Image src={Facebook} alt={''} className="w-12 max-md:w-8" />
        </Link>
      </div>
      <h2 className="font_montserrat font-bold text-white">
        @ 2023 Todos os Direitos Reservados
      </h2>
    </footer>
  )
}
