import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoticiasService, NoticiaResumen } from './noticias.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portal-de-noticias',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerComponent, FormsModule],
  templateUrl: './portal-de-noticias.component.html',
  styleUrls: ['./portal-de-noticias.component.scss']
})
export class PortalDeNoticiasComponent implements OnInit {
  noticias: NoticiaResumen[] = [];
  cargando = true;

  // Buscador
  searchText = '';
  searchResults: number[] = [];
  currentResultIndex = -1;
  activeNoticiaId: number | null = null;

  @ViewChildren('cardElement', { read: ElementRef }) cardElements!: QueryList<ElementRef>;

  constructor(private noticiasService: NoticiasService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.noticiasService.getIndice().subscribe({
      next: (data) => {
        this.noticias = data.sort((a, b) =>
          new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        );
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar el índice de noticias', err);
        this.cargando = false;
      }
    });
  }

  formatearFecha(iso: string): string {
    const fecha = new Date(iso);
    return fecha.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  // ----- Métodos del buscador -----
  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  performSearch(): void {
    const query = this.normalizeText(this.searchText || '');
    if (!query) {
      this.searchResults = [];
      this.currentResultIndex = -1;
      this.activeNoticiaId = null;
      return;
    }

    this.searchResults = this.noticias
      .map((n, idx) => ({ idx, normalized: this.normalizeText(n.titulo) }))
      .filter(item => item.normalized.includes(query))
      .map(item => item.idx);

    if (this.searchResults.length > 0) {
      this.currentResultIndex = 0;
      this.goToCurrentResult();
    } else {
      this.currentResultIndex = -1;
      this.activeNoticiaId = null;
    }
  }

  nextResult(): void {
    if (this.searchResults.length === 0) return;
    this.currentResultIndex = (this.currentResultIndex + 1) % this.searchResults.length;
    this.goToCurrentResult();
  }

  previousResult(): void {
    if (this.searchResults.length === 0) return;
    this.currentResultIndex = (this.currentResultIndex - 1 + this.searchResults.length) % this.searchResults.length;
    this.goToCurrentResult();
  }

  private goToCurrentResult(): void {
    const noticiaIndex = this.searchResults[this.currentResultIndex];
    this.activeNoticiaId = this.noticias[noticiaIndex].id;
    setTimeout(() => {
      const cardEl = this.cardElements?.get(noticiaIndex)?.nativeElement;
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}