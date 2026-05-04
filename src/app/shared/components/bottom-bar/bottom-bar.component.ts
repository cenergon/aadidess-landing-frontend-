import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  abrirEnlace(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}