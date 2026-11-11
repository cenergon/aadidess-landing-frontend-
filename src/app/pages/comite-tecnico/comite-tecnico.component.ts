import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Un integrante de una de las subcomisiones del Comité Técnico.
 * `foto` es la ruta dentro de public/ (ej: 'images/autoridades-pfp-2026/bozic.jpeg').
 * Si el archivo no existe, la imagen falla y la tarjeta cae a las iniciales.
 */
interface Integrante {
  nombre: string;
  /** Disciplina del integrante dentro de su subcomisión. */
  cargo: string;
  foto: string | null;
}

/** Una subcomisión del Comité Técnico: esquí o snowboard. */
interface Subcomision {
  id: string;
  titulo: string;
  integrantes: Integrante[];
}

@Component({
  selector: 'app-comite-tecnico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comite-tecnico.component.html',
  styleUrls: ['./comite-tecnico.component.scss'],
})
export class ComiteTecnicoComponent {
  /** Fotos nuevas: `public/images/autoridades-pfp-2026/`. */
  private foto(archivo: string): string {
    return `images/autoridades-pfp-2026/${archivo}.jpeg`;
  }

  readonly subcomisiones: Subcomision[] = [
    {
      id: 'esqui',
      titulo: 'Comité Técnico de Esquí',
      integrantes: [
        {
          // Los que además tienen cargo en la comisión van primero.
          nombre: 'Ivo Bozic',
          cargo: 'Esquí',
          foto: this.foto('bozic'),
        },
        {
          nombre: 'Juan Manuel Faccio',
          cargo: 'Esquí',
          foto: this.foto('faccio'),
        },
        {
          nombre: 'Federico Marcaccini',
          cargo: 'Esquí',
          foto: this.foto('marcaccini'),
        },
        {
          nombre: 'Matthias Pinna',
          cargo: 'Esquí',
          foto: this.foto('pinna'),
        },
        {
          nombre: 'Marcelo Solari',
          cargo: 'Esquí',
          foto: this.foto('solari'),
        },
        {
          nombre: 'Nahuel Vitale',
          cargo: 'Esquí',
          foto: this.foto('vitale'),
        },
        {
          nombre: 'Tito Franco',
          cargo: 'Esquí',
          foto: this.foto('tito-franco'),
        },
        {
          nombre: 'Diego Hilaire',
          cargo: 'Esquí',
          foto: this.foto('hilaire'),
        },
        {
          nombre: 'Santiago Murtagh',
          cargo: 'Esquí',
          foto: this.foto('murtagh'),
        },
      ],
    },
    {
      id: 'snowboard',
      titulo: 'Comité Técnico de Snowboard',
      integrantes: [
        {
          nombre: 'Ismael de Vedia',
          cargo: 'Snowboard',
          foto: this.foto('deVedia'),
        },
        {
          nombre: 'Santiago Fernández',
          cargo: 'Snowboard',
          foto: this.foto('fernandez'),
        },
        {
          nombre: 'Agustín Miranda',
          cargo: 'Snowboard',
          foto: this.foto('miranda'),
        },
        {
          nombre: 'Franco Ruffini',
          cargo: 'Snowboard',
          foto: this.foto('ruffini'),
        },
      ],
    },
  ];

  /**
   * Columnas de la grilla: la de la subcomisión más numerosa, así todas las
   * tarjetas quedan del mismo tamaño aunque una disciplina tenga menos gente.
   */
  readonly columnas = Math.max(...this.subcomisiones.map((s) => s.integrantes.length));

  /** Personas cuya foto todavía no está en public/ (se muestran con iniciales). */
  private readonly sinFoto = signal<ReadonlySet<string>>(new Set<string>());

  marcarSinFoto(nombre: string): void {
    if (this.sinFoto().has(nombre)) {
      return;
    }
    const siguiente = new Set(this.sinFoto());
    siguiente.add(nombre);
    this.sinFoto.set(siguiente);
  }

  tieneFoto(persona: Integrante): boolean {
    return !!persona.foto && !this.sinFoto().has(persona.nombre);
  }

  getInitials(nombre: string): string {
    return nombre
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('');
  }
}
