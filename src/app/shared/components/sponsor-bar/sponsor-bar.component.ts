import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
  imports: [RouterLink],
  templateUrl: './sponsor-bar.component.html',
  styleUrls: ['./sponsor-bar.component.scss']
})
export class SponsorBarComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private routerSub?: Subscription;

  // Señal que indica si estamos en la página de sponsors (se oculta la barra)
  isHidden = signal(false);

  sponsor: Sponsor[] = [
    { imagen: 'images/sponsor/macro2.svg', alt: 'Macro', imagenDark: 'svgs/macro-blanco.svg' },
    { imagen: 'images/sponsor/marcapais2.svg', alt: 'Argentina', height: 36, escala: 1.2 },
    { imagen: 'images/sponsor/turkish2.svg', alt: 'Turkish Airlines', imagenDark: 'images/sponsor/turkish-blanco.svg' },
    { imagen: 'images/sponsor/thonet2.svg', alt: 'Thonet' },
    { imagen: 'images/sponsor/hubtravel2.png', alt: 'Hub travel', height: 24, escala: 1.3 },
    { imagen: 'images/sponsor/vola2.png', alt: 'Vola' },
    { imagen: 'images/sponsor/oakley2.png', alt: 'Oakley' },
    { imagen: 'images/sponsor/catedral2.png', alt: 'Catedral' }
  ];

  private currentTheme = signal<'light' | 'dark'>('light');

  ngOnInit(): void {
    // Detectar tema
    const initial = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
    if (initial === 'dark' || initial === 'light') {
      this.currentTheme.set(initial);
    }

    window.addEventListener('theme-changed', ((event: CustomEvent) => {
      const newTheme = event.detail?.theme;
      if (newTheme === 'dark' || newTheme === 'light') {
        this.currentTheme.set(newTheme);
      }
    }) as EventListener);

    // Escuchar navegaciones
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isHidden.set(this.router.url === '/institucional/sponsors');
      });

    // Verificar estado inicial
    this.isHidden.set(this.router.url === '/institucional/sponsors');
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  getImagen(sponsor: Sponsor): string {
    if (this.currentTheme() === 'dark' && sponsor.imagenDark) {
      return sponsor.imagenDark;
    }
    return sponsor.imagen;
  }
}