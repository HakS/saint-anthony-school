import Image from 'next/image'
import Hero from './hero'
import MainMenu from './main-menu';
import SimpleCTA from './simple-cta';
import Testimonials from './testimonials';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaAtom, FaBookBookmark, FaMoneyBillTransfer, FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import Link from 'next/link';
import Button from './button';
import Slider from './slider';

export default function Home() {
  const formItemStyles = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
  const counterStyles = "bg-white text-purple-800 p-6 rounded-2xl w-full text-center flex flex-col gap-2 justify-center";

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section id="main-nav" className="absolute z-10 w-full">
        <nav className='max-w-screen-xl mx-auto flex justify-between py-2 px-5 lg:p-5 text-white'>
          <Image src="/logo.png" alt="Saint Anthony School" width={69} height={75} className='w-11 h-18 lg:w-auto lg:h-auto' priority />
          <MainMenu />
        </nav>
      </section>
      <Hero />
      <section className='max-w-screen-xl w-full mx-auto px-5 py-20 flex flex-col md:grid grid-cols-2 grid-flow-col gap-4'>
        <SimpleCTA
          header={"Sabiduría, Honestidad, Progreso"}
          body={"Juicio sano basado en conocimiento y entendimiento; la aptitud de valerse del conocimiento con éxito, y el don para resolver problemas, evitar o impedir peligros, alcanzar todas las metas y aconsejar a otros."}
          cta={"Conozca de nosotros"}
        />
        <div className="relative w-full h-48 md:w-auto -order-1 md:order-1 md:h-auto mb-5">
          <Image src="/aboutus.jpeg" alt="Sobre nosotros" layout='fill' objectFit='cover' className='shadow-2xl' />
        </div>
      </section>
      <section className='max-w-screen-xl w-full mx-auto px-5 pt-4 pb-20'>
        <Slider />
      </section>
      <section className="w-full bg-slate-100 pt-20">
        <div className="max-w-screen-xl w-full mx-auto px-5 flex flex-col gap-5">
          <div className="text-4xl font-bold w-full text-center mb-5">Testimonios</div>
          <Testimonials />
        </div>
      </section>
      <section className="w-full bg-purple-800 py-20 text-white relative">
        <Image src={'/slides/s0.jpeg'} alt="" layout='fill' objectFit='cover' className="absolute w-100 h-100 opacity-20" />
        <div className="max-w-screen-xl w-full mx-auto px-5 flex flex-col gap-5 relative z-10">
          <div className="text-4xl font-bold w-full text-center mb-5">Nuestra experiencia en números</div>
          <div className="w-full grid grid-cols-2 lg:flex gap-6">
            <div className={`${counterStyles}`}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+200</div>
              <div className="text-lg">Estudiantes graduados</div>
            </div>
            <div className={`${counterStyles}`}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+400</div>
              <div className="text-lg">Padres felices</div>
            </div>
            <div className={`${counterStyles}`}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+30</div>
              <div className="text-lg">Actividades</div>
            </div>
            <div className={`${counterStyles}`}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+40</div>
              <div className="text-lg">Paseos culturales</div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl w-full mx-auto px-5 flex gap-6 py-20 flex-wrap md:flex-nowrap">
        <div className="shadow-xl border rounded border-slate-100 bg-white w-full md:w-1/2 lg:w-1/3">
          <div className="text-xl font-bold w-full p-5 mb-5 text-white bg-amber-500">¡Matricúlate yá!</div>
          <div className="grid grid-cols-1 gap-6 p-5 text-gray-700">
            <label className="block">
              <span>Nombres</span>
              <input
                type="text"
                className={`${formItemStyles}`}
                placeholder=""
              />
            </label>
            <label className="block">
              <span>Apellidos</span>
              <input
                type="text"
                className={`${formItemStyles}`}
                placeholder=""
              />
            </label>
            <label className="block">
              <span>Año escolar</span>
              <input
                type="number"
                className={`${formItemStyles}`}
                placeholder=""
              />
            </label>
            <label className="block">
              <span>Correo electrónico</span>
              <input
                type="email"
                className={`${formItemStyles}`}
                placeholder="juan.perez@ejemplo.com"
              />
            </label>
            <label className="block mb-4">
              <span>Teléfono</span>
              <input
                type="tel"
                multiple
                className={`${formItemStyles}`}
                placeholder="1234567 / 61234567"
              />
            </label>
            <Button text="Matricularme" />
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-2/3'>
          <div className="text-3xl font-bold w-full mb-5">Se tú, se exitoso</div>
          <div className="flex flex-wrap sm:grid grid-cols-2 grid-flow-row gap-6">
            <div className='flex flex-col gap-5'>
              <FaAtom className="w-20 h-20 bg-purple-800 text-white p-4 rounded-full shadow-md" />
              <div className="text-xl font-bold">Bachiller en Ciencias</div>
              <div>Sed aliquam ultrices mauris. Etiam vitae tortor. Donec vitae orci sed dolor rutrum auctor. Sed cursus turpis vitae tortor. Phasellus consectetuer vestibulum elit. Donec vitae orci sed dolor rutrum auctor.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <FaMoneyBillTransfer className="w-20 h-20 bg-purple-800 text-white p-4 rounded-full shadow-md" />
              <div className="text-xl font-bold">Bachiller en Comercio</div>
              <div>Sed aliquam ultrices mauris. Etiam vitae tortor. Donec vitae orci sed dolor rutrum auctor. Sed cursus turpis vitae tortor. Phasellus consectetuer vestibulum elit. Donec vitae orci sed dolor rutrum auctor.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <BiWorld className="w-20 h-20 bg-purple-800 text-white p-4 rounded-full shadow-md" />
              <div className="text-xl font-bold">Bachiller en Turismo</div>
              <div>Sed aliquam ultrices mauris. Etiam vitae tortor. Donec vitae orci sed dolor rutrum auctor. Sed cursus turpis vitae tortor. Phasellus consectetuer vestibulum elit. Donec vitae orci sed dolor rutrum auctor.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <FaBookBookmark className="w-20 h-20 bg-purple-800 text-white p-4 rounded-full shadow-md" />
              <div className="text-xl font-bold">Bachiller en Letras</div>
              <div>Sed aliquam ultrices mauris. Etiam vitae tortor. Donec vitae orci sed dolor rutrum auctor. Sed cursus turpis vitae tortor. Phasellus consectetuer vestibulum elit. Donec vitae orci sed dolor rutrum auctor.</div>
            </div>
          </div>
        </div>
      </section>
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
