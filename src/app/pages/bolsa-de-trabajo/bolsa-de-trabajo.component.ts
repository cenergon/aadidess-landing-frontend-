import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OfertaLaboral {
  titulo: string;
  descripcion: string;
  delegaciones: string[];
  localidad: string;
  imagen: string;
  imagenDetalle?: string;
}

@Component({
  selector: 'app-bolsa-de-trabajo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bolsa-de-trabajo.component.html',
  styleUrls: ['./bolsa-de-trabajo.component.scss']
})
export class BolsaDeTrabajoComponent {
  titulo = 'Bolsa de Trabajo';
  descripcion = 'En esta sección encontrarás oportunidades laborales de terceros, tanto de Argentina como del exterior, que son difundidas por nuestra asociación. ¡Encontrá el aviso acorde a tu perfil y postulate!';

  imagenesAmpliadas: string[] = [];

  ofertasArgentina: OfertaLaboral[] = [
    {
      titulo: 'Cavla',
      descripcion: 'Busca instructores de esquí.',
      delegaciones: ['Cerro Bayo'],
      localidad: 'Villa la Angostura',
      imagen: 'bdt-2026-CAVLA.jpg'
    },
    {
      titulo: 'Bariloche White',
      descripcion: 'Busca secretarias con conocimiento de idioma portugués (excluyente).',
      delegaciones: ['Catedral'],
      localidad: 'San Carlos de Bariloche',
      imagen: 'bdt-2026-BW.jpg'
    },
    {
      titulo: 'La Base',
      descripcion: 'Busca ayudantes para la escuela infantil.',
      delegaciones: ['Catedral'],
      localidad: 'San Carlos de Bariloche',
      imagen: 'bdt-2026-LaBase.jpg'
    },
    {
      titulo: 'Laderas',
      descripcion: 'Busca Pisteros Socorristas.',
      delegaciones: ['Cerro Perito Moreno'],
      localidad: 'El Bolsón',
      imagen: 'bdt-2026-Laderas2.jpg'
    },
    {
      titulo: 'Laderas',
      descripcion: 'Busca instructores de Esquí y Snowboard.',
      delegaciones: ['Cerro Perito Moreno'],
      localidad: 'El Bolsón',
      imagen: 'bdt-2026-Laderas.jpg'
    },
    {
      titulo: 'Escuela de Ski Bariloche (ESB)',
      descripcion: 'Busca instructores de Esquí y Snowboard.',
      delegaciones: ['Catedral'],
      localidad: 'San Carlos de Bariloche',
      imagen: 'bdt-2026-ESB.jpg'
    },
    {
      titulo: 'La Hoya',
      descripcion: 'Busca Pisteros Socorristas. Se valora experiencia en manejo de explosivos.',
      delegaciones: ['La Hoya'],
      localidad: 'Esquel, Chubut',
      imagen: 'bdt-2026-LaHoya.jpg'
    }
  ];

  ofertasExterior: OfertaLaboral[] = [
    {
      titulo: 'Hub Work & Travel',
      descripcion: 'Busca instructores de snowboard para Stratton Mountain (programa J1).',
      delegaciones: ['Stratton Mountain'],
      localidad: 'Stratton, Vermont, EE.UU.',
      imagen: 'bdt-2026-HubTravel.jpg'
    },
    {
      titulo: 'Cero Grados',
      descripcion:
        'Busca personal (instructores de esquí, rental y más) para Sierra Nevada y Baqueira Beret. Temporada 2026/27.',
      delegaciones: ['Sierra Nevada', 'Baqueira Beret'],
      localidad: 'España',
      imagen: 'cerogrados-1-2026.jpeg',
      imagenDetalle: 'cerogrados-2-2026.jpeg'
    },
    {
      titulo: 'Ski Life',
      descripcion: 'Escuela de esquí en Baqueira Beret. Busca instructores de esquí. Temporada 2026/27.',
      delegaciones: ['Baqueira Beret'],
      localidad: 'España',
      imagen: 'skiLife-1-2026.jpeg',
      imagenDetalle: 'skiLife-2-2026.jpeg'
    },
    {
      titulo: 'Snowport',
      descripcion: 'Busca instructores de esquí y snowboard, con pasaporte de la UE. Temporada en Grecia.',
      delegaciones: ['Monte Parnaso'],
      localidad: 'Grecia',
      imagen: 'snowport-2026-1.jpeg'
    },
    {
      titulo: 'Scuola Italiana Sci Fanano - Cimoncino',
      descripcion: 'Busca instructores de esquí (Nivel 3 obligatorio). Temporada de mediados de diciembre a Semana Santa.',
      delegaciones: ['Monte Cimone'],
      localidad: 'Fanano, Módena, Italia',
      imagen: 'SCI-2026-1.jpeg'
    }
  ];

  // Filtros
  searchTerm = signal('');
  delegacionSeleccionada = signal('');

  // Lista de delegaciones únicas (de ambos grupos)
  delegaciones = computed(() => {
    const todas = [...this.ofertasArgentina, ...this.ofertasExterior];
    const delegs = todas.flatMap(o => o.delegaciones);
    return [...new Set(delegs)].sort();
  });

  // Ofertas filtradas para Argentina
  ofertasArgentinaFiltradas = computed(() => {
    return this.ofertasArgentina
      .filter(oferta => this.cumpleFiltros(oferta))
      .reverse();
  });

  ofertasExteriorFiltradas = computed(() => {
    return this.ofertasExterior
      .filter(oferta => this.cumpleFiltros(oferta))
      .reverse();
  });

  private cumpleFiltros(oferta: OfertaLaboral): boolean {
    const term = this.quitarAcentos(this.searchTerm().toLowerCase().trim());
    const deleg = this.delegacionSeleccionada();

    const textoCompleto = this.quitarAcentos(
      `${oferta.titulo} ${oferta.descripcion} ${oferta.delegaciones.join(' ')} ${oferta.localidad}`.toLowerCase()
    );

    const coincideTexto = term === '' || textoCompleto.includes(term);
    const coincideDelegacion = deleg === '' || oferta.delegaciones.includes(deleg);

    return coincideTexto && coincideDelegacion;
  }

  private quitarAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  abrirImagen(oferta: OfertaLaboral): void {
    const rutas = oferta.imagenDetalle ? [oferta.imagen, oferta.imagenDetalle] : [oferta.imagen];
    this.imagenesAmpliadas = rutas.map(ruta => 'images/bolsa-de-trabajo/' + ruta);
  }

  cerrarImagen(): void {
    this.imagenesAmpliadas = [];
  }
}