'use client'

import Image from 'next/image';
import Button from './button';

export default function Hero() {
  const formItemStyles = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";

  return (
    <div className="w-full">
      <div className="swiper-custom">
        <Image
          alt='Slide 0'
          src='/slides/s0.jpeg'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
          <div className="max-w-screen-xl h-full w-full">
            <div className="h-full w-full md:w-1/2 flex flex-col justify-center p-10 drop-shadow-md text-white bg-purple-800 bg-opacity-40">
              <div className="text-4xl font-bold w-full mb-5 text-white">¡Matricúlate yá!</div>
              <div className="grid grid-cols-1 gap-6 text-white">
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
          </div>
        </div>
      </div>
    </div>
  )
}
