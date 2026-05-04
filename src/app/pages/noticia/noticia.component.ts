import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoticiasService, NoticiaResumen } from '../portal-noticias/noticias.service';
import { Noticia } from '../../interfaces/models/noticias.interface';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerComponent],
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  noticia: Noticia | null = null;
  cargando = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.error = true;
      this.cargando = false;
      this.cdr.detectChanges();
      return;
    }

    this.noticiasService.getIndice().subscribe({
      next: (indice) => {
        const resumen = indice.find(n => n.id === id);
        if (!resumen) {
          this.error = true;
          this.cargando = false;
          this.cdr.detectChanges();
          return;
        }
        this.cargarNoticia(resumen);
      },
      error: () => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  private cargarNoticia(resumen: NoticiaResumen): void {
    this.noticiasService.getNoticia(resumen.ruta).subscribe({
      next: (data: Noticia) => {
        this.noticia = data;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  formatearFecha(iso: string): string {
    const fecha = new Date(iso);
    return fecha.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
}