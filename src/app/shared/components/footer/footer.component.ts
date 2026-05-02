import { Component } from '@angular/core';

interface LogoInstitucion {
  imagen: string;
  alt: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  asociacion = 'Asociación Argentina de Instructores de Esquí, Snowboard y Pisteros Socorristas.';
  
  contactos = {
    titulo: 'CONTACTOS',
    sede: 'Sede Central',
    direccion: 'Morales 483 PB (8400)',
    localidad: 'San Carlos de Bariloche',
    telefonos: ['(+54) 294 442-8789', '294 443-6072']
  };

  logos: LogoInstitucion[] = [
    {
      imagen: 'images/logos/fips-logo.png',
      alt: 'FIPS',
      url: 'https://www.fips-skipatrol.org/'
    },
    {
      imagen: 'images/logos/interski-logo.png',
      alt: 'Interski International',
      url: 'https://www.interski.org/home.php'
    },
    {
      imagen: 'images/logos/ivsi-logo.png',
      alt: 'IVSI',
      url: 'https://ivsi.info'
    },
    {
      imagen: 'svgs/isia-logo.svg',
      alt: 'ISIA',
      url: 'https://isia.ski/'
    }
  ];

  abrirEnlace(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}