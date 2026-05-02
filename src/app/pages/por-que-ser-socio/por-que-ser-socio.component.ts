import { Component } from '@angular/core';

@Component({
  selector: 'app-por-que-ser-socio',
  standalone: true,
  imports: [],
  templateUrl: './por-que-ser-socio.component.html',
  styleUrls: ['./por-que-ser-socio.component.scss']
})
export class PorQueSerSocioComponent {
  titulo = '¿Por qué ser socio?';
  parrafos = [
    'Ser socio de AADIDESS es un requisito para poder participar activamente en las oportunidades que ofrecemos a los profesionales.',
    'Solo quienes están asociados pueden acceder a nuestros cursos, reentrenamientos, y demás actividades académicas, como así también a todos los beneficios que surgen de los convenios que firmamos con otras instituciones y acuerdos comerciales con marcas y empresas.',
    'Además, ser socio significa formar parte de una comunidad comprometida con el desarrollo profesional, la actualización constante y el fortalecimiento del sector, bajo los más altos estándares internacionales. En este sentido, recordamos que nuestra institución es parte de organizaciones internacionales que nuclean a los máximos países y asociaciones referentes en el sector que nos compete: ISIA, Interski International, IVSI y FIPS.',
    'La cuota anual societaria no es solo un aporte económico: es una forma de sostener este espacio que trabajamos entre todos, y de asegurar que cada vez podamos ofrecer más y mejores propuestas para todos los que forman parte de AADIDESS, con proyección nacional e internacional.'
  ];
}