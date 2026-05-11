import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NoticiaResumen {
  id: number;
  titulo: string;
  postedAt: string;
  ruta: string;
  resumen: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // No es necesario especificar una base absoluta
  // private baseUrl = '';

  constructor(private http: HttpClient) {}

  getIndice(): Observable<NoticiaResumen[]> {
    // Ruta relativa: se basará en el <base href="/2026/">
    return this.http.get<NoticiaResumen[]>(`news/noticias-index.json`);
  }

  getNoticia(ruta: string): Observable<any> {
    // Asegúrate de que `ruta` también sea relativa
    return this.http.get(`${ruta}`);
  }
}