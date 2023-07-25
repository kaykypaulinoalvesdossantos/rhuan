import foto from '@/../public/imgs/fotos/1.png'
import Image from 'next/image'
export default function Form() {
  return (
    <div className="flex items-center justify-center gap-24">
      <Image
        className="max-[768px]:hidden h-[46rem] w-[31rem] max-lg:h-[42rem] max-lg:w-[28rem]"
        src={foto}
        alt={''}
      />
      <form className="flex flex-col items-center justify-center space-y-7">
        <div className="space-y-7">
          <label
            htmlFor=""
            className="flex flex-col gap-4 text-4xl text-[#1C1107] max-sm:text-2xl"
          >
            {'Nome :'}
            <input
              type="text"
              className="mr-6 h-14 w-full rounded-2xl border-2 border-[#1c1107] bg-[#EADBCE] px-3 text-base"
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col gap-4 text-4xl text-[#1C1107] max-sm:text-2xl"
          >
            {'E-mail :'}
            <input
              type="text"
              className="h-14 w-full rounded-2xl border-2 border-[#1c1107] bg-[#EADBCE] px-3 text-base"
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col gap-4 text-4xl text-[#1C1107] max-sm:text-2xl"
          >
            {'Telefone :'}
            <input
              type="text"
              className="h-14 w-full rounded-2xl border-2 border-[#1c1107] bg-[#EADBCE] px-3 text-base max-lg:w-full"
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col gap-4 text-4xl text-[#1C1107] max-sm:text-2xl"
          >
            {'Deixe Uma Mensagem :'}
            <textarea
              maxLength={500}
              rows={7}
              cols={50}
              className="max-h-[18rem] w-full resize-none rounded-2xl border-2 border-[#1c1107] bg-[#EADBCE] px-3 text-base"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Enviar"
          className="cursor-pointer rounded-xl bg-[#1C1107] px-[3rem] py-[0.75rem] font-montserrat text-4xl text-[#FBF4EE] max-md:px-[2rem] max-md:text-xl max-sm:text-sm"
        />
      </form>
    </div>
  )
}
