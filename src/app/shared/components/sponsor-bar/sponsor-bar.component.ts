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
    { imagen: 'images/sponsor/marcapais2.svg', alt: 'Argentina', height: 100 },
    { imagen: 'svgs/turkish-negro.svg', alt: 'Turkish Airlines', imagenDark: 'svgs/turkish-blanco.svg' },
    { imagen: 'svgs/thonet-negro.svg', alt: 'Thonet', imagenDark: 'svgs/thonet-blanco.svg', height: 30 },
    { imagen: 'images/sponsor/hubtravel2.png', alt: 'Hub travel', height: 50 },
    { imagen: 'images/sponsor/vola2.png', alt: 'Vola' },
    { imagen: 'images/logos/oakley-negro.png', alt: 'Oakley', imagenDark: 'images/logos/oakley-blanco.png', height: 55 },
    { imagen: 'images/sponsor/catedral2.png', alt: 'Catedral' }
  ];

  // Mobile detection sincronizada con la media query del CSS
  private mobileQuery = window.matchMedia('(max-width: 768px)');
  public isMobile = signal(this.mobileQuery.matches);

  // Sponsors a renderizar: duplicado SOLO en mobile, original en desktop
  displaySponsors = computed(() =>
    this.isMobile() ? [...this.sponsor, ...this.sponsor] : this.sponsor
  );

  // Duración proporcional a la cantidad de logos originales (no cambia)
  scrollDuration = computed(() => this.sponsor.length * 3);

  private currentTheme = signal<'light' | 'dark'>('light');

  private mobileQueryListener = (e: MediaQueryListEvent) => {
    this.isMobile.set(e.matches);
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

    // Escuchar cambios de viewport exactamente con la misma media query que CSS
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    // Router logic
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
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  getImagen(sponsor: Sponsor): string {
    if (this.currentTheme() === 'dark' && sponsor.imagenDark) {
      return sponsor.imagenDark;
    }
    return sponsor.imagen;
  }
}