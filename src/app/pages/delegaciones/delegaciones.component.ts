import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Delegacion {
  nombre: string;
  delegado: string;
  contacto: string;
  tipoContacto: 'Teléfono' | 'Whatsapp' | 'Fax';
  email?: string;
  horario?: string;
  fax?: string;
}

@Component({
  selector: 'app-delegaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.scss']
})
export class DelegacionesComponent {
  searchTerm = signal('');

  delegaciones: Delegacion[] = [
    {
      nombre: 'Catedral',
      delegado: 'Director Académico',
      contacto: '+542944522990',
      tipoContacto: 'Teléfono',
      email: 'central@aadidess.com',
      fax: '0294-4428789'
    },
    {
      nombre: 'Caviahue',
      delegado: 'Guadalupe Bertolini',
      contacto: '+5492942522056',
      tipoContacto: 'Whatsapp'
    },
    {
      nombre: 'Cerro Bayo',
      delegado: 'Guadalupe Rezzonico',
      contacto: '+34641122571',
      tipoContacto: 'Whatsapp',
      email: 'bayo@aadidess.com'
    },
    {
      nombre: 'Cerro Castor',
      delegado: 'Andrea Pascal',
      contacto: '0290115465572',
      tipoContacto: 'Teléfono',
      email: 'castor@aadidess.com',
      horario: 'de 9 a 15 hs'
    },
    {
      nombre: 'Chapelco',
      delegado: 'Nestor Zuñiga',
      contacto: '+542944612259',
      tipoContacto: 'Whatsapp',
      email: 'chapelco@aadidess.com',
      horario: 'de 16 a 20 hs'
    },
    {
      nombre: 'Lago Hermoso',
      delegado: 'Nestor Zuñiga',
      contacto: '+542944612259',
      tipoContacto: 'Whatsapp',
      email: 'chapelco@aadidess.com',
      horario: 'de 16 a 20 hs'
    },
    {
      nombre: 'La Hoya',
      delegado: 'Juan Jose Rodriguez',
      contacto: '0294515687926',
      tipoContacto: 'Teléfono',
      email: 'lahoya@aadidess.com'
    },
    {
      nombre: 'Las Leñas',
      delegado: 'Diego Arnulphi',
      contacto: '+542615393410',
      tipoContacto: 'Whatsapp',
      email: 'laslenas@aadidess.com',
      horario: 'a partir de 18 hs'
    },
    {
      nombre: 'Los Puquios',
      delegado: 'Eduardo Soler',
      contacto: '0261156392757',
      tipoContacto: 'Teléfono',
      email: 'info@puquios.com'
    },
    {
      nombre: 'Perito Moreno',
      delegado: 'Julian Rudolph',
      contacto: '+5492944598858',
      tipoContacto: 'Teléfono',
      email: 'peritomoreno@aadidess.com'
    }
  ];

  filteredDelegaciones = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.delegaciones;
    return this.delegaciones.filter(d =>
      d.nombre.toLowerCase().includes(term) ||
      d.delegado.toLowerCase().includes(term)
    );
  });

  getContactoHref(delegacion: Delegacion): string {
    if (delegacion.tipoContacto === 'Whatsapp') {
      // Limpiar el número: quitar espacios, paréntesis, guiones y el prefijo '+' si ya tiene código de país
      let numero = delegacion.contacto.replace(/[\s\(\)-]/g, '');
      if (numero.startsWith('+')) {
        numero = numero.substring(1);
      }
      return `https://wa.me/${numero}`;
    }
    return `tel:${delegacion.contacto}`;
  }

  getIconName(tipoContacto: string): string {
    return tipoContacto === 'Whatsapp' ? 'chat' : 'call';
  }
}