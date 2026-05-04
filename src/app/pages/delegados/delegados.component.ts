import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CerroInfo {
  nombre: string;
  tieneDelegados: boolean;
}

@Component({
  selector: 'app-delegados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delegados.component.html',
  styleUrls: ['./delegados.component.scss']
})
export class DelegadosComponent {
  @ViewChild('delegadosContainer') delegadosContainer!: ElementRef;

  cerroSeleccionado = signal('Bariloche');

  cerros: CerroInfo[] = [
    { nombre: 'Bariloche', tieneDelegados: true },
    { nombre: 'Chapelco', tieneDelegados: true },
    { nombre: 'Las Leñas', tieneDelegados: true },
    { nombre: 'La Hoya', tieneDelegados: true },
    { nombre: 'Bayo', tieneDelegados: true },
    { nombre: 'Castor', tieneDelegados: true },
    { nombre: 'Puquios', tieneDelegados: false },
    { nombre: 'Caviahue', tieneDelegados: true },
    { nombre: 'Pto. Moreno', tieneDelegados: true },
    { nombre: 'Lago Hermoso', tieneDelegados: true },
    { nombre: 'El Azufre', tieneDelegados: false }
  ];

  delegadosPorCerro: Record<string, string[]> = {
    Bariloche: [
      'Arinovich, Roman', 'Bacer, Martín', 'Blanco, Viviana', 'Bozic, Ivo',
      'Bustamante, Ignacio', 'Calello, Pablo', 'Cimorelli, Andrea', 'Dangavs, Cristian',
      'Davies, William', 'Djapic, Ricardo', 'Faccio, Juan Manuel', 'Gimenez, Florencia',
      'Longo, Rodolfo', 'Manzano, Maria', 'Marcaccini, Federico', 'Nabarlaz, Jorge',
      'Olivieri, Justo', 'Pinna, Matthias', 'Pomar, Fernando', 'Taricco, Jorge', 'Runschke, Gabriel',
      'Spitzer, Marco', 'Vecini, Ricardo'
    ],
    Chapelco: [
      'Agüero, Mauro', 'Botanelli, Sebastián', 'Quiroga, Matías',
      'Rodríguez, Luis', 'Ruffini, Franco'
    ],
    'Las Leñas': [
      'Aveni, Dante', 'Bompadre, Emiliano', 'Crespo, Pedro',
      'Margaride, Claudio', 'Margaride, Daniel', 'Martin Barroso, Luciano',
      'Rodriguez Lahitte, Daniel'
    ],
    'La Hoya': ['Costa, María Fernanda', 'Rossi, José María'],
    Bayo: ['Fernández, Santiago', 'Mazza, Santiago', 'Rodaro, Gustavo'],
    Castor: ['Barrera, Pablo', 'Emiliano, Luis', 'Linares, Diego', 'Vergara, Pedro'],
    Puquios: [],
    Caviahue: ['Zuñiga, Néstor'],
    'Pto. Moreno': ['Mazza, Sammy', 'Rudoplh, Julian', 'Solari, Marcelo'],
    'Lago Hermoso': ['Van Ditmar, Keen'],
    'El Azufre': []
  };

  seleccionarCerro(nombre: string) {
    this.cerroSeleccionado.set(nombre);
    // Pequeño timeout para esperar el renderizado del nuevo contenido
    setTimeout(() => {
      this.delegadosContainer?.nativeElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  delegadosActuales(): string[] {
    return this.delegadosPorCerro[this.cerroSeleccionado()] ?? [];
  }
}