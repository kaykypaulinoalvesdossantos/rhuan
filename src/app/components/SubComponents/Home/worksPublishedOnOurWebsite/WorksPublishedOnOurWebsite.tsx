import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import image1 from '@/../public/imgs/Nova pasta/image 13.png'
import image2 from '@/../public/imgs/Nova pasta/image 14.png'

export default function WorksPublishedOnOurWebsite() {
  return (
    <div className="my-24 flex flex-col items-center justify-center gap-10">
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        className="font-montserratAlternates text-5xl font-bold text-[#0D0A09] max-lg:text-3xl max-md:text-2xl max-sm:text-base"
      >
        TRABALHOS PUBLICADOS EM NOSSO SITE
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex max-w-[1000px] flex-wrap items-center justify-center gap-14 "
      >
        <div className="flex items-center justify-center  gap-6 rounded-xl p-6 shadow-modalShadow">
          <div className="flex items-center justify-center gap-4">
            <Image src={image1} alt={''} />
            <Image src={image2} alt={''} />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-sm text-[#0D0A09] max-sm:text-xs">
              23 DE AGOSTO DE 2022
            </span>
            <h3 className="font-Ingrid text-3xl text-[#0D0A09] max-sm:text-base">
              Arthur & Larissa
            </h3>
            <p className="w-[12rem] text-center text-xl font-bold text-[#0D0A09] max-sm:w-36 max-sm:text-base">
              Cerimônia ao ar livre com fogos de artifício em Goiânia: Isabella
            </p>
            <Link
              className="flex items-center text-xl font-light text-[#0D0A09] underline "
              href={'/galerie'}
            >
              Leia Mais <ChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center  gap-6 rounded-xl p-6 shadow-modalShadow">
          <div className="flex items-center justify-center gap-4">
            <Image src={image1} alt={''} />
            <Image src={image2} alt={''} />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-sm text-[#0D0A09] max-sm:text-xs">
              23 DE AGOSTO DE 2022
            </span>
            <h3 className="font-Ingrid text-3xl text-[#0D0A09] max-sm:text-base">
              Arthur & Larissa
            </h3>
            <p className="w-[12rem] text-center text-xl font-bold text-[#0D0A09] max-sm:w-36 max-sm:text-base">
              Cerimônia ao ar livre com fogos de artifício em Goiânia: Isabella
            </p>
            <Link
              className="flex items-center text-xl font-light text-[#0D0A09] underline "
              href={'/galerie'}
            >
              Leia Mais <ChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center  gap-6 rounded-xl p-6 shadow-modalShadow">
          <div className="flex items-center justify-center gap-4">
            <Image src={image1} alt={''} />
            <Image src={image2} alt={''} />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-sm text-[#0D0A09] max-sm:text-xs">
              23 DE AGOSTO DE 2022
            </span>
            <h3 className="font-Ingrid text-3xl text-[#0D0A09] max-sm:text-base">
              Arthur & Larissa
            </h3>
            <p className="w-[12rem] text-center text-xl font-bold text-[#0D0A09] max-sm:w-36 max-sm:text-base">
              Cerimônia ao ar livre com fogos de artifício em Goiânia: Isabella
            </p>
            <Link
              className="flex items-center text-xl font-light text-[#0D0A09] underline "
              href={'/galerie'}
            >
              Leia Mais <ChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center  gap-6 rounded-xl p-6 shadow-modalShadow">
          <div className="flex items-center justify-center gap-4">
            <Image src={image1} alt={''} />
            <Image src={image2} alt={''} />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-sm text-[#0D0A09] max-sm:text-xs">
              23 DE AGOSTO DE 2022
            </span>
            <h3 className="font-Ingrid text-3xl text-[#0D0A09] max-sm:text-base">
              Arthur & Larissa
            </h3>
            <p className="w-[12rem] text-center text-xl font-bold text-[#0D0A09] max-sm:w-36 max-sm:text-base">
              Cerimônia ao ar livre com fogos de artifício em Goiânia: Isabella
            </p>
            <Link
              className="flex items-center text-xl font-light text-[#0D0A09] underline "
              href={'/galerie'}
            >
              Leia Mais <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
