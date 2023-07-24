import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ContactMain from '@/app/components/SubComponents/Contact/Contact'
import Form from '../components/SubComponents/Contact/Form'

export default function Contact() {
  return (
    <>
      <NavBar />
      <main className="space-y-40">
        <ContactMain />
        <Form />
      </main>
      <Footer />
    </>
  )
}
