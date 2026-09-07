import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NovedadesService, Novedad } from '../novedades/novedades.service';

@Component({
  selector: 'app-novedades-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './novedades-banner.component.html',
  styleUrls: ['./novedades-banner.component.scss'],
})
export class NovedadesBannerComponent {
  novedades: Novedad[] = [];
  placeholders = Array.from({ length: 3 }, (_, i) => i);

  constructor(private novedadesService: NovedadesService) {
    this.novedades = this.novedadesService.getNovedades();
  }
}
