import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoticiasService, NoticiaResumen } from '../../pages/portal-noticias/noticias.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-ultimas-noticias',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerComponent],
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.scss']
})
export class UltimasNoticiasComponent implements OnInit {
  noticias: NoticiaResumen[] = [];
  cargando = true;

  constructor(
    private noticiasService: NoticiasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.noticiasService.getIndice().subscribe({
      next: (data) => {
        const ordenadas = data.sort((a, b) =>
          new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        );
        this.noticias = ordenadas.slice(0, 3);
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar últimas noticias', err);
        this.cargando = false;
        this.cdr.detectChanges();
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
}