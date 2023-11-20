'use client'

import { ControlledMenu, MenuItem, useHover, useMenuState } from "@szhsin/react-menu";
import Link from "next/link"
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function MainMenu() {
  const men1ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true});
  const menu1hover = useHover(menuState.state, toggle);

  const men2ref = useRef(null);
  const [menuState2, toggle2] = useMenuState({ transition: true});
  const menu2hover = useHover(menuState2.state, toggle2);

  return (
    <ul className='flex gap-4 items-center'>
      <li><Link href="/">Nosotros</Link></li>
      <li><Link href="#">Equipo de trabajo</Link></li>
      <li><Link href="#">Noticias y eventos</Link></li>
      <li><Link href="#">Galerías</Link></li>
      <li>
        <div ref={men1ref} {...menu1hover.anchorProps}>Admisión {(new Date()).getFullYear() + 1}</div>
        <ControlledMenu
          {...menu1hover.hoverProps}
          {...menuState}
          position="auto"
          anchorRef={men1ref}
          onClose={() => toggle(false)}
        >
          <MenuItem><Link href="/">Proceso de admisión</Link></MenuItem>
          <MenuItem><Link href="/">Documentos</Link></MenuItem>
          <MenuItem><Link href="/">Requisitos</Link></MenuItem>
          <MenuItem><Link href="/">Costos y horarios</Link></MenuItem>
          <MenuItem><Link href="/">Matrícula oficial</Link></MenuItem>
        </ControlledMenu>
      </li>
      <li>
        <div ref={men2ref} {...menu2hover.anchorProps}>Laboratorios</div>
        <ControlledMenu
          {...menu2hover.hoverProps}
          {...menuState2}
          position="auto"
          anchorRef={men2ref}
          onClose={() => toggle2(false)}
        >
          <MenuItem><Link href="/">Personal docente altamente calificado</Link></MenuItem>
          <MenuItem><Link href="/">Laboratorio de Ciencias</Link></MenuItem>
          <MenuItem><Link href="/">Laboratorio De Practica de Oficina</Link></MenuItem>
          <MenuItem><Link href="/">Laboratorio de Informática</Link></MenuItem>
          <MenuItem><Link href="/">Orientación Psicopedagógica</Link></MenuItem>
          <MenuItem><Link href="/">Amplio Salón de Reuniones</Link></MenuItem>
          <MenuItem><Link href="/">Cafetería</Link></MenuItem>
          <MenuItem><Link href="/">Gimnasio bajo techo</Link></MenuItem>
          <MenuItem><Link href="/">Preescolar y Salones con Tv</Link></MenuItem>
          <MenuItem><Link href="/">Salón de Enfermería</Link></MenuItem>
          <MenuItem><Link href="/">Laboratorio de Contabilidad</Link></MenuItem>
          <MenuItem><Link href="/">Laboratorio Culinario</Link></MenuItem>
          <MenuItem><Link href="/">Laboratorio de Comercio</Link></MenuItem>
        </ControlledMenu>
      </li>
      <li><Link href="#">Contactenos</Link></li>
      <li><Link href="#" className='text-2xl'><FaWhatsapp /></Link></li>
    </ul>
  )
}
