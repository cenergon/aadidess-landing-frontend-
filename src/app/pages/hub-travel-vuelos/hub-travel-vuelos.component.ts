import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hub-travel-vuelos',
  standalone: true,
  templateUrl: './hub-travel-vuelos.component.html',
  styleUrls: ['./hub-travel-vuelos.component.scss']
})
export class HubTravelVuelosComponent implements OnInit {
  urlSegura!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // 👇 Ahora apunta a la carpeta public
    const rutaLocal = '/external-forms/formulario-vuelos.html';
    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(rutaLocal);
  }
}