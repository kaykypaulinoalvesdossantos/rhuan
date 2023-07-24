import Link from 'next/link'

export default function ComponentsDepositions() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center">
      <Link
        data-aos-duration="1500"
        data-aos="fade-up"
        className="rounded-xl bg-[#1C1107] px-[3rem] py-[1rem] font-montserrat text-2xl font-bold text-[#FBF4EE] max-md:px-[2rem] max-md:text-xl max-sm:text-sm"
        href={'/galerie'}
      >
        Veja Os Casamentos
      </Link>
    </div>
  )
}
