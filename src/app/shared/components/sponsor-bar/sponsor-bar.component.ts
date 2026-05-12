import { Component, signal, computed, OnInit, OnDestroy, inject } from '@angular/core';
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

  isHidden = signal(false);

  sponsor: Sponsor[] = [
    { imagen: 'images/sponsor/macro2.svg', alt: 'Macro', imagenDark: 'svgs/macro-blanco.svg' },
    { imagen: 'images/sponsor/marcapais2.svg', alt: 'Argentina', height: 70, escala: 1.2 },
    { imagen: 'svgs/turkish-negro.svg', alt: 'Turkish Airlines', imagenDark: 'svgs/turkish-blanco.svg' },
    { imagen: 'svgs/thonet-negro.svg', alt: 'Thonet', imagenDark: 'svgs/thonet-blanco.svg', height: 30 },
    { imagen: 'images/sponsor/hubtravel2.png', alt: 'Hub travel', height: 30, escala: 1.3 },
    { imagen: 'images/sponsor/vola2.png', alt: 'Vola' },
    { imagen: 'images/logos/oakley-negro.png', alt: 'Oakley', imagenDark: 'images/logos/oakley-blanco.png', height: 40, escala: 1.3 },
    { imagen: 'images/sponsor/catedral2.png', alt: 'Catedral' }
  ];

  // Nuevo: señal para saber si estamos en mobile (punto de quiebre 768px, mismo que el CSS)
  private isMobile = signal(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  // Sponsors a renderizar: duplicado SOLO en mobile, original en desktop
  displaySponsors = computed(() => 
    this.isMobile() ? [...this.sponsor, ...this.sponsor] : this.sponsor
  );

  // Duración proporcional a la cantidad de logos originales (no cambia)
  scrollDuration = computed(() => this.sponsor.length * 3);

  private currentTheme = signal<'light' | 'dark'>('light');

  private resizeListener = () => {
    this.isMobile.set(window.innerWidth <= 768);
  };

  ngOnInit(): void {
    // Theme detection
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

    // Escuchar cambios de tamaño de viewport
    window.addEventListener('resize', this.resizeListener);

    // Router logic...
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isHidden.set(this.router.url === '/institucional/sponsors');
      });

    this.isHidden.set(this.router.url === '/institucional/sponsors');
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    window.removeEventListener('resize', this.resizeListener);
  }

  getImagen(sponsor: Sponsor): string {
    if (this.currentTheme() === 'dark' && sponsor.imagenDark) {
      return sponsor.imagenDark;
    }
    return sponsor.imagen;
  }
}