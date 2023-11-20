import Image from 'next/image'
import Carousel from './carousel'
import MainMenu from './main-menu';
import SimpleCTA from './simple-cta';
import Testimonials from './testimonials';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div id="main-nav" className="absolute z-10 w-full">
        <nav className='max-w-screen-xl mx-auto flex justify-between p-5 items-center text-white'>
          <Image src="/logo.png" alt="Saint Anthony School" width={69} height={75} priority />
          <MainMenu />
        </nav>
      </div>
      <Carousel />
      <div className='max-w-screen-xl w-full mx-auto px-5 py-20 grid grid-cols-2 grid-flow-col gap-4'>
        <SimpleCTA
          header={"Sabiduría, Honestidad, Progreso"}
          body={"Juicio sano basado en conocimiento y entendimiento; la aptitud de valerse del conocimiento con éxito, y el don para resolver problemas, evitar o impedir peligros, alcanzar todas las metas y aconsejar a otros."}
          cta={"Conozca de nosotros"}
        />
        <div className="relative">
          <Image src="/aboutus.jpeg" alt="Sobre nosotros" layout='fill' objectFit='cover' className='shadow-2xl' />
        </div>
      </div>
      <div className="w-full bg-slate-200 py-20">
        <div className="max-w-screen-xl w-full mx-auto px-5 flex flex-col gap-5">
          <div className="text-4xl font-bold w-full text-center mb-5">Testimonios</div>
          <Testimonials />
        </div>
      </div>
      <div className="w-full bg-purple-800 py-10">
        <div className="max-w-screen-xl w-full mx-auto px-5 flex justify-between items-center">
          <Image src="/logo.png" alt="Saint Anthony School" width={69} height={75} />
          <div className='flex gap-8 text-white items-center'>
            <div className="text-sm text-right">
              <div className="flex gap-4 text-3xl w-full justify-end">
                <Link href="/">
                  <FaFacebook />
                </Link>
                <Link href="/">
                  <FaInstagram />
                </Link>
                <Link href="/">
                  <FaXTwitter />
                </Link>
                <Link href="/">
                  <FaWhatsapp />
                </Link>
              </div>
              <div className="text-xl font-bold mb-3 mt-8">Contactenos</div>
              <div className="flex items-center gap-2 justify-end">
                <FaPhone /> Teléfono: <a href="tel: +507 239 3909">+507 239 3909</a>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <MdMail /> Email: <a href="mailto: info@saintanthonyschool.edu.pa">info@saintanthonyschool.edu.pa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
