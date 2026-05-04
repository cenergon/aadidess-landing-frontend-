import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  link?: string;
  children?: NavItem[];
  external?: boolean;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
    mobileMenuOpen = signal(false);
    activeDropdown = signal<string | null>(null);

    navItems: NavItem[] = [
    {
      label: 'Institucional',
      children: [
        { label: 'Autoridades', link: '/institucional/autoridades' },
        { label: 'Estatuto', link: '/institucional/estatuto' },
        { label: 'Reglamento del Comité Técnico', link: '/institucional/reglamento-comite-tecnico' },
        { label: 'Requisitos para ser Delegado', link: '/institucional/requisitos-delegados' },
        { label: 'Escuelas y Clubes reconocidos', link: '/institucional/escuelas-clubes' },
        { label: 'Decálogo', link: 'docs/Decalogo-AA.pdf', external: true },
        { label: 'Sponsors', link: '/institucional/sponsors' },
      ]
    },
    {
      label: 'Académico',
      children: [
        { label: 'Cursos', link: '/academico/cursos' },
        { label: 'Calendario', link: '/academico/calendario' },
        { label: 'Campus Virtual', link: 'https://aadidess.cipbyte.io/web/#/profile-authentication', external: true },
        { label: 'Reglamento del Académico', link: '/institucional/reglamento-academico' },
      ]
    },
    {
      label: 'Académico',
      children: [
        { label: 'Cursos', link: '/academico/cursos' },
        { label: 'Calendario', link: '/academico/calendario' },
        { label: 'Campus Virtual', link: 'https://aadidess.cipbyte.io/web/#/profile-authentication', external: true },
        { label: 'Reglamento del Académico', link: '/institucional/reglamento-academico' },
      ]
    },
    {
      label: 'Socios',
      children: [
        { label: 'Convenios y Beneficios', link: '/socios/convenios-y-beneficios' },
        { label: 'Bolsa de Trabajo', link: '/socios/bolsa-de-trabajo' },
        { label: 'Instructores', link: 'https://qr.aadidess.cipbyte.io/#/home', external: true },
        { label: '¿Por qué ser socio?', link: '/socios/por-que-ser-socio' }
      ]
    },
    {
      label: 'Aranceles y Formas de Pago',
      children: [
        { label: 'Aranceles', link: '/aranceles-y-formas-de-pago/aranceles' },
        { label: 'Formas de Pago', link: '/aranceles-y-formas-de-pago/formas-de-pago' }
      ]
    },
    { label: 'Noticias', link: '/portal-de-noticias' },
    { label: 'Tienda', link: '/wip' },
    { label: 'Contacto', link: '/contacto' }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update(open => !open);
  }

  setActiveDropdown(label: string | null) {
    this.activeDropdown.set(label);
  }

  isDropdownOpen(label: string): boolean {
    return this.activeDropdown() === label;
  }

  openExternal(url: string, event?: MouseEvent): void {
    event?.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}