import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-team.component.html',
  styleUrls: ['./demo-team.component.scss']
})
export class DemoTeamComponent {
  staffFoto = 'images/demo-team/fotos-demo-team-4-6_Mesa-de-trabajo-1-copia-scaled.jpg';

  galeriaFotos = signal<string[]>([
    'images/demo-team/ROD05959.png',
    'images/demo-team/ROD05995-1.png',
    'images/demo-team/ROD05911-1.png',
    'images/demo-team/ROD05961.png',
    'images/demo-team/ROD06009-1.png',
    'images/demo-team/ROD05912-1.png',
    'images/demo-team/ROD05969.png',
    'images/demo-team/ROD06013.png',
    'images/demo-team/ROD05924.png',
    'images/demo-team/ROD05973.png',
    'images/demo-team/ROD06042.png',
    'images/demo-team/ROD05925-1.png',
    'images/demo-team/ROD05976.png',
    'images/demo-team/ROD06060.png',
    'images/demo-team/ROD05926.png',
    'images/demo-team/ROD05979.png',
    'images/demo-team/ROD06065.png',
    'images/demo-team/ROD05938.png',
    'images/demo-team/ROD05980.png',
    'images/demo-team/ROD06083.png',
    'images/demo-team/ROD05939.png',
    'images/demo-team/ROD05985.png',
    'images/demo-team/ROD06092.png',
    'images/demo-team/ROD05946-1.png',
    'images/demo-team/ROD05987.png',
    'images/demo-team/ROD06425-1-scaled.jpg',
    'images/demo-team/ROD05951.png',
    'images/demo-team/ROD05992.png',
    'images/demo-team/ROD05910.png',
  ]);

  // Acciones rápidas (chips)
  accionesRapidas = [
    { label: 'Condiciones de participación', link: 'docs/Condiciones_de_participacion_Demo_Team_AADDESS.pdf', action: 'pdf' }
  ];

  currentIndex = signal(0);
  modalOpen = signal(false);
  modalIndex = signal(0);

  get currentFoto(): string {
    return this.galeriaFotos()[this.currentIndex()];
  }

  get totalFotos(): number {
    return this.galeriaFotos().length;
  }

  next(): void {
    this.currentIndex.set((this.currentIndex() + 1) % this.totalFotos);
  }

  prev(): void {
    this.currentIndex.set((this.currentIndex() - 1 + this.totalFotos) % this.totalFotos);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }

  // Acciones de botones
  onAccionClick(accion: { label: string; link: string; action: string }): void {
    if (accion.action === 'pdf') {
      window.open(accion.link, '_blank');
    }
  }

  // Modal
  openModal(index: number): void {
    this.modalIndex.set(index);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen.set(false);
    document.body.style.overflow = '';
  }

  nextModal(): void {
    this.modalIndex.set((this.modalIndex() + 1) % this.totalFotos);
  }

  prevModal(): void {
    this.modalIndex.set((this.modalIndex() - 1 + this.totalFotos) % this.totalFotos);
  }

  downloadCurrentImage(): void {
    const url = this.galeriaFotos()[this.modalIndex()];
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'demo-team-photo';
    link.click();
  }

  getFotoUrl(foto: string): string {
    return foto;
  }
}