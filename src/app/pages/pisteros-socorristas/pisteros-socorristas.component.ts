import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pisteros-socorristas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pisteros-socorristas.component.html',
  styleUrls: ['./pisteros-socorristas.component.scss']
})
export class PisterosSocorristasComponent {
  private document = inject(DOCUMENT);

  // Imagen principal
  imagenPrincipal = 'images/pisteros/grafico-pistero-01.jpg';

  // Botones de acciones rápidas
  botones = [
    { label: 'Equipo de formadores', link: 'formadores', action: 'scroll' },
    { label: 'Conocé la Carrera', link: 'carrera', action: 'scroll' },
    { label: 'Sponsor', link: '#', action: 'none' },
    { label: 'Titulaciones Operativas', link: 'titulaciones', action: 'scroll' },
    { label: 'Congreso FIPS 2026', link: 'docs/inf.congr_.26.pdf', action: 'pdf' }
  ];

  // Galería 1 - Pisteros
  galeriaPisteros = signal<string[]>([
    'images/pisteros/pisteros01-01.jpg',
    'images/pisteros/pisteros02-01.jpg',
    'images/pisteros/pisteros03-01.jpg',
    'images/pisteros/pisteros04-01.jpg',
    'images/pisteros/pisteros05-01.jpg',
    'images/pisteros/pisteros06-01.jpg',
    'images/pisteros/pisteros07-01.jpg',
    'images/pisteros/pisteros08-01.jpg'
  ]);

  // Galería 2 - FIPS
  galeriaFips = signal<string[]>([
    'images/pisteros/fips/fips01.jpg',
    'images/pisteros/fips/fips02.jpg',
    'images/pisteros/fips/fips03.jpg',
    'images/pisteros/fips/fips04.jpg',
    'images/pisteros/fips/fips05.jpg',
    'images/pisteros/fips/fips06.jpg'
  ]);

  // Estado para primer carrusel
  currentIndexPisteros = signal(0);
  modalOpenPisteros = signal(false);
  modalIndexPisteros = signal(0);

  // Estado para segundo carrusel
  currentIndexFips = signal(0);
  modalOpenFips = signal(false);
  modalIndexFips = signal(0);

  // Getters para primer carrusel
  get currentFotoPisteros(): string {
    return this.galeriaPisteros()[this.currentIndexPisteros()];
  }

  get totalFotosPisteros(): number {
    return this.galeriaPisteros().length;
  }

  // Getters para segundo carrusel
  get currentFotoFips(): string {
    return this.galeriaFips()[this.currentIndexFips()];
  }

  get totalFotosFips(): number {
    return this.galeriaFips().length;
  }

  // Navegación primer carrusel
  nextPisteros(): void {
    this.currentIndexPisteros.set((this.currentIndexPisteros() + 1) % this.totalFotosPisteros);
  }

  prevPisteros(): void {
    this.currentIndexPisteros.set((this.currentIndexPisteros() - 1 + this.totalFotosPisteros) % this.totalFotosPisteros);
  }

  goToPisteros(index: number): void {
    this.currentIndexPisteros.set(index);
  }

  // Navegación segundo carrusel
  nextFips(): void {
    this.currentIndexFips.set((this.currentIndexFips() + 1) % this.totalFotosFips);
  }

  prevFips(): void {
    this.currentIndexFips.set((this.currentIndexFips() - 1 + this.totalFotosFips) % this.totalFotosFips);
  }

  goToFips(index: number): void {
    this.currentIndexFips.set(index);
  }

  // Modal primer carrusel
  openModalPisteros(index: number): void {
    this.modalIndexPisteros.set(index);
    this.modalOpenPisteros.set(true);
    this.document.body.style.overflow = 'hidden';
  }

  closeModalPisteros(): void {
    this.modalOpenPisteros.set(false);
    this.document.body.style.overflow = '';
  }

  nextModalPisteros(): void {
    this.modalIndexPisteros.set((this.modalIndexPisteros() + 1) % this.totalFotosPisteros);
  }

  prevModalPisteros(): void {
    this.modalIndexPisteros.set((this.modalIndexPisteros() - 1 + this.totalFotosPisteros) % this.totalFotosPisteros);
  }

  downloadCurrentPisteros(): void {
    const url = this.galeriaPisteros()[this.modalIndexPisteros()];
    const link = this.document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'pisteros-photo';
    link.click();
  }

  // Modal segundo carrusel
  openModalFips(index: number): void {
    this.modalIndexFips.set(index);
    this.modalOpenFips.set(true);
    this.document.body.style.overflow = 'hidden';
  }

  closeModalFips(): void {
    this.modalOpenFips.set(false);
    this.document.body.style.overflow = '';
  }

  nextModalFips(): void {
    this.modalIndexFips.set((this.modalIndexFips() + 1) % this.totalFotosFips);
  }

  prevModalFips(): void {
    this.modalIndexFips.set((this.modalIndexFips() - 1 + this.totalFotosFips) % this.totalFotosFips);
  }

  downloadCurrentFips(): void {
    const url = this.galeriaFips()[this.modalIndexFips()];
    const link = this.document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'fips-photo';
    link.click();
  }

  getFotoUrl(foto: string): string {
    return foto;
  }

  // Acciones de botones
  onBotonesClick(btn: { label: string; link: string; action: string }): void {
    switch (btn.action) {
      case 'scroll':
        this.scrollToSection(btn.link);
        break;
      case 'pdf':
        window.open(btn.link, '_blank');
        break;
      default:
        console.log(`Botón clickeado: ${btn.label}`);
    }
  }

  private scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onDescargarProtocolo(): void {
    console.log('Descargar Protocolo - placeholder');
    // Aquí irá la lógica de descarga cuando la definas
  }
}