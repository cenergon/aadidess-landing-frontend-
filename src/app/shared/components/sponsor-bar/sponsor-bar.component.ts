import { Component, signal, computed, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface Sponsor {
  imagen: string;
  alt: string;
  height?: number;
  heightDark?: number;
  escala?: number;
  imagenDark?: string;
}

@Component({
  selector: 'app-sponsor-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sponsor-bar.component.html',
  styleUrls: ['./sponsor-bar.component.scss'],
})
export class SponsorBarComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private routerSub?: Subscription;

  isHidden = signal(false);

  /** Factores de escala sobre las alturas ajustadas a mano de cada logo. */
  private readonly escalaMobile = 0.6;
  private readonly escalaDesktop = 0.9;

  sponsor: Sponsor[] = [
    {
      imagen: 'images/logos/macro-azul.png',
      alt: 'Macro',
      imagenDark: 'images/logos/macro-blanco.png',
      height: 70,
      heightDark: 50,
    },
    { imagen: 'images/sponsor/marcapais2.svg', alt: 'Argentina', height: 100 },
    { imagen: 'images/sponsor/hubtravel2.png', alt: 'Hub travel', height: 50 },
    { imagen: 'images/sponsor/vola2.png', alt: 'Vola' },
    {
      imagen: 'images/logos/catedral-hd-negro.png',
      alt: 'Catedral',
      imagenDark: 'images/logos/catedral-hd-blanco.png',
      height: 80,
    },
  ];

  // Mobile detection sincronizada con la media query del CSS
  private mobileQuery = window.matchMedia('(max-width: 768px)');
  public isMobile = signal(this.mobileQuery.matches);

  // Sponsors a renderizar: duplicado SOLO en mobile, original en desktop
  displaySponsors = computed(() =>
    this.isMobile() ? [...this.sponsor, ...this.sponsor] : this.sponsor,
  );

  // Duración proporcional a la cantidad de logos originales (no cambia)
  scrollDuration = computed(() => this.sponsor.length * 3);

  public currentTheme = signal<'light' | 'dark'>('light');

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
      .pipe(filter((e) => e instanceof NavigationEnd))
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

  /**
   * Altura final en px del logo, respetando las proporciones hechas a mano
   * en `height` / `heightDark` (cada logo está ajustado para "pegar" con el resto).
   * Se escala el conjunto por un factor en vez de fijar una altura fija.
   */
  getSponsorHeight(sponsor: Sponsor): number {
    const baseHeight =
      this.currentTheme() === 'dark' && sponsor.heightDark != null
        ? sponsor.heightDark
        : (sponsor.height ?? 32);
    const factor = this.isMobile() ? this.escalaMobile : this.escalaDesktop;
    return baseHeight * factor;
  }
}
