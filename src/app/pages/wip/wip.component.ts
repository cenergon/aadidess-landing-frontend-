import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wip',
  standalone: true,
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.scss']
})
export class WipComponent {
  @Input() titulo = 'Estamos trabajando para usted';
  @Input() mensaje = 'Esta sección estará disponible próximamente. Disculpe las molestias.';
}