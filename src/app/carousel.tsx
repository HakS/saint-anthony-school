'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import SimpleCTA from './simple-cta';
import Button from './button';

function SliderInfo(props: {text: string}) {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center z-10'>
      <div className="max-w-screen-xl h-full w-full">
        <div className="h-full w-full md:w-1/2 flex items-center p-10 text-5xl drop-shadow-md font-bold text-white">
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default function Carousel() {
  const formItemStyles = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";

  return (
    <div className="w-full">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        // }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="swiper-custom"
      >
        <SwiperSlide>
          <Image
            alt='Slide 0'
            src='/slides/s0.jpeg'
            layout='fill'
            objectFit='cover'
          />
          <div className='absolute top-0 left-0 w-full h-full flex justify-center z-10'>
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
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Slide 1'
            src='/slides/s1.jpg'
            layout='fill'
            objectFit='cover'
          />
          <SliderInfo text={"Gobierno estudiantil 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Slide 2'
            src='/slides/s2.jpg'
            layout='fill'
            objectFit='cover'
          />
          <SliderInfo text={"Limpieza de playa - servicio comunitario"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Slide 3'
            src='/slides/s3.jpg'
            layout='fill'
            objectFit='cover'
          />
          <SliderInfo text={"Olimpiadas de matemáticas 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Slide 4'
            src='/slides/s4.jpg'
            layout='fill'
            objectFit='cover'
          />
          <SliderInfo text={"Gira estudiantil - Nike Eco League"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Slide 5'
            src='/slides/s5.jpg'
            layout='fill'
            objectFit='cover'
          />
          <SliderInfo text={"Carnavalitos 2023"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
