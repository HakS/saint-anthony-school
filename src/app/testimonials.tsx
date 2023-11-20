'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from 'next/image';

function Testimonial({type, name, imgdir, testimonial} : {type : "student" | "teacher", name: string, imgdir: string, testimonial: string}) {
  return (
    <div className="shadow-2xl bg-white mb-20 overflow-hidden">
      <RiDoubleQuotesL className={`text-3xl mt-5 mx-5 ${type == 'student' ? 'text-amber-500' : 'text-purple-800'}`} />
      <div className="p-5 pb-16">{testimonial}</div>
      <div className={`${type == 'student' ? 'bg-amber-500' : 'bg-purple-800'} pt-20 text-center text-white relative`}>
        <div className="absolute -top-10 w-full flex justify-center">
          <Image alt={""} src={imgdir} width={100} height={100} className="rounded-full border-2 shadow-md" />
        </div>
        <div className="text-xl font-bold pb-2">{name}</div>
        <div className="text-lg capitalize pb-8">{type == 'student' ? "Estudiante" : "Profesor"}</div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        grabCursor={true}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Testimonial
            type="student"
            name="Juan Perez"
            imgdir="/profile-pics/student1.jpeg"
            testimonial='Praesent ac massa at ligula laoreet iaculis. Proin magna. Praesent vestibulum dapibus nibh. Suspendisse eu ligula. Fusce vulputate eleifend sapien. Fusce fermentum odio nec arcu. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Phasellus magna. Fusce vel dui. Duis lobortis massa imperdiet quam. Maecenas malesuada. Etiam ultricies nisi vel augue. Aenean imperdiet. Praesent vestibulum dapibus nibh. Phasellus consectetuer vestibulum elit.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            type="teacher"
            name="Alberto Zambrano"
            imgdir="/profile-pics/teacher1.jpeg"
            testimonial='Iaculis. Proin magna. Praesent vestibulum dapibus nibh. Suspendisse eu ligula. Fusce vulputate eleifend sapien. Fusce fermentum odio nec arcu. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Phasellus magna. Fusce vel dui. Duis lobortis massa imperdiet quam. Maecenas malesuada. Etiam ultricies nisi vel augue. Aenean imperdiet. Praesent vestibulum dapibus nibh. Phasellus consectetuer vestibulum elit.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            type="student"
            name="Elizabeth Rodriguez"
            imgdir="/profile-pics/student2.jpeg"
            testimonial='Praesent ac massa at ligula laoreet iaculis. Proin magna. Praesent vestibulum dapibus nibh. Suspendisse eu ligula. Fusce vulputate eleifend sapien. Fusce fermentum odio nec arcu. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Phasellus magna. Fusce vel dui. Duis lobortis massa imperdiet quam. Maecenas malesuada. Etiam ultricies nisi vel augue. Aenean imperdiet. Praesent vestibulum dapibus nibh. Phasellus consectetuer vestibulum elit.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            type="teacher"
            name="Irene Duran"
            imgdir="/profile-pics/teacher2.jpeg"
            testimonial='Praesent vestibulum dapibus nibh. Suspendisse eu ligula. Fusce vulputate eleifend sapien. Fusce fermentum odio nec arcu. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Phasellus magna. Fusce vel dui. Duis lobortis massa imperdiet quam. Maecenas malesuada. Etiam ultricies nisi vel augue. Aenean imperdiet. Praesent vestibulum dapibus nibh. Phasellus consectetuer vestibulum elit.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
