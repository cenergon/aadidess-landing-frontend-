import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Curso {
  nombre: string;
  foto: string | null;
  link?: string;
}

interface AccionRapida {
  label: string;
  link: string;
  icon?: string;
  external?: boolean;
}

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  searchTerm = signal('');

  cursos: Curso[] = [
    { nombre: 'Instructorado de Esquí Nivel 1', foto: 'images/cursos/Instructorado_de_Esqui_Nivel_1_2.jpeg', link: '/academico/cursos/instructor-esqui-nivel-1' },
    { nombre: 'Instructorado de Snowboard Nivel 1', foto: 'images/cursos/snowboard-nivel-1.jpg', link: '/academico/cursos/instructor-snowboard-nivel-1' },
    { nombre: 'Instructorado de Esquí Nivel 2', foto: 'images/cursos/esqui-nivel-2.jpg', link: '/academico/cursos/instructor-esqui-nivel-2' },
    { nombre: 'Instructorado de Snowboard Nivel 2', foto: 'images/cursos/snowboard-nivel-2.jpg', link: '/academico/cursos/instructor-snowboard-nivel-2' },
    { nombre: 'Instructorado de Esquí Nivel 3', foto: 'images/cursos/esqui-nivel-3.jpg', link: '/academico/cursos/instructor-esqui-nivel-3' },
    { nombre: 'Instructorado de Snowboard Nivel 3', foto: 'images/cursos/snowboard-nivel-3.jpg', link: '/academico/cursos/instructor-snowboard-nivel-3' },
    { nombre: 'Nivel 4 Demo', foto: 'images/cursos/Nivel_4_demo.jpeg.jpg', link: '/academico/cursos/instructor-nivel-cuatro-demo' },
    { nombre: 'Nivel 5 Profesor', foto: 'images/cursos/Profesor.jpg', link: '/academico/cursos/instructor-nivel-cinco-profesor' },
    { nombre: 'Entrenador de club de esquí', foto: 'images/cursos/cursos-entrenador-esqui.jpg', link: '/academico/cursos/entrenador-club-esqui' },
    { nombre: 'Entrenador Nacional', foto: 'images/cursos/cursos-entrenador-nacional.jpg', link: '/academico/cursos/entrenador-nacional' },
    { nombre: 'Instructor para Niños', foto: 'images/cursos/ninos.jpg', link: '/academico/cursos/instructor-ninos' },
    { nombre: 'Pistero Socorrista 1º Grado', foto: 'images/cursos/Pistero_Socorrista_1°_Grado.jpeg-1.jpg', link: '/academico/cursos/pistero-socorrista-primer-grado' },
    { nombre: 'Pistero Socorrista 2° grado', foto: 'images/cursos/curso-pistero-2-grado.jpg', link: '/academico/cursos/pistero-socorrista-segundo-grado' },
    { nombre: 'Pistero Socorrista 3° grado', foto: 'images/cursos/curso-pistero-3-grado.jpg', link: '/academico/cursos/pistero-socorrista-tercer-grado' },
    { nombre: 'Artificiero', foto: 'images/cursos/artificiero.jpg', link: '/academico/cursos/' },
    { nombre: 'Maestro Pistero', foto: 'images/cursos/maestro-pistero.jpg', link: '/academico/cursos/' },
    { nombre: 'Esquí Adaptado Nivel 1', foto: 'images/cursos/Esqui_adaptado_nivel_1.jpeg.jpg', link: '/academico/cursos/' },
    { nombre: 'Esquí Adaptado Nivel 2', foto: 'images/cursos/Esqui_adaptado_nivel_2.jpeg', link: '/academico/cursos/' },
    { nombre: 'Esquí de Fondo', foto: 'images/cursos/Esqui_de_fondo.jpeg', link: '/academico/cursos/' },
    { nombre: 'Skiman', foto: 'images/cursos/Skiman.jpeg.jpg', link: '/academico/cursos/' },
    { nombre: 'RCP', foto: 'images/cursos/RCP-1.jpg', link: '/academico/cursos/' },
    { nombre: 'Auxiliar de Centro de Esquí', foto: 'images/cursos/auxuliar.jpg', link: '/academico/cursos/' },
    { nombre: 'Telemark', foto: 'images/cursos/Telemark.jpeg.jpg', link: '/academico/cursos/' }
  ];

  accionesRapidas: AccionRapida[] = [
    { label: 'Completá la inscripción', link: 'https://aadidess.cipbyte.io/web/#/profile-authentication/login',
      icon: 'edit_note', external: true },
    { label: 'Calendario', link: '/academico/calendario', icon: 'calendar_month' },
    { label: 'Ver aranceles', link: '/aranceles-y-formas-de-pago/aranceles', icon: 'payments' },
    { label: 'Reglamento académico', link: '/institucional/reglamento-academico', icon: 'description' },
    { label: 'Convalidaciones', link: '/academico/convalidaciones', icon: 'compare_arrows' },
    { label: 'Reentrenamientos', link: '/academico/reentrenamiento', icon: 'refresh' },
    { label: 'Delegaciones', link: '/academico/delegaciones', icon: 'groups' },
    { label: 'Preguntas frecuentes', link: '/academico/FAQ', icon: 'help_outline' }
  ];

  filteredCursos = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.cursos;
    return this.cursos.filter(c => c.nombre.toLowerCase().includes(term));
  });

  getInitials(nombre: string): string {
    return nombre.split(' ').slice(0, 2).map(p => p[0]).join('').toUpperCase();
  }

  getFotoUrl(foto: string | null): string | null {
    return foto || null;
  }
}