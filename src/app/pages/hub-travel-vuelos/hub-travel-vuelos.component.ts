import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hub-travel-vuelos',
  standalone: true,
  template: `<div class="formAereos"></div>`,
  styles: []
})
export class HubTravelVuelosComponent implements OnInit, OnDestroy {
  private scriptElement: HTMLScriptElement | null = null;

  ngOnInit(): void {
    this.loadExternalScript();
  }

  ngOnDestroy(): void {
    // Limpiamos el script y el contenedor al salir del componente
    const container = document.querySelector('.formAereos');
    if (container) {
      container.innerHTML = '';
    }
    if (this.scriptElement && document.body.contains(this.scriptElement)) {
      document.body.removeChild(this.scriptElement);
    }
  }

  private loadExternalScript(): void {
    // Evita cargar el script múltiples veces si el componente se recrea
    if (document.getElementById('aereos-buscador-script')) {
      return;
    }

    this.scriptElement = document.createElement('script');
    this.scriptElement.id = 'aereos-buscador-script';
    this.scriptElement.src = 'https://reservas.aereos.app/aereos.app.min.js';
    this.scriptElement.type = 'text/javascript';
    this.scriptElement.async = true;

    this.scriptElement.onload = () => {
      console.log('Script de Aereos cargado. El iframe debería aparecer.');
    };

    this.scriptElement.onerror = () => {
      console.error('Error al cargar el script de Aereos.');
    };

    document.body.appendChild(this.scriptElement);
  }
}