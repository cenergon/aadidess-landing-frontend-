import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoticiasService, NoticiaResumen } from './noticias.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-portal-de-noticias',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerComponent],
  templateUrl: './portal-de-noticias.component.html',
  styleUrls: ['./portal-de-noticias.component.scss']
})
export class PortalDeNoticiasComponent implements OnInit {
  noticias: NoticiaResumen[] = [];
  cargando = true;

  constructor(private noticiasService: NoticiasService,
              private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.noticiasService.getIndice().subscribe({
      next: (data) => {
        // Ordenar por postedAt descendente (más reciente primero)
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
}