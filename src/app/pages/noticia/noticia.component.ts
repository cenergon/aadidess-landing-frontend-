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

interface SeccionSubtitulo {
  tipo: 'subtitulo';
  contenido: string;
  orden: number;
}

interface SeccionDestacado {
  tipo: 'destacado';
  titulo?: string;
  contenido: string;
  orden: number;
}

type Seccion =
  | SeccionTexto
  | SeccionLink
  | SeccionLinkGroup
  | SeccionSubtitulo
  | SeccionDestacado;

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
      } else if (bloque.tipo === 'subtitulo') {
        secciones.push({
          tipo: 'subtitulo',
          contenido: bloque.contenido,
          orden: bloque.orden,
        });
        i++;
      } else if (bloque.tipo === 'destacado') {
        secciones.push({
          tipo: 'destacado',
          titulo: bloque.titulo,
          contenido: bloque.contenido,
          orden: bloque.orden,
        });
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

  /**
   * Arma el HTML del bloque: escapa, aplica **negrita** y convierte los
   * renglones que arrancan con "•" en ítems de lista con viñeta de acento.
   */
  procesarTexto(texto: string, claseNegrita = 'negrita-accent'): SafeHtml {
    const lineas = texto.split('\n');
    const html = lineas
      .map((linea, i) => {
        if (/^\s*[•·]\s+/.test(linea)) {
          const item = linea.replace(/^\s*[•·]\s+/, '');
          return `<span class="noticia-detalle__item">${this.formatearInline(item, claseNegrita)}</span>`;
        }
        const contenido = this.formatearInline(linea, claseNegrita);
        return i === lineas.length - 1 ? contenido : `${contenido}<br>`;
      })
      .join('');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  /** Escapa el HTML para evitar XSS y convierte **texto** en negrita. */
  private formatearInline(texto: string, claseNegrita: string): string {
    const escapado = texto
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    return escapado.replace(/\*\*(.*?)\*\*/g, `<strong class="${claseNegrita}">$1</strong>`);
  }
}
