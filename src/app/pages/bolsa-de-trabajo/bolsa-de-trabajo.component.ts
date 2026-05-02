import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OfertaLaboral {
  titulo: string;
  descripcion: string;
  delegacion: string;
  localidad: string;
  imagen: string;
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

  imagenAmpliada: string | null = null;

  ofertasArgentina: OfertaLaboral[] = [
    {
      titulo: 'Escuela de Ski Bariloche (ESB)',
      descripcion: 'Busca instructores de Esquí y Snowboard.',
      delegacion: 'Catedral',
      localidad: 'San Carlos de Bariloche',
      imagen: 'bdt-2026-ESB.jpg'
    },
    {
      titulo: 'La Base',
      descripcion: 'Busca ayudantes para la escuela infantil.',
      delegacion: 'Catedral',
      localidad: 'San Carlos de Bariloche',
      imagen: 'bdt-2026-LaBase.jpg'
    },
    {
      titulo: 'Laderas',
      descripcion: 'Busca instructores de Esquí y Snowboard.',
      delegacion: 'Cerro Perito Moreno',
      localidad: 'El Bolsón',
      imagen: 'bdt-2026-Laderas.jpg'
    },
    {
      titulo: 'Laderas',
      descripcion: 'Busca Pisteros Socorristas.',
      delegacion: 'Cerro Perito Moreno',
      localidad: 'El Bolsón',
      imagen: 'bdt-2026-Laderas2.jpg'
    },
    {
      titulo: 'Cavla',
      descripcion: 'Busca instructores de esquí.',
      delegacion: 'Cerro Bayo',
      localidad: 'Villa la Angostura',
      imagen: 'bdt-2026-CAVLA.jpg'
    },
    {
      titulo: 'Bariloche White',
      descripcion: 'Busca secretarias con conocimiento de idioma portugués (excluyente).',
      delegacion: 'Catedral',
      localidad: 'San Carlos de Bariloche',
      imagen: 'bdt-2026-BW.jpg'
    }
  ];

  ofertasExterior: OfertaLaboral[] = [];

  // Filtros
  searchTerm = signal('');
  delegacionSeleccionada = signal('');

  // Lista de delegaciones únicas (de ambos grupos)
  delegaciones = computed(() => {
    const todas = [...this.ofertasArgentina, ...this.ofertasExterior];
    const delegs = todas.map(o => o.delegacion);
    return [...new Set(delegs)].sort();
  });

  // Ofertas filtradas para Argentina
  ofertasArgentinaFiltradas = computed(() => {
    return this.ofertasArgentina.filter(oferta =>
      this.cumpleFiltros(oferta)
    );
  });

  // Ofertas filtradas para Exterior
  ofertasExteriorFiltradas = computed(() => {
    return this.ofertasExterior.filter(oferta =>
      this.cumpleFiltros(oferta)
    );
  });

  private cumpleFiltros(oferta: OfertaLaboral): boolean {
    const term = this.quitarAcentos(this.searchTerm().toLowerCase().trim());
    const deleg = this.delegacionSeleccionada();

    const textoCompleto = this.quitarAcentos(
      `${oferta.titulo} ${oferta.descripcion} ${oferta.delegacion} ${oferta.localidad}`.toLowerCase()
    );

    const coincideTexto = term === '' || textoCompleto.includes(term);
    const coincideDelegacion = deleg === '' || oferta.delegacion === deleg;

    return coincideTexto && coincideDelegacion;
  }

  private quitarAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  abrirImagen(ruta: string): void {
    this.imagenAmpliada = 'images/bolsa-de-trabajo/' + ruta;
  }

  cerrarImagen(): void {
    this.imagenAmpliada = null;
  }
}