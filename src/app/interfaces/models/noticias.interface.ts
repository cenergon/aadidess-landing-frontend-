export interface BloqueTexto {
  tipo: 'texto';
  orden: number;
  contenido: string; // texto plano, sin HTML
}

export interface BloqueLink {
  tipo: 'link';
  orden: number;
  texto: string; // etiqueta visible del enlace
  url: string;
  esPdf?: boolean; // opcional, para indicar si abre PDF
}

export type Bloque = BloqueTexto | BloqueLink;

export interface Noticia {
  id: number;
  titulo: string;
  postedAt: string; // ISO 8601 (ej: "2026-04-16T13:01:00-03:00")
  createdAt: string; // idem, fecha en que se agregó al sistema
  bloques: Bloque[];
}