import { Component, signal, OnInit } from '@angular/core';

interface Sponsor {
  imagen: string;
  alt: string;
  height?: number;
  escala?: number;
  imagenDark?: string;
}

@Component({
  selector: 'app-sponsor-bar',
  standalone: true,
  templateUrl: './sponsor-bar.component.html',
  styleUrls: ['./sponsor-bar.component.scss']
})
export class SponsorBarComponent implements OnInit {
  sponsor: Sponsor[] = [
    { imagen: 'images/sponsor/macro2.svg', alt: 'Macro', imagenDark: 'svgs/macro-blanco.svg' },
    { imagen: 'images/sponsor/marcapais2.svg', alt: 'Argentina', height: 60, escala: 1.8 },
    { imagen: 'images/sponsor/turkish2.svg', alt: 'Turkish Airlines', imagenDark: 'images/sponsor/turkish-blanco.svg'},
    { imagen: 'images/sponsor/thonet2.svg', alt: 'Thonet' },
    { imagen: 'images/sponsor/hubtravel2.png', alt: 'Hub travel', height: 29, escala: 1.8 },
    { imagen: 'images/sponsor/vola2.png', alt: 'Vola' },
    { imagen: 'images/sponsor/oakley2.png', alt: 'Oakley' },
    { imagen: 'images/sponsor/catedral2.png', alt: 'Catedral' }
  ];

  private currentTheme = signal<'light' | 'dark'>('light');

  ngOnInit(): void {
    // Leer el atributo data-theme del <html> al iniciar
    const initial = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
    if (initial === 'dark' || initial === 'light') {
      this.currentTheme.set(initial);
    }

    // Escuchar cambios de tema emitidos por el ThemeToggleComponent
    window.addEventListener('theme-changed', ((event: CustomEvent) => {
      const newTheme = event.detail?.theme;
      if (newTheme === 'dark' || newTheme === 'light') {
        this.currentTheme.set(newTheme);
      }
    }) as EventListener);
  }

  // Método para seleccionar la imagen correcta según el tema
  getImagen(sponsor: Sponsor): string {
    if (this.currentTheme() === 'dark' && sponsor.imagenDark) {
      return sponsor.imagenDark;
    }
    return sponsor.imagen;
  }
}