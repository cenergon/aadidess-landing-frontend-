import { Injectable } from '@angular/core';

export interface Novedad {
  id: number;
  titulo: string;
  resumen: string;
  imagen: string;
  link: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class NovedadesService {
  // Array estático temporal: cuando exista backend/token de Instagram,
  // este método pasará a ser un http.get sin tocar los componentes.
  private novedades: Novedad[] = [
    {
      id: 1,
      titulo: 'Trabajar en Andorra – Temporada 2026',
      resumen: 'Reunión informativa · 9 de septiembre · 17 hs · APRES Cerro Catedral',
      imagen: 'images/novedades/apres-catedral-andorra-2026.png',
      link: 'https://www.instagram.com/p/Dc7KgUKgRor/',
      tags: ['andorra', 'apres', 'catedral', 'instructores', 'pisteros'],
    },
    {
      id: 2,
      titulo: 'ISIA Test 2026 – Cerro Catedral',
      resumen: 'Única fecha · 14 de septiembre · Pista Patagónico · inscripción hasta el 10/9',
      imagen: 'images/novedades/isia-test-cerro-catedral-2026.png',
      link: 'https://www.instagram.com/p/DcynkU8TxIu/',
      tags: ['isia', 'test', 'catedral', 'pisteros', 'instrucción'],
    },
  ];

  getNovedades(): Novedad[] {
    return this.novedades;
  }
}
