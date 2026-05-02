import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Sede {
  nombre: string;
  direccion: string;
  localidad: string;
  telefono: string;
  telefax?: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  titulo = 'Contacto';
  descripcion = 'Completa el formulario y contactate con nosotros:';

  sedes: Sede[] = [
    {
      nombre: 'AADIDESS - SEDE CENTRAL',
      direccion: 'Morales 483 PB (8400)',
      localidad: 'San Carlos de Bariloche',
      telefono: '(+54) 294 442-8789',
      telefax: '294 443-6072'
    },
    {
      nombre: 'ISES - SEDE CENTRAL BARILOCHE',
      direccion: 'Morales 483 PB (8400)',
      localidad: 'San Carlos de Bariloche',
      telefono: '(+54) 2944 428789'
    }
  ];

  // URL oficial generada por Google Maps con zoom ajustado (z=18)
  private readonly mapaUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.9655494707326!2d-71.31300212402718!3d-41.13655467133291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a886f9dea0175%3A0x434305b20994a0c2!2sAsociaci%C3%B3n%20Argentina%20de%20Instructores%20de%20Ski%20y%20Snowboard!5e0!3m2!1ses!2sar!4v1777757836465!5m2!1ses!2sar';
  mapaSeguro: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapaSeguro = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapaUrl);
  }
}
