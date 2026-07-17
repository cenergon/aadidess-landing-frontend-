import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Sponsor {
  nombre: string;
  link: string;
  logoLight: string; // ruta para modo claro
  logoDark?: string; // si no se define, usa logoLight en ambos
}

@Component({
  selector: 'app-sponsors',
  standalone: true,
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit, OnDestroy {
  modoOscuro = signal(false);
  private document = inject(DOCUMENT);
  private themeChangeHandler?: EventListener;

  sponsors: Sponsor[] = [
    {
      nombre: 'Macro',
      link: 'https://www.macro.com.ar',
      logoLight: 'images/logos/macro-azul.png',
      logoDark: 'images/logos/macro-blanco.png',
    },
    {
      nombre: 'Marca País Argentina',
      link: 'https://www.argentina.gob.ar/marca-pais',
      logoLight: 'svgs/marca-pais-argentina.svg',
    },
    {
      nombre: 'Hub Travel',
      link: 'https://hubtravel.com.ar',
      logoLight: 'images/logos/hub-travel.png',
    },
    {
      nombre: 'Catedral Alta Patagonia',
      link: 'https://catedralaltapatagonia.com',
      logoLight: 'images/logos/catedral-logo.png',
    },
  ];

  getLogoSrc(sponsor: Sponsor): string {
    if (this.modoOscuro() && sponsor.logoDark) {
      return sponsor.logoDark;
    }
    return sponsor.logoLight;
  }

  ngOnInit(): void {
    this.actualizarModo();
    this.themeChangeHandler = () => this.actualizarModo();
    window.addEventListener('theme-changed', this.themeChangeHandler);
  }

  ngOnDestroy(): void {
    if (this.themeChangeHandler) {
      window.removeEventListener('theme-changed', this.themeChangeHandler);
    }
  }

  private actualizarModo(): void {
    const theme = this.document.documentElement.getAttribute('data-theme');
    this.modoOscuro.set(theme === 'dark');
  }
}
