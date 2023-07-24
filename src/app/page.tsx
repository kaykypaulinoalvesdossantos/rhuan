'use client'
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Presentation from './components/SubComponents/Home/Presentation'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from './components/SubComponents/Home/About'
import SliderDepositions from './components/SubComponents/Home/SliderDepositions/SliderDepositions'
import ComponentsDepositions from './components/SubComponents/Home/SliderDepositions/ComponentsDepositions'
import WorksPublishedOnOurWebsite from './components/SubComponents/Home/worksPublishedOnOurWebsite/WorksPublishedOnOurWebsite'
import Footer from './components/Footer'
import Featuredphotos from './components/SubComponents/Home/featuredphotosslider/Featuredphotos'

export default function Home() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <NavBar />
      <Presentation />
      <About />
      <Featuredphotos />
      <SliderDepositions />
      <ComponentsDepositions />
      <WorksPublishedOnOurWebsite />
      <Footer />
    </>
  )
}
