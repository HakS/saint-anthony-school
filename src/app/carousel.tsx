'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { EffectCreative } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
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
      modules={[EffectCreative]}
      className="swiper-custom"
    >
      <SwiperSlide>
        <Image
          alt='Slide 1'
          src='/slides/s1.jpg'
          layout='fill'
          objectFit='cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt='Slide 2'
          src='/slides/s2.jpg'
          layout='fill'
          objectFit='cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt='Slide 3'
          src='/slides/s3.jpg'
          layout='fill'
          objectFit='cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt='Slide 4'
          src='/slides/s4.jpg'
          layout='fill'
          objectFit='cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt='Slide 5'
          src='/slides/s5.jpg'
          layout='fill'
          objectFit='cover'
        />
      </SwiperSlide>
    </Swiper>
  )
}
