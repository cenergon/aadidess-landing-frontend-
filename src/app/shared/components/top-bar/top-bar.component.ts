import { Component, computed } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  temporadaBaja = computed(() => {
    const hoy = new Date();
    const mes = hoy.getMonth();
    const inicioBaja = new Date(hoy.getFullYear(), 9, 1); // 1 oct
    const finBaja = new Date(hoy.getFullYear() + (mes > 3 ? 1 : 0), 3, 30); // 30 abr
    return hoy >= inicioBaja && hoy <= finBaja;
  });

  horarioTemporada = computed(() =>
    this.temporadaBaja()
      ? 'Lu a Vie de 10 a 14 hs'
      : 'Lu a Vie de 9 a 17 hs'
  );

  textoHorario = computed(() =>
    this.temporadaBaja()
      ? 'Temporada baja (a partir del 1 de octubre). Lu a Vie de 10 a 14 hs'
      : 'Temporada alta. Lu a Vie de 9 a 17 hs'
  );
}