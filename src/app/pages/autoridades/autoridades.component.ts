import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelegadosComponent } from '../delegados/delegados.component';

/**
 * Una autoridad de la Comisión Directiva o del Tribunal de Honor.
 * `foto` es la ruta dentro de public/ (ej: 'images/autoridades-pfp-2026/bacer.jpeg').
 * Si el archivo no existe, la imagen falla y la tarjeta cae a las iniciales.
 */
interface Autoridad {
  nombre: string;
  cargo: string;
  /** Vacío en los cargos que no se renuevan por elección (comité técnico). */
  periodo?: string;
  foto: string | null;
  destacado?: boolean;
}

/** Un órgano de gobierno: mesa directiva, revisores, vocales, tribunal. */
interface Organo {
  id: string;
  titulo: string;
  bajada?: string;
  /** La mesa directiva va en tarjetas apaisadas, el resto en tarjetas verticales. */
  horizontal?: boolean;
  miembros: Autoridad[];
}

@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [CommonModule, DelegadosComponent],
  templateUrl: './autoridades.component.html',
  styleUrls: ['./autoridades.component.scss']
})
export class AutoridadesComponent {
  // Los revisores de cuentas se renuevan cada 2 años; el resto de los cargos, cada 4.
  private readonly periodoGeneral = '2026-2030';
  private readonly periodoRevision = '2026-2028';

  /** Fotos nuevas: `public/images/autoridades-pfp-2026/`. */
  private foto(archivo: string): string {
    return `images/autoridades-pfp-2026/${archivo}.jpeg`;
  }

  readonly organos: Organo[] = [
    {
      id: 'mesa-directiva',
      titulo: 'Mesa Directiva',
      bajada: 'Conducción institucional de la asociación.',
      horizontal: true,
      miembros: [
        {
          nombre: 'Martín Bacer',
          cargo: 'Presidente',
          periodo: this.periodoGeneral,
          // Volvió a la foto anterior (la nueva pasó a Bozic).
          foto: 'images/martin-bacer.jpg',
          destacado: true
        },
        {
          nombre: 'Juan Manuel Faccio',
          cargo: 'Secretario',
          periodo: this.periodoGeneral,
          foto: this.foto('faccio')
        },
        {
          // Todavía no hay foto nueva: sigue la anterior de public/images/.
          nombre: 'Justo Luis Olivieri',
          cargo: 'Tesorero',
          periodo: this.periodoGeneral,
          foto: 'images/justo-luis-olivieri.jpg'
        }
      ]
    },
    {
      id: 'revisores-de-cuentas',
      titulo: 'Revisores de Cuentas',
      bajada: 'Fiscalización de los estados contables.',
      miembros: [
        {
          nombre: 'Jorge Taricco',
          cargo: 'Revisor de cuentas titular',
          periodo: this.periodoRevision,
          foto: 'images/jorge-taricco.jpg'
        },
        {
          nombre: 'Andrea Cimorelli',
          cargo: 'Revisora de cuentas suplente',
          periodo: this.periodoRevision,
          foto: this.foto('cimorelli')
        },
        {
          // Sigue en funciones: es suplente hasta 2028, sin cambios de cargo.
          nombre: 'Jorge Nabarlaz',
          cargo: 'Revisor de cuentas suplente',
          periodo: this.periodoRevision,
          foto: this.foto('nabarlaz')
        }
      ]
    },
    {
      id: 'vocales-titulares',
      titulo: 'Vocales Titulares',
      miembros: [
        { nombre: 'Pablo Calello', cargo: 'Vocal titular', periodo: this.periodoGeneral, foto: this.foto('calello') },
        { nombre: 'Rodolfo Longo', cargo: 'Vocal titular', periodo: this.periodoGeneral, foto: 'images/rodolfo-longo.jpg' },
        { nombre: 'Pedro Vergara', cargo: 'Vocal titular', periodo: this.periodoGeneral, foto: 'images/pedro-vergara.jpg' },
        { nombre: 'José María Rossi', cargo: 'Vocal titular', periodo: this.periodoGeneral, foto: 'images/jose-maria-rossi.jpg' },
        { nombre: 'Gabriel Runschke', cargo: 'Vocal titular', periodo: this.periodoGeneral, foto: this.foto('runscke') },
        { nombre: 'Ivo Bozic', cargo: 'Vocal titular', periodo: this.periodoGeneral, foto: this.foto('bozic') }
      ]
    },
    {
      id: 'vocales-suplentes',
      titulo: 'Vocales Suplentes',
      miembros: [
        { nombre: 'María Manzano', cargo: 'Vocal suplente', periodo: this.periodoGeneral, foto: this.foto('manzano') },
        { nombre: 'Fernando Pomar', cargo: 'Vocal suplente', periodo: this.periodoGeneral, foto: this.foto('pomar') },
        { nombre: 'Román Arinovich', cargo: 'Vocal suplente', periodo: this.periodoGeneral, foto: 'images/roman-arinovich.jpg' }
      ]
    },
    {
      id: 'tribunal-de-honor',
      titulo: 'Tribunal de Honor',
      bajada: 'Ética y disciplina de la actividad.',
      miembros: [
        {
          nombre: 'Federico Corsiglia',
          cargo: 'Presidente del Tribunal de Honor',
          periodo: this.periodoGeneral,
          foto: 'images/federico-corsiglia.jpg'
        },
        {
          nombre: 'Ricardo Djapic',
          cargo: 'Secretario del Tribunal de Honor',
          periodo: this.periodoGeneral,
          foto: this.foto('djapic')
        },
        {
          nombre: 'Maximiliano Mazza',
          cargo: 'Vocal del Tribunal de Honor',
          periodo: this.periodoGeneral,
          foto: this.foto('mazza')
        }
      ]
    },
    {
      id: 'comite-tecnico',
      titulo: 'Comité Técnico',
      miembros: [
        {
          nombre: 'Diego Hilaire',
          cargo: 'Esquí',
          foto: this.foto('hilaire')
        },
        {
          nombre: 'Federico Marcaccini',
          cargo: 'Esquí',
          foto: this.foto('marcaccini')
        },
        {
          nombre: 'Matthias Pinna',
          cargo: 'Esquí',
          foto: this.foto('pinna')
        },
        {
          nombre: 'Nahuel Vitale',
          cargo: 'Esquí',
          foto: this.foto('vitale')
        },
        {
          nombre: 'Tito Franco',
          cargo: 'Esquí',
          foto: this.foto('tito-franco')
        },
        {
          nombre: 'Ismael de Vedia',
          cargo: 'Snowboard',
          foto: this.foto('deVedia')
        },
        {
          nombre: 'Franco Ruffini',
          cargo: 'Snowboard',
          foto: this.foto('ruffini')
        },
      ]
    }
  ];

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

  tieneFoto(persona: Autoridad): boolean {
    return !!persona.foto && !this.sinFoto().has(persona.nombre);
  }

  getInitials(nombre: string): string {
    return nombre.split(' ').slice(0, 2).map(n => n[0]).join('');
  }
}
