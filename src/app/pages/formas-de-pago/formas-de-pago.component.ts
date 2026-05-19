import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Banco {
  banco: string;
  tipoCuenta: string;
  cbu: string;
  cuit: string;
  alias: string;
  svg: string;
}

interface Destacado {
  svg: string;
  titulo: string;
  descripcion: string;
  descripcionHtml?: string;
  badge: string;
}

@Component({
  selector: 'app-formas-de-pago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formas-de-pago.component.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class FormasDePagoComponent implements OnInit, OnDestroy {
  private sanitizer = inject(DomSanitizer);

  copiadoId = signal<string | null>(null);
  currentTheme = signal<string>('light');

  private themeListener: (e: Event) => void;

  constructor() {
    this.themeListener = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      this.currentTheme.set(detail.theme || 'light');
    };
  }

  bancos: Banco[] = [
    {
      banco: 'Banco Macro',
      tipoCuenta: 'Cuenta Corriente',
      cbu: '2850662930094217735951',
      cuit: '30-65656626-0',
      alias: 'aadidess.macro',
      svg: 'images/logos/macro-azul.png'
    },
    {
      banco: 'Banco Galicia',
      tipoCuenta: 'Cuenta Corriente en pesos',
      cbu: '0070031320000007384664',
      cuit: '30-65656626-0',
      alias: 'aadidess.galicia',
      svg: 'svgs/banco-galicia.svg'
    },
    {
      banco: 'Banco Patagonia',
      tipoCuenta: 'Cuenta Corriente en pesos',
      cbu: '0340255100122873547001',
      cuit: '30-65656626-0',
      alias: 'aadidess',
      svg: 'svgs/banco-patagonia.svg'
    }
  ];

  destacados: Destacado[] = [
    {
      svg: 'images/logos/macro-azul.png',
      titulo: 'Macro Click',
      descripcion: 'Si sos cliente de Banco Macro podrás abonar con Macro Click con el link de pago generado por AADIDESS y aprovechar así de los beneficios otorgados por esta entidad bancaria a nuestros asociados.',
      badge: '¡NUEVO!'
    },
    {
      svg: 'images/logos/macroselecta-negro.png',
      titulo: 'VISA Selecta (Banco Macro)',
      descripcion: 'Hasta 12 cuotas sin interés abonando con tu tarjeta de crédito VISA Selecta del Banco Macro. Válido del 01/06/2026 al 30/09/2026 únicamente para pagos de forma presencial con tu tarjeta física en nuestra oficina central (Morales 483, PB, S.C. de Bariloche), o por teléfono al (+54) 294 442-8789 o al 294 443-6072, de lunes a viernes de 10 a 14 hs.',
      descripcionHtml: 'Hasta 12 cuotas sin interés abonando con tu tarjeta de crédito VISA Selecta del Banco Macro. Válido del 01/06/2026 al 30/09/2026 únicamente para pagos de forma presencial con tu tarjeta física en nuestra oficina central (<a href="https://maps.app.goo.gl/iXJ4aW5uWAtaQ5Zh7" target="_blank" rel="noopener noreferrer">Morales 483, PB, S.C. de Bariloche</a>), o por teléfono al <a href="tel:+542944428789">(+54) 294 442-8789</a> o al <a href="tel:+542944436072">(+54) 294 443-6072</a>, de lunes a viernes de 10 a 14 hs.',
      badge: '¡NUEVO!'
    }
  ];

  ngOnInit(): void {
    const initial = document.documentElement.getAttribute('data-theme') || 'light';
    this.currentTheme.set(initial);
    window.addEventListener('theme-changed', this.themeListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('theme-changed', this.themeListener);
  }

  getBancoLogoSrc(banco: Banco): string {
    if (this.currentTheme() === 'dark' && banco.banco === 'Banco Macro') {
      return 'images/logos/macro-blanco.png';
    }
    return banco.svg;
  }

  getDestacadoSvg(destacado: Destacado): string {
    if (this.currentTheme() === 'dark' && destacado.titulo === 'Macro Click') {
      return 'images/logos/macro-blanco.png';
    }
    if (this.currentTheme() === 'dark' && destacado.titulo === 'VISA Selecta (Banco Macro)') {
      return 'images/logos/macroselecta-blanco.png';
    }
    return destacado.svg;
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  async copiarTexto(texto: string, id: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = texto;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this.copiadoId.set(id);
    setTimeout(() => this.copiadoId.set(null), 1500);
  }
}