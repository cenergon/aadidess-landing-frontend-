import { Component, signal, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  link: string;
  external?: boolean;
}

/**
 * Columna de un menú desplegable. Sin `titulo` es un dropdown simple;
 * con dos o más secciones el panel se abre como mega menú.
 */
interface NavSection {
  titulo?: string;
  items: NavLink[];
}

interface NavItem {
  label: string;
  link?: string;
  external?: boolean;
  sections?: NavSection[];
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  mobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);
  isMobile = signal(false);

  /**
   * Cierre diferido del dropdown. Al mover el mouse en diagonal del ítem al
   * panel se pasa por una zona que no es ninguno de los dos; sin esta espera
   * el panel se cierra y se vuelve a abrir (flicker).
   */
  private closeTimer?: ReturnType<typeof setTimeout>;

  /** Cinco categorías de primer nivel (ver AGENTS/UX: densidad de navbar). */
  navItems: NavItem[] = [
    {
      label: 'Académico',
      sections: [
        {
          items: [
            { label: 'Cursos', link: '/academico/cursos' },
            { label: 'Calendario', link: '/academico/calendario' },
            { label: 'Delegaciones', link: '/academico/delegaciones' },
            { label: 'Reglamento Académico', link: '/institucional/reglamento-academico' },
            { label: 'Preguntas Frecuentes', link: '/academico/FAQ' },
          ],
        },
      ],
    },
    {
      label: 'Socios',
      sections: [
        {
          titulo: 'Beneficios',
          items: [
            { label: '¿Por qué ser socio?', link: '/socios/por-que-ser-socio' },
            { label: 'Convenios y Beneficios', link: '/socios/convenios-y-beneficios' },
            { label: 'Alquileres para Socios', link: '/socios/alquileres-para-socios' },
            { label: 'Hub Travel - Vuelos', link: '/wip' },
            // /socios/hub-travel-vuelos es la ruta que carga el script externo de Aereos;
            // dejo /wip hasta que esté solucionada.
          ],
        },
        {
          titulo: 'Servicios',
          items: [
            { label: 'Bolsa de Trabajo', link: '/socios/bolsa-de-trabajo' },
            {
              label: 'Instructores',
              link: 'https://qr.aadidess.cipbyte.io/#/home',
              external: true,
            },
          ],
        },
        {
          titulo: 'Aranceles',
          items: [
            { label: 'Aranceles', link: '/aranceles-y-formas-de-pago/aranceles' },
            { label: 'Formas de Pago', link: '/aranceles-y-formas-de-pago/formas-de-pago' },
          ],
        },
      ],
    },
    {
      label: 'Institucional',
      sections: [
        {
          titulo: 'Conducción',
          items: [
            { label: 'Autoridades', link: '/institucional/autoridades' },
            { label: 'Comité Técnico', link: '/institucional/comite-tecnico' },
            { label: 'Estatuto', link: '/institucional/estatuto' },
          ],
        },
        {
          titulo: 'Red institucional',
          items: [
            { label: 'Requisitos para ser Delegado', link: '/institucional/requisitos-delegados' },
            { label: 'Escuelas y Clubes reconocidos', link: '/institucional/escuelas-clubes' },
            { label: 'Subcomisión de Esquí Adaptado', link: '/subcomision-esqui-adaptado' },
            { label: 'Fundación Challenge', link: '/challenge' },
          ],
        },
        {
          titulo: 'Recursos',
          items: [
            {
              label: 'Reglamento del Comité Técnico',
              link: '/institucional/reglamento-comite-tecnico',
            },
            { label: 'Decálogo', link: 'docs/Decalogo-AA.pdf', external: true },
            { label: 'Sponsors', link: '/institucional/sponsors' },
          ],
        },
      ],
    },
    {
      label: 'Noticias',
      sections: [
        {
          items: [
            { label: 'Portal de noticias', link: '/portal-de-noticias' },
            { label: 'Novedades', link: '/novedades' },
          ],
        },
      ],
    },
    { label: 'Contacto', link: '/contacto' },
  ];

  readonly campusUrl = 'https://aadidess.cipbyte.io/web/#/profile-authentication';

  ngOnInit() {
    this.checkMobile();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMobileMenu();
  }

  checkMobile() {
    const mobile = window.innerWidth <= 768;
    this.isMobile.set(mobile);

    // Si pasamos a desktop con el menú abierto, lo cerramos y liberamos el scroll
    if (!mobile && this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
      this.setBodyScrollLock(false);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((open) => {
      const next = !open;
      this.setBodyScrollLock(next);
      return next;
    });
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    this.activeDropdown.set(null);
    this.setBodyScrollLock(false);
  }

  private setBodyScrollLock(lock: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.style.overflow = lock ? 'hidden' : '';
  }

  setActiveDropdown(label: string | null) {
    this.cancelClose();
    this.activeDropdown.set(label);
  }

  /** Abre (o mantiene abierto) el panel del ítem y cancela un cierre pendiente. */
  openDropdown(label: string): void {
    this.cancelClose();
    this.activeDropdown.set(label);
  }

  /** Cierra con una pequeña espera para tolerar el recorrido del mouse. */
  scheduleClose(): void {
    this.cancelClose();
    this.closeTimer = setTimeout(() => this.activeDropdown.set(null), 220);
  }

  private cancelClose(): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }
  }

  isDropdownOpen(label: string): boolean {
    return this.activeDropdown() === label;
  }

  /** Un panel con más de una sección se muestra como mega menú en columnas. */
  isMega(item: NavItem): boolean {
    return (item.sections?.length ?? 0) > 1;
  }

  openExternal(url: string, event?: MouseEvent): void {
    event?.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
