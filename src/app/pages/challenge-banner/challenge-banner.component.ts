import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-challenge-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './challenge-banner.component.html',
  styleUrls: ['./challenge-banner.component.scss'],
})
export class ChallengeBannerComponent {
  @Input() route: string = '/challenge';
  @Input() titulo: string = 'Hacemos posible la montaña.';
  @Input() subtitulo: string =
    'Deporte adaptado en la Patagonia. Esquí, trekking y ciclismo para que más personas vivan la montaña durante todo el año.';
  @Input() textoBoton: string = 'Conocé Challenge';
}
