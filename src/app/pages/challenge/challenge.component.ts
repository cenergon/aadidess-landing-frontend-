import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Disciplina {
  icono: string;
  titulo: string;
  texto: string;
}

interface Clip {
  src: string;
  poster: string;
  titulo: string;
}

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent {
  readonly disciplinas: Disciplina[] = [
    {
      icono: 'downhill_skiing',
      titulo: 'Esquí adaptado',
      texto:
        'La nieve, la velocidad, el aprendizaje y la emoción de descubrir nuevas posibilidades.',
    },
    {
      icono: 'hiking',
      titulo: 'Trekking adaptado',
      texto:
        'Senderos, bosque y montaña. Experiencias pensadas para conectar con la naturaleza y disfrutar el camino.',
    },
    {
      icono: 'pedal_bike',
      titulo: 'Ciclismo adaptado / tándem',
      texto:
        'Movimiento, autonomía y aventura sobre ruedas, con equipamiento y acompañamiento especializado.',
    },
  ];

  readonly comunidad: string[] = [
    'Alumnos',
    'Familias',
    'Instructores',
    'Voluntarios',
    'Instituciones',
    'Empresas',
  ];

  readonly acciones: string[] = [
    'Quiero participar',
    'Quiero ser voluntario',
    'Quiero colaborar',
    'Quiero apoyar a Challenge',
  ];

  readonly presentacionUrl = 'docs/presentacion-fundacion-challenge.pdf';

  readonly clips: Clip[] = [
    {
      src: 'videos/challenge/clip-esqui.mp4',
      poster: 'videos/challenge/clip-esqui.jpg',
      titulo: 'Esquí adaptado',
    },
    {
      src: 'videos/challenge/clip-descenso.mp4',
      poster: 'videos/challenge/clip-descenso.jpg',
      titulo: 'En la nieve',
    },
    {
      src: 'videos/challenge/clip-ciclismo.mp4',
      poster: 'videos/challenge/clip-ciclismo.jpg',
      titulo: 'Ciclismo adaptado',
    },
  ];
}
