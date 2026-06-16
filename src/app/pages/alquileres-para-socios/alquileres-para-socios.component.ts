import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contacto {
  nombre: string;
  telefono: string;
}

interface Alquiler {
  titulo: string;
  descripcion: string;
  ubicacion: string;
  contactos: Contacto[];
  foto?: string; // opcional, sin foto usamos placeholder
}

@Component({
  selector: 'app-alquileres-para-socios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alquileres-para-socios.component.html',
  styleUrls: ['./alquileres-para-socios.component.scss']
})
export class AlquileresParaSociosComponent {

  // --- Visor de imagen ---
  modalOpen = signal(false);
  modalFoto = signal('');

  searchTerm = signal('');

  alquileres: Alquiler[] = [
    {
      titulo: 'Monoambiente en el centro',
      descripcion: 'Monoambiente máximo 4 personas equipado con 1 sommier de 2 plazas y 2 sommiers de 1 plaza cada uno, con vajilla y todos los electrodomésticos pequeños (pava eléctrica, cafetera, tostadora, microondas). Ropa de cama si desean el servicio se arregla a elección.',
      ubicacion: 'Nueva constitución 130, entre 9 de Julio y Saenz Peña, Centro de Bariloche',
      contactos: [{ nombre: 'Juan', telefono: '1125247195' }],
      foto: 'images/alquileres/alquiler-monoambiente-4personas.jpeg',
    },
    {
      titulo: 'Temporada de invierno en Villa Los Coihues',
      descripcion: 'Alquiler de temporada de invierno para instructores y/o turistas. Hasta 4 o 5 personas. Disponible del 1 de julio hasta el 30 de septiembre.',
      ubicacion: 'Barrio Villa Los Coihues, Bariloche',
      contactos: [
        { nombre: 'Liliana', telefono: '+5492944580230' },
        { nombre: 'Nahuel', telefono: '+5492944209951' }
      ],
      foto: 'images/alquileres/alquiler-b-villa-los-coihues.jpg',
    },
    {
      titulo: 'Departamento para 1pax o una pareja',
      descripcion: 'Precio por mes 800 U$S con todos los gastos incluidos.',
      ubicacion: '',
      contactos: [
        { nombre: 'viviolivieri@gmail', telefono: '2944353515' }
      ],
      foto: 'images/alquileres/depto-1-pax-1-pareja.jpeg',
    },
    {
      titulo: 'Departamento de 35m2 con entrada para auto. A un km del cruce a Catedral',
      descripcion: 'Capacidad para 2 personas. Equipado con cocina, heladera. Ambiente amplio, 1 baño, 2 camas una plaza o 1 de 2 plazas. Servicios incluidos: Electricidad, Agua, Gas, Tv cable (no cuenta con wifi)',
      ubicacion: 'Av. Bustillo 7542',
      contactos: [
        { nombre: '', telefono: '2944589688' }
      ],
      foto: '',
    }
  ];

  filteredAlquileres = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.alquileres;
    return this.alquileres.filter(a =>
      a.titulo.toLowerCase().includes(term) ||
      a.descripcion.toLowerCase().includes(term) ||
      a.ubicacion.toLowerCase().includes(term) ||
      a.contactos.some(c => c.nombre.toLowerCase().includes(term) || c.telefono.includes(term))
    );
  });

  formatTelefono(telefono: string): string {
    // limpia el formato para enlace tel:
    return telefono.replace(/[\s\-\(\)]/g, '');
  }

  openModal(foto: string): void {
    this.modalFoto.set(foto);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen.set(false);
    document.body.style.overflow = '';
  }

  downloadCurrent(): void {
    const url = this.modalFoto();
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'alquiler-foto';
    link.click();
  }
}