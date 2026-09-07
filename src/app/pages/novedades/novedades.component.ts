import { Component, computed, inject, signal } from '@angular/core';
import Fuse from 'fuse.js';
import { NovedadesService, Novedad } from './novedades.service';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [],
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss'],
})
export class NovedadesComponent {
  titulo = 'Novedades';
  descripcion = 'Enterate de las últimas novedades de AADIDESS.';

  query = signal('');

  private novedadesService = inject(NovedadesService);
  private novedades: Novedad[] = this.novedadesService.getNovedades();

  private fuse = new Fuse(this.novedades, {
    keys: ['titulo', 'resumen', 'tags'],
    threshold: 0.4,
    ignoreLocation: true,
    ignoreDiacritics: true,
  });

  resultados = computed<Novedad[]>(() => {
    const q = this.query().trim();
    if (!q) {
      return this.novedades;
    }
    return this.fuse.search(q).map(({ item }) => item);
  });
}
