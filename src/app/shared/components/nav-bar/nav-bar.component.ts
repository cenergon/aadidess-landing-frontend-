import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  link?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
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
            { label: 'Escuelas y Clubes reconocidos', link: '/institucional/escuelas-clubes' }
            ]
        },
        { label: 'Cursos', link: '#' },
        { label: 'Noticias', link: '#' },
        {
            label: 'Socios',
            children: [
            { label: 'Convenios y Beneficios', link: '/socios/convenios-y-beneficios' },
            { label: 'Bolsa de Trabajo', link: '#' },
            { label: 'Instructores', link: '#' },
            { label: '¿Por qué ser socio?', link: '#' }
            ]
        },
        { label: 'Tienda', link: '#' },
        { label: 'Contacto', link: '#' },
        {
            label: 'Aranceles y Formas de Pago',
            children: [
            { label: 'Aranceles', link: '/aranceles-y-formas-de-pago/aranceles' },
            { label: 'Formas de Pago', link: '/aranceles-y-formas-de-pago/formas-de-pago' }
            ]
        },
        { label: 'Campus Virtual', link: '#' },
        { label: 'Calendario', link: '#' },
        { label: 'Decálogo', link: '#' }
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
}