import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LogoInstitucion {
  imagen: string;
  alt: string;
  url: string;
}

interface EnlaceFooter {
  label: string;
  link: string;
}

interface GrupoFooter {
  titulo: string;
  links: EnlaceFooter[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  asociacion = 'Asociación Argentina de Instructores de Esquí, Snowboard y Pisteros Socorristas.';

  contactos = {
    titulo: 'Contactos',
    sede: 'Sede Central',
    direccion: 'Morales 483 PB (8400)',
    localidad: 'San Carlos de Bariloche',
    telefonos: ['(+54) 294 442-8789', '294 443-6072'],
  };

  navegacion: GrupoFooter[] = [
    {
      titulo: 'Institucional',
      links: [
        { label: 'Autoridades', link: '/institucional/autoridades' },
        { label: 'Estatuto', link: '/institucional/estatuto' },
        { label: 'Escuelas y Clubes', link: '/institucional/escuelas-clubes' },
        { label: 'Sponsors', link: '/institucional/sponsors' },
      ],
    },
    {
      titulo: 'Académico',
      links: [
        { label: 'Cursos', link: '/academico/cursos' },
        { label: 'Calendario', link: '/academico/calendario' },
        { label: 'Delegaciones', link: '/academico/delegaciones' },
        { label: 'Preguntas Frecuentes', link: '/academico/FAQ' },
      ],
    },
    {
      titulo: 'Socios',
      links: [
        { label: '¿Por qué ser socio?', link: '/socios/por-que-ser-socio' },
        { label: 'Convenios y Beneficios', link: '/socios/convenios-y-beneficios' },
        { label: 'Bolsa de Trabajo', link: '/socios/bolsa-de-trabajo' },
        { label: 'Aranceles', link: '/aranceles-y-formas-de-pago/aranceles' },
      ],
    },
  ];

  logos: LogoInstitucion[] = [
    {
      imagen: 'images/logos/fips-logo.png',
      alt: 'FIPS',
      url: 'https://www.fips-skipatrol.org/',
    },
    {
      imagen: 'images/logos/interski-logo.png',
      alt: 'Interski International',
      url: 'https://www.interski.org/home.php',
    },
    {
      imagen: 'images/logos/ivsi-logo.png',
      alt: 'IVSI',
      url: 'https://ivsi.info',
    },
    {
      imagen: 'svgs/isia-logo.svg',
      alt: 'ISIA',
      url: 'https://isia.ski/',
    },
  ];

  abrirEnlace(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
