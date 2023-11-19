import Image from 'next/image'
import Link from 'next/link'
import Carousel from './carousel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div id="main-nav" className="absolute z-10 w-full">
        <nav className='max-w-screen-xl mx-auto flex justify-between p-5 items-center text-white'>
          <Image src="/logo.png" alt="Saint Anthony School" width={100} height={148} priority />
          <ul className='flex gap-4'>
            <li><Link href="#" />Nosotros</li>
            <li><Link href="#" />Equipo de trabajo</li>
            <li><Link href="#" />Noticias y eventos</li>
            <li><Link href="#" />Galerías</li>
            <li><Link href="#" />Admisión {(new Date()).getFullYear() + 1}</li>
            <li><Link href="#" />Laboratorios</li>
            <li><Link href="#" />Contactenos</li>
          </ul>
        </nav>
      </div>
      <div className='w-full'>
        <Carousel />
      </div>
    </main>
  )
}
