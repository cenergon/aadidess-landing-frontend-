import { Component, signal, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ArancelItem {
  descripcion: string;
  precio: string;
}

interface CategoriaArancel {
  nombre: string;
  items: ArancelItem[];
}

@Component({
  selector: 'app-aranceles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aranceles.component.html',
  styleUrls: ['./aranceles.component.scss']
})
export class ArancelesComponent {
  @ViewChildren('categoriaDiv') categoriasDivs!: QueryList<ElementRef>;

  categoriasExpandidas = signal<Set<number>>(new Set());

  categorias: CategoriaArancel[] = [
    {
      nombre: 'Aranceles por Módulo',
      items: [
        { descripcion: 'Examen Ingreso Nivel 1, 2, 3, 4 y niños', precio: '$ 69.500,00' },
        { descripcion: 'Pistero Socorrista', precio: '$ 57.300,00' },
        { descripcion: 'Clínica Pre Ingreso Nivel 1, 2 y 3', precio: '$ 369.400,00' },
        { descripcion: 'Skiman', precio: '$ 844.000,00' },
        { descripcion: 'Niños 1 semana', precio: '$ 1.249.700,00' },
        { descripcion: 'Online Nivel 1', precio: '$ 1.262.000,00' },
        { descripcion: 'Pista Nivel 1', precio: '$ 1.952.000,00' },
        { descripcion: 'Online Nivel 2', precio: '$ 1.681.000,00' },
        { descripcion: 'Pista Nivel 2', precio: '$ 2.055.000,00' },
        { descripcion: 'Bloque Nivel 2 (son 3 bloques)', precio: '$ 685.300,00' },
        { descripcion: 'Online Nivel 3', precio: '$ 1.566.350,00' },
        { descripcion: 'Pista Nivel 3', precio: '$ 1.914.350,00' },
        { descripcion: 'Bloque Nivel 3 (son 3 bloques)', precio: '$ 638.000,00' },
        { descripcion: 'Nivel 4 Demo Esquí', precio: '$ 881.200,00' },
        { descripcion: 'Examen Tecnico libre 4 año', precio: '$ 746.200,00' },
        { descripcion: 'Nivel 5', precio: '$ 1.125.000,00' },
        { descripcion: 'Pistero Socorrista 1º grado', precio: '$ 2.287.500,00' },
        { descripcion: 'Pistero Socorrista 2º grado', precio: '$ 1.955.600,00' },
        { descripcion: 'Entrenador de Club', precio: 'A confirmar' },
        { descripcion: 'Entrenador Nacional', precio: 'A confirmar' },
        { descripcion: 'Fondo Nivel 1', precio: 'A confirmar' },
        { descripcion: 'Adaptado Nivel 1', precio: 'A confirmar' },
        { descripcion: 'Auxiliar de centro de esquí', precio: '$ 206.300,00' },
      ]
    },
    {
      nombre: 'Recursado por Módulo',
      items: [
        { descripcion: 'Nivel 1', precio: '$ 590.000,00' },
        { descripcion: 'Nivel 2', precio: '$ 1.087.500,00' },
        { descripcion: 'Nivel 3', precio: '$ 975.000,00' },
        { descripcion: 'Nivel 4', precio: '$ 736.900,00' },
      ]
    },
    {
      nombre: 'Reentrenamientos',
      items: [
        { descripcion: 'Reentreno', precio: '$ 337.500,00' },
        { descripcion: 'Reentreno Nivel 1 al día', precio: '$ 271.900,00' },
        { descripcion: 'Reentreno Nivel 2 al día', precio: '$ 206.250,00' },
        { descripcion: 'Reentreno Nivel 3 al día', precio: '$ 105.000,00' },
        { descripcion: 'Reentreno fuera de Término', precio: '$ 445.000,00' },
        { descripcion: 'Reentreno Pistero', precio: '$ 656.300,00' },
        { descripcion: 'Reentreno Pistero al dia', precio: '$ 223.150,00' },
        { descripcion: 'Convalidacion', precio: '$ 95.000,00' },
      ]
    },
    {
      nombre: 'Cuotas Societarias',
      items: [
        { descripcion: 'hasta el 30/06 inclusive (15% de descuento)', precio: '$ 127.500,00' },
        { descripcion: 'desde el 01/07 en adelante', precio: '$ 150.000,00' },
        { descripcion: 'Moratoria', precio: '$450.000,00' },
        { descripcion: 'Pistero socorrista', precio: '$ 75.000,00' },
      ]
    }
  ];

  toggleCategoria(index: number): void {
    const expandidas = new Set(this.categoriasExpandidas());
    if (expandidas.has(index)) {
      expandidas.delete(index);
    } else {
      expandidas.add(index);
      // Scroll suave hacia la categoría que se está expandiendo
      setTimeout(() => {
        const divs = this.categoriasDivs.toArray();
        if (divs[index]) {
          divs[index].nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 0);
    }
    this.categoriasExpandidas.set(expandidas);
  }

  isExpanded(index: number): boolean {
    return this.categoriasExpandidas().has(index);
  }
}