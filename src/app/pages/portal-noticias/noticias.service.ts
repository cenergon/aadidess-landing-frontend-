import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NoticiaResumen {
  id: number;
  titulo: string;
  postedAt: string;
  ruta: string;
  resumen: string; // añadido
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private baseUrl = ''; // relativo a public/

  constructor(private http: HttpClient) {}

  getIndice(): Observable<NoticiaResumen[]> {
    return this.http.get<NoticiaResumen[]>(`${this.baseUrl}/news/noticias-index.json`);
  }

  getNoticia(ruta: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${ruta}`);
  }
}