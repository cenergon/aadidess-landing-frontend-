import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoticiasService, NoticiaResumen } from '../portal-noticias/noticias.service';
import { Noticia, Bloque, BloqueTexto, BloqueLink } from '../../interfaces/models/noticias.interface';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SeccionTexto {
  tipo: 'texto';
  contenido: string;
  orden: number;
}

interface SeccionLink {
  tipo: 'link';
  bloque: BloqueLink;
}

interface SeccionLinkGroup {
  tipo: 'link-group';
  links: BloqueLink[];
}

type Seccion = SeccionTexto | SeccionLink | SeccionLinkGroup;

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
  secciones: Seccion[] = [];

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
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
        this.secciones = this.procesarBloques(data.bloques);
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

  private procesarBloques(bloques: Bloque[]): Seccion[] {
    const secciones: Seccion[] = [];
    let i = 0;
    while (i < bloques.length) {
      const bloque = bloques[i];
      if (bloque.tipo === 'texto') {
        secciones.push({ tipo: 'texto', contenido: bloque.contenido, orden: bloque.orden });
        i++;
      } else {
        // Agrupar links consecutivos
        const links: BloqueLink[] = [bloque as BloqueLink];
        i++;
        while (i < bloques.length && bloques[i].tipo === 'link') {
          links.push(bloques[i] as BloqueLink);
          i++;
        }
        if (links.length === 1) {
          secciones.push({ tipo: 'link', bloque: links[0] });
        } else {
          secciones.push({ tipo: 'link-group', links });
        }
      }
    }
    return secciones;
  }

  formatearFecha(iso: string): string {
    const fecha = new Date(iso);
    return fecha.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  procesarTexto(texto: string): SafeHtml {
    // 1. Escapar todo el HTML para evitar XSS
    let escapado = texto
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    // 2. Convertir la marca **...** en <strong class="negrita-accent">...</strong>
    const conNegrita = escapado.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="negrita-accent">$1</strong>'
    );
    // 3. Convertir saltos de línea en <br> para que respeten los \n del JSON
    const conSaltos = conNegrita.replace(/\n/g, '<br>');
    // 4. Devolver como HTML seguro
    return this.sanitizer.bypassSecurityTrustHtml(conSaltos);
  }
}