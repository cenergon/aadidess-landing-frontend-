import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

interface Servicio {
  titulo: string;
  descripcion: string;
  textoBoton: string;
  link: string;
  colorVar: string;
  iconoLight: string;   // icono para modo claro
  iconoDark: string;     // icono para modo oscuro
}

@Component({
  selector: 'app-info-servicios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './info-servicios.component.html',
  styleUrls: ['./info-servicios.component.scss']
})
export class InfoServiciosComponent implements OnInit, OnDestroy {
  // Tema actual detectado
  modoOscuro = signal(false);

  // Referencia al documento para leer el atributo inicial
  private document: Document = inject(DOCUMENT);

  servicios: Servicio[] = [
    {
      titulo: 'Nosotros',
      descripcion: 'AADIDESS, fundada en 1972, es la institución formadora de profesionales de la montaña.',
      textoBoton: 'VER INFO INSTITUCIONAL',
      link: '/institucional/autoridades',
      colorVar: '--color-accent',
      iconoLight: 'svgs/logo-aadidess.svg',        // color
      iconoDark: 'svgs/aadidess-logo-blanco.svg'   // blanco
    },
    {
      titulo: 'Oferta Educativa',
      descripcion: 'Te brindamos certificaciones oficiales en distintas disciplinas para que puedas formarte y trabajar en la montaña.',
      textoBoton: 'VER NUESTROS CURSOS',
      link: '/academico/cursos',
      colorVar: '--color-cursos',
      iconoLight: 'svgs/cursos-color.svg',
      iconoDark: 'svgs/cursos-aadidess-logo-01.svg'
    },
    {
      titulo: 'Equipo Argentino de Demostradores',
      descripcion: 'El Argentina Demo Team es el equipo que representa al país en congresos y eventos nacionales e internacionales, como el Interski.',
      textoBoton: 'VER INFO DEL EQUIPO',
      link: '/demo-team',
      colorVar: '--color-demo-team',
      iconoLight: 'svgs/demo-team-color.svg',
      iconoDark: 'svgs/demo-team-logo.svg'
    },
    {
      titulo: 'Seguridad en la Montaña',
      descripcion: 'Conocé la carrera de Pistero Socorrista y cómo es dictada en AADIDESS, a cargo de profesionales expertos en la materia.',
      textoBoton: 'VER CARRERA DE P. S.',
      link: '/pisteros-socorristas',
      colorVar: '--color-pisteros',
      iconoLight: 'svgs/pistero-color.svg',
      iconoDark: 'svgs/pisteros-socorristas-01.svg'
    }
  ];

  // Devuelve la ruta correcta del icono según el tema
  getIconoSrc(servicio: Servicio): string {
    return this.modoOscuro() ? servicio.iconoDark : servicio.iconoLight;
  }

  private themeChangeHandler?: EventListener;

  ngOnInit(): void {
    // Leer el tema inicial
    this.actualizarModoOscuro();

    // Escuchar cambios de tema emitidos por el toggle
    this.themeChangeHandler = () => this.actualizarModoOscuro();
    window.addEventListener('theme-changed', this.themeChangeHandler);
  }

  ngOnDestroy(): void {
    if (this.themeChangeHandler) {
      window.removeEventListener('theme-changed', this.themeChangeHandler);
    }
  }

  private actualizarModoOscuro(): void {
    const theme = this.document.documentElement.getAttribute('data-theme');
    this.modoOscuro.set(theme === 'dark');
  }
}