import { Component, signal, computed, OnDestroy, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  titulo: string;
  subtitulo: string;
  textoBoton: string;
  link: string;
  imagen: string;
}

@Component({
  selector: 'app-hero-banner-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-banner-home.component.html',
  styleUrls: ['./hero-banner-home.component.scss']
})
export class HeroBannerHomeComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      titulo: 'Cursos',
      subtitulo: 'Conocé nuestra oferta académica',
      textoBoton: 'Más Info',
      link: '/academico/cursos',
      imagen: 'images/hero-banner/AADIDESS-Homepage-Slide-Cursos-scaled.jpg'
    },
    {
      titulo: 'Sponsors',
      subtitulo: 'Conocé nuestros sponsors',
      textoBoton: 'Más Info',
      link: '/institucional/sponsors',
      imagen: 'images/hero-banner/slide-macro.jpg'
    },
    {
      titulo: '¿Por qué ser Socio?',
      subtitulo: 'Descubrí los beneficios de asociarte',
      textoBoton: 'Más Info',
      link: '/socios/por-que-ser-socio',
      imagen: 'images/hero-banner/slide-cursos-.jpg'
    }
  ];

  currentIndex = signal(0);
  private autoplayInterval?: ReturnType<typeof setInterval>;

  // Swipe con mouse
  private isMouseDown = false;
  private startX = 0;
  private currentTranslate = 0;

  private totalSlides = computed(() => this.slides.length);

  ngOnInit(): void {
    this.iniciarAutoplay();
  }

  ngOnDestroy(): void {
    this.detenerAutoplay();
  }

  private iniciarAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 6500);
  }

  private detenerAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  goToSlide(index: number): void {
    if (index === this.currentIndex()) return;
    this.currentIndex.set(index);
    this.reiniciarAutoplay();
  }

  prevSlide(): void {
    const prev = (this.currentIndex() - 1 + this.totalSlides()) % this.totalSlides();
    this.currentIndex.set(prev);
    this.reiniciarAutoplay();
  }

  nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.totalSlides();
    this.currentIndex.set(next);
    this.reiniciarAutoplay();
  }

  private reiniciarAutoplay(): void {
    this.detenerAutoplay();
    this.iniciarAutoplay();
  }

  // ----- Swipe con mouse -----
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    // No iniciar swipe si se hizo clic en un botón o dot
    const target = event.target as HTMLElement;
    if (target.closest('button, a, .hero-banner__contenido')) return;

    this.isMouseDown = true;
    this.startX = event.clientX;
    this.currentTranslate = 0;
    event.preventDefault(); // evita selección de texto
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isMouseDown) return;
    this.currentTranslate = event.clientX - this.startX;
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    if (!this.isMouseDown) return;
    this.isMouseDown = false;
    const threshold = 50;
    if (Math.abs(this.currentTranslate) > threshold) {
      if (this.currentTranslate < 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
    this.currentTranslate = 0;
  }

  // ----- Swipe con touch -----
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('button, a, .hero-banner__contenido')) return;

    this.startX = event.touches[0].clientX;
    this.currentTranslate = 0;
    this.isMouseDown = true; // mismo flag
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (!this.isMouseDown) return;
    this.currentTranslate = event.touches[0].clientX - this.startX;
  }

  @HostListener('window:touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    if (!this.isMouseDown) return;
    this.isMouseDown = false;
    const threshold = 50;
    if (Math.abs(this.currentTranslate) > threshold) {
      if (this.currentTranslate < 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
    this.currentTranslate = 0;
  }
}