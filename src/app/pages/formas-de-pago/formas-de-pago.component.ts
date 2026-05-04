import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  copiadoId = signal<string | null>(null);
  currentTheme = signal<string>('light'); // 'light' o 'dark'

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
      svg: 'svgs/banco-macro.svg'
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
      svg: 'svgs/banco-macro.svg',
      titulo: 'Macro Click',
      descripcion: 'Si sos cliente de Banco Macro podrás abonar con Macro Click con el link de pago generado por AADIDESS y aprovechar así de los beneficios otorgados por esta entidad bancaria a nuestros asociados.',
      badge: '¡NUEVO!'
    },
    {
      svg: 'svgs/mercado-pago.svg',
      titulo: 'Mercado Pago',
      descripcion: 'Podrás pagar por este medio todas las inscripciones que se realizan a través de nuestra página y campus.',
      badge: '¡NUEVO!'
    }
  ];

  ngOnInit(): void {
    // Tomar el valor inicial del atributo data-theme
    const initial = document.documentElement.getAttribute('data-theme') || 'light';
    this.currentTheme.set(initial);
    window.addEventListener('theme-changed', this.themeListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('theme-changed', this.themeListener);
  }

  getBancoLogoSrc(banco: Banco): string {
    if (this.currentTheme() === 'dark' && banco.banco === 'Banco Macro') {
      return 'svgs/macro-blanco.svg';
    }
    return banco.svg;
  }

  getDestacadoSvg(destacado: Destacado): string {
    if (this.currentTheme() === 'dark' && destacado.titulo === 'Macro Click') {
      return 'svgs/macro-blanco.svg';
    }
    return destacado.svg;
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