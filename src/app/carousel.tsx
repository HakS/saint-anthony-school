'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import SimpleCTA from './simple-cta';

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
  return (
    <div className="w-full">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
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
                <SimpleCTA
                  header={"Bienvenidos"}
                  body={"Encabezado atractivo que resuma la esencia de la escuela. Breve mensaje de bienvenida destacando la amabilidad, la creatividad y la confianza en el ambiente educativo. Creatividad y Enfoque en Inglés"}
                  cta={"Lea más"}
                />
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
