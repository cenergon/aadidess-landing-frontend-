import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Articulo {
  id: number;
  titulo: string;
  contenidoHtml: string;
}

@Component({
  selector: 'app-reglamento-academico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reglamento-academico.component.html',
  styleUrls: ['./reglamento-academico.component.scss']
})
export class ReglamentoAcademicoComponent {
  articulos: Articulo[] = [
    {
      id: 0,
      titulo: 'Introducción',
      contenidoHtml: `<p>El presente Reglamento Académico reúne toda la información impartida por el ISES (Instituto Superior de Esquí y Snowboard), parte de AADIDESS y a cargo del desarrollo de los cursos, para poner en conocimiento a los alumnos y el equipo académico sobre requisitos, derechos, obligaciones y demás aspectos de interés sobre la institución y los cursos.</p>`
    },
    {
      id: 1,
      titulo: 'Artículo 1: Finalidad',
      contenidoHtml: `<p>La finalidad del Instituto Superior de Esquí y Snowboard es la de formar profesionales especializados en la enseñanza del esquí, snowboard y pisteros socorristas, con el objeto de generar dentro de la industria y del turismo invernal la prestación de servicios de primera calidad utilizando técnicas y metodologías actualizadas.</p>`
    },
    {
      id: 2,
      titulo: 'Artículo 2: Gobierno del I.S.E.S. y Delegados Académicos',
      contenidoHtml: `<p>El gobierno del I.S.E.S. es ejercido por el Consejo Académico.</p><p>El órgano ejecutivo es ejercido por un Director designado por la Comisión Directiva de la Asociación.</p><p>Los Delegados Académicos son los representantes del I.S.E.S. en cada Delegación.</p>`
    },
    {
      id: 3,
      titulo: 'Artículo 3: Derechos y Obligaciones del cursante',
      contenidoHtml: `
        <p>Todo cursante de cualquier evento académico tiene el derecho y la obligación de saber, aplicar y respetar el presente Reglamento Académico y las normas de la I.S.I.A. (International Ski Instructors Association).</p>
        <p>Cada cursante debe informarse sobre el desarrollo académico leyendo el Plan de Estudios, el Calendario Académico y las Preguntas Frecuentes que figuran en la página <a href="http://www.aadidess.com" target="_blank">www.aadidess.com</a>.</p>
        <p>Cada cursante debe tener contratado durante la vigencia de los cursos un seguro que lo ampare por accidentes personales o pertenecer a una obra social, debiendo acreditarlo cada vez que le sea requerido.</p>
        <p>Cada cursante deberá adaptarse a los cambios en los planes de estudio, así como a las normas académicas que se apliquen durante el cursado de cualquier nivel.</p>
        <p>No está permitido utilizar esquís doble punta ni “fat”, rocker a menos que el Profesor así lo requiera para ciertas prácticas específicas.</p>
        <p>En todas las prácticas y exámenes sobre nieve es obligatorio el uso del casco en todas las disciplinas.</p>
        <p>Cada cursante debe respetar y aplicar las Normas de Conducta FIS que se detallan a continuación:</p>
        <p><strong>Preámbulo:</strong> El esquí y el snowboard son deportes y como tales implican ciertos riesgos y responsabilidades civiles y penales.</p>
        <p><strong>Decálogo:</strong></p>
        <ol>
          <li><strong>Respeto por los otros:</strong> Todo esquiador debe comportarse de manera tal de que no ocasionen peligro o perjuicio a otro.</li>
          <li><strong>Control de la velocidad y del comportamiento:</strong> Todo esquiador o snowboardista debe adaptar su velocidad y su forma de esquiar a su capacidad personal, al igual que a las condiciones climáticas y del terreno.</li>
          <li><strong>Control de la dirección:</strong> El esquiador o snowboardista que avanza desde arriba, cuya posición dominante le permita escoger una trayectoria, debe prever una dirección que no ponga en peligro al esquiador que va más abajo.</li>
          <li><strong>Sobrepaso:</strong> Está permitido sobrepasar a otro esquiador o snowboardista por arriba, por abajo, por la derecha, o por la izquierda de su línea de marcha, pero siempre dejando un margen lo suficientemente amplio, para permitir al sobrepasado sus giros.</li>
          <li><strong>Deberes de un esquiador o snowboardista al cruzar una pista:</strong> Todo esquiador o snowboardista que entra a una pista o atraviesa un terreno de entrenamiento (para competencias) debe asegurarse mirando hacia arriba y hacia abajo que puede hacerlo. Idéntica precaución debe tomar después de cada detención.</li>
          <li><strong>Interrupción del descenso y detenciones:</strong> Todo esquiador o snowboardista debe evitar detenciones innecesarias sobre las pistas y especialmente en los pasajes angostos sin visibilidad. En caso de caída el esquiador o snowboardista debe procurar despejar la pista lo más rápido posible.</li>
          <li><strong>Subida:</strong> El esquiador o snowboardista que sube, solo puede utilizar el costado de la pista y debe abandonar la misma en caso de mala visibilidad. Lo mismo rige para el esquiador que desciende a pie.</li>
          <li><strong>Respeto por la señalización:</strong> Todo esquiador o snowboardista debe ser respetuoso de las señales.</li>
          <li><strong>Conducta en caso de accidente:</strong> En caso de accidente todos tienen la obligación de auxiliar al accidentado.</li>
          <li><strong>Identificación:</strong> Toda persona testigo o parte responsable o no de un accidente debe identificarse ante las autoridades competentes.</li>
        </ol>
      `
    },
        {
      id: 4,
      titulo: 'Artículo 4: Deberes del Director Académico',
      contenidoHtml: `<p>Corresponde al Director atender las inquietudes de los alumnos y del personal docente y ejecutar las resoluciones del Consejo Académico y de la Comisión Directiva de A.A.D.I.D.E.S.S</p>`
    },
    {
      id: 5,
      titulo: 'Artículo 5: Selección de Profesores',
      contenidoHtml: `<p>El Consejo Académico del I.S.E.S designa los miembros del cuerpo docente y personal de apoyo de acuerdo con las características y necesidades del mismo. La designación de docentes se realiza por períodos renovables.</p>`
    },
    {
      id: 6,
      titulo: 'Artículo 6: Inscripciones',
      contenidoHtml: `<p>Las inscripciones al Año Académico se realizarán en forma personal a través de aadidess.com de acuerdo a las fechas fijadas.</p><p>Las inscripciones están limitadas por cupo máximo y mínimo para cada Delegación y disciplina, a estricto criterio del Consejo Académico.</p><p>La inscripción al siguiente módulo queda sujeta a la aprobación del anterior.</p>`
    },
    {
      id: 7,
      titulo: 'Artículo 7: Requisitos de Ingreso',
      contenidoHtml: `
        <p>El ingreso al Instituto Superior de Esquí y Snowboard es posible con los siguientes requisitos:</p>
        <ul>
          <li>Cumplir 16 años al momento de la inscripción.</li>
          <li>Aprobar el examen técnico de ingreso. Aprueban el ingreso al curso de Instructor de Nivel 1 de Esquí las mujeres con 140 puntos FIS o menos y 120 puntos FIS o menos para varones en cualquier disciplina alpina con una validez de hasta 5 años anteriores a la fecha de inscripción.</li>
          <li>Ser socio de A.A.D.I.D.E.S.S al día al comienzo del módulo correspondiente.</li>
          <li>Abonar el arancel fijado a la fecha de ingreso. Los pases para los medios de elevación corren por cuenta de los cursantes.</li>
          <li>Presentación de una copia del certificado de estudios secundarios completo aprobado para cursar el Nivel 3.</li>
          <li>Certificado de Salud Física firmado por un médico clínico y Certificado de Salud Mental firmado por médico psiquiatra.</li>
          <li>Presentar fotocopia del DNI.</li>
        </ul>
        <p>Para el caso de los extranjeros que deseen incorporarse al I.S.E.S. deben presentar titulación de la Asociación afiliada a la I.S.I.A. del país de la nacionalidad del interesado, asociarse a AADIDESS, inscribirse al examen de ingreso del nivel correspondiente. Dominio del idioma castellano (español) en forma oral y escrito de manera fluida. La solicitud de la inscripción será tratada por el Consejo Académico el cual resolverá si aprueba o no dicha solicitud. Su efectivo ingreso dependerá del cupo disponible de cada Delegación, teniendo prioridad para cursar los ciudadanos argentinos.</p>
        <p><strong>Para ingresar a Nivel 2 se debe:</strong> además de todos los requisitos mencionados anteriormente, contar con los siguientes: poseer el certificado de Nivel 1 vigente (cuotas societarias y reentrenamiento al día) y certificar 100 hs trabajadas como nivel 1 en una escuela o club. Tendrán que rendir ingreso aquellos instructores que hayan cursado el nivel 1 con más de 3 temporadas de anterioridad. Tendrá una vigencia de hasta dos (2) temporadas invernales argentinas para cursar. De no cursar en la segunda temporada perderá validez y deberá rendir el examen de ingreso nuevamente.</p>
        <p><strong>Para ingresar a Nivel 3 se debe:</strong> además de todos los requisitos mencionados anteriormente, contar con los siguientes: a) poseer el certificado de Nivel 2 vigente, b) aprobar el examen de ingreso técnico que tendrá una vigencia de hasta dos (2) temporadas invernales argentinas para cursar. De no cursar en la segunda temporada perderá validez y deberá rendir el examen de ingreso nuevamente.</p>
        <p><strong>Para ingresar a Nivel 4 se debe:</strong> además de todos los requisitos mencionados anteriormente, contar con los siguientes: a) poseer el certificado de Nivel 3 ISIA vigente, b) aprobar el examen de ingreso que tendrá una vigencia de hasta dos (2) temporadas invernales argentinas para cursar. De no cursar en la segunda temporada perderá validez y deberá rendir el examen de ingreso nuevamente. c) abonar el arancel correspondiente d) aprobar el I.S.I.A Test.</p>
        <p><strong>Para ingresar a Nivel 5 se debe:</strong> además de todos los requisitos mencionados anteriormente, contar con los siguientes: a) poseer el certificado de Nivel 4 vigente, con menos de 3 temporadas de antigüedad. b) certificado de antecedentes policiales.</p>
        <p>El I.S.E.S. se reserva el derecho de requerir cualquier otro certificado que crea conveniente.</p>
      `
    },
    {
      id: 8,
      titulo: 'Artículo 8: Evaluación Técnica de ingreso al curso de Instructor de Esquí para Niños',
      contenidoHtml: `
        <p>Los interesados deben inscribirse dentro de las fechas de inscripciones fijadas y abonar el arancel que se establezca.</p>
        <p>El Consejo Académico determinará los candidatos que obtengan la mejor calificación para cubrir el cupo máximo correspondiente a cada Delegación.</p>
        <p>La aprobación de esta evaluación técnica es válida únicamente para cursar en forma inmediata posterior. De no cursar, la evaluación aprobada pierde validez.</p>
        <p>Las mujeres con 140 puntos FIS o menos y los varones con 120 puntos FIS o menos en cualquier disciplina, presentando certificado FIS o FASA pueden cursar sin rendir ingreso. Los puntos no deben tener más de 5 años de antigüedad.</p>
      `
    },
    {
      id: 9,
      titulo: 'Artículo 9: Examen Técnico de Ingreso a Nivel 1, 2, 4 y 4 de Esquí y Snowboard',
      contenidoHtml: `
        <p>Los interesados deben inscribirse dentro de las fechas de inscripciones que en cada caso se fijarán y abonar el arancel que se establezca.</p>
        <p>El Consejo Académico determinará los candidatos que obtengan la mejor calificación para cubrir el cupo máximo correspondiente a cada Delegación.</p>
        <p>La aprobación del examen de ingreso tendrá una vigencia de hasta dos (2) temporadas invernales argentinas para cursar. De no cursar en la segunda temporada perderá validez y deberá rendir el examen de ingreso nuevamente.</p>
        <p>Para Nivel 1 las mujeres con 140 puntos FIS o menos y los varones con 120 puntos FIS o menos en cualquier disciplina, presentando certificado FIS o FASA, pueden cursar sin rendir ingreso. Los puntos no deben tener más de 5 años de antigüedad.</p>
      `
    },
    {
      id: 10,
      titulo: 'Artículo 10: Régimen de Prioridad',
      contenidoHtml: `
        <p>A partir de Nivel 2 tendrán prioridad para cursar los cursantes que aprueben el nivel inmediato anterior (principio de continuidad como alumnos regulares).</p>
        <p>Estarán en lista de espera todos los interesados en recursar algún módulo de cualquier nivel. Podrán recursar dependiendo del cupo disponible de ese momento.</p>
        <p>Los interesados en cursar cualquier nivel que no sean alumnos regulares (que no cumplan con el principio de continuidad), se les tomará la inscripción en lista de espera y depende del cupo disponible.</p>
        <p>Los extranjeros podrán cursar siempre y cuando haya cupo luego del cierre de las inscripciones.</p>
        <p>En los niveles que para cursar se debe aprobar el examen de ingreso, tendrán prioridad los que obtengan las notas más altas.</p>
        <p>Los ingresados a Nivel 1 que no pueden cursar por cupo, se les dará la opción de cursar en otra Delegación que cuente con cupo, respetando primero los ingresados que sean residentes en esa Delegación. De no haber cupo, deberán esperar a la próxima fecha o al año siguiente.</p>
        <p>Tienen prioridad para cursar los demás niveles, aquellos que aprobaron el ingreso en el año inmediato anterior correspondiente a dichos cursos. Los que aprobaron el ingreso pero dejaron un año o más tiempo sin cursar, podrán hacerlo pero dependerá del cupo disponible en la Delegación correspondiente.</p>
        <p>Se deberá cursar en la Delegación donde se aprobó el examen de ingreso. Se podrá cursar en otra Delegación si esta tiene cupo disponible. Los interesados quedarán en lista de espera hasta que se confirme el cupo.</p>
      `
    },
    {
      id: 11,
      titulo: 'Artículo 11: Períodos Lectivos',
      contenidoHtml: `
        <p>El año académico inicia el 1 de junio y termina el 15 de octubre de cada año calendario.</p>
        <p>Todas las fechas y cantidad de horas preestablecidas, tanto para el comienzo y desarrollo de los cursos como para exámenes y/o recuperatorios, están sujetas a modificación por cuestiones climáticas, condiciones de nieve o cierre de los medios de elevación, siendo facultad del Consejo Académico la modificación de las mismas.</p>
        <p>Los horarios para las materias prácticas y teóricas son determinados por la dirección de cursos y comunicada a través del Calendario correspondiente.</p>
        <p>Las cursadas teóricas son con modalidad en línea (Online) o presencial, siendo facultad de la Dirección o del Consejo Académico la modificación de las mismas.</p>
        <p>Cada cursante debe verificar sus calificaciones en el sitio web del Instituto o en la Secretaría Académica.</p>
      `
    },
    {
      id: 12,
      titulo: 'Artículo 12: Evaluación Actitudinal',
      contenidoHtml: `
        <p>La actitud de cada cursante es evaluada como una materia que debe aprobar.</p>
        <p><strong>Evaluadores:</strong> Profesores de los módulos teórico y técnico, Tutores, directores de escuelas y clubes en el Módulo Pedagógico.</p>
        <p><strong>Calificación:</strong> para aprobar se debe obtener una calificación de 7 puntos sobre 10. Si obtiene una calificación menor, no aprueba el módulo, debiéndolo recursar al año siguiente.</p>
        <p><strong>Aspectos a evaluar:</strong> a) Actitud general positiva. b) Presencia y Aseo. c) Vestimenta y material. d) Asistencia y puntualidad. e) Vocabulario.</p>
      `
    },
    {
      id: 13,
      titulo: 'Artículo 13: Aprobación del curso de Instructor de Esquí para Niños',
      contenidoHtml: `<p>Para aprobar este curso, se deben aprobar todas las materias de acuerdo al Plan de Estudios (ver en “Plan de Estudios”) por medio de un examen que será escrito y/u oral y/o práctico.</p><p>De reprobar, el cursante tiene la opción de un único recuperatorio inmediato posterior.</p>`
    },
    {
      id: 14,
      titulo: 'Artículo 14: Aprobación de los módulos de Nivel 1 de Esquí y Snowboard',
      contenidoHtml: `
        <p><strong>Módulo Pista</strong></p>
        <ol>
          <li>Para aprobar el módulo pista se deben aprobar todas las materias y trabajos prácticos de acuerdo al Plan de Estudios vigente.</li>
          <li>Las materias prácticas se aprueban con la asistencia obligatoria. De no asistir, podrán hacerlo en otra Delegación, de lo contrario no se aprueba el módulo, debiendo cursar y rendir el examen correspondiente al año siguiente.</li>
          <li>Durante el cursado del MÓDULO en pista se puede promocionar las maniobras básicas (primera oportunidad) de no aprobar se accede al recuperatorio (Segunda oportunidad), las maniobras de perfeccionamiento se rinden en el examen final y recuperatorio (primer y segunda oportunidad). De no aprobarlos podrá rendirse nuevamente un examen y recuperatorio (tercer y cuarta oportunidad dentro de la misma temporada o la temporada siguiente), de no aprobar se recursa el módulo pista, iniciando nuevamente el sistema de oportunidades.</li>
        </ol>
        <p><strong>TODAS ESTAS OPORTUNIDADES DEBEN RENDIRSE DURANTE EL TRANSCURSO DE 2 TEMPORADAS, PASADO ESE TIEMPO SE PIERDE LA VALIDEZ DE LAS MANIOBRAS APROBADAS</strong></p>
        <p>Ejemplo: un cursante tendrá 2 fechas de exámenes (cada examen cuenta con 2 oportunidades: un examen y un recuperatorio) totales de examen para cada maniobra</p>
        <table>
          <tr><th>Maniobras</th><th>Oportunidades</th></tr>
          <tr><td>BÁSICAS</td><td></td></tr>
          <tr><td>1ª</td><td>evalúa el profesor durante el cursado</td></tr>
          <tr><td>2ª</td><td>1º recuperatorio</td></tr>
          <tr><td>PERFECCIONAMIENTO</td><td></td></tr>
          <tr><td>1ª</td><td>1º examen</td></tr>
          <tr><td>2ª</td><td>1º recuperatorio</td></tr>
          <tr><td>3ª</td><td>2º examen</td></tr>
          <tr><td>4ª</td><td>2º recuperatorio</td></tr>
        </table>
        <p>. De no realizar el re-cursado se pierde la condición de alumno regular.</p>
        <p><strong>Módulo teórico</strong></p>
        <ol>
          <li>Para aprobar el módulo teóricas se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</li>
          <li>Las materias prácticas se aprueban con la asistencia obligatoria además de la evaluación. De no asistir se debe recursar en la próxima fecha.</li>
        </ol>
        <p><strong>Módulo Pedagógico</strong></p>
        <p>1. Se deberán entregar a secretaría académica el comprobante emitido por una escuela o club reconocidos con las 100 hs trabajadas.</p>
      `
    },
    {
      id: 15,
      titulo: 'Artículo 15: Vencimiento de los módulos de Nivel 1',
      contenidoHtml: `<p>Los módulos no aprobados tendrán una vigencia de hasta dos (2) temporadas invernales argentinas para ser aprobados. De no aprobar en la segunda temporada perderán validez y deberá re-cursarlos nuevamente.</p>`
    },
    {
      id: 16,
      titulo: 'Artículo 16: Desarrollo de Nivel 2',
      contenidoHtml: `
        <p><strong>Módulo teórico</strong></p>
        <p>Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p><strong>Módulo Pedagógico</strong></p>
        <p>1. Se debe aprobar la Práctica Pedagógica correspondiente. En caso de reprobar, se deberá recursar hasta aprobarla.</p>
        <p><strong>Módulo Técnico</strong></p>
        <p>1. Todos los alumnos que hayan completado el cursado de un bloque de pista tendrán en total 3 fechas de exámenes (cada fecha cuenta de un examen y recuperatorio) para aprobar cada una de las maniobras, las mismas deben completarse en el lapso de 3 temporadas, siendo la 1º temporada la original del cursado. una vez completas las 6 oportunidades se debe recursar (las oportunidades son administradas por cada alumno, y en base a las mesas disponibles, el alumno puede agotar las oportunidades en una sola temporada si la cantidad de mesas disponibles lo permiten)</p>
        <table>
          <tr><th>Oportunidades</th><th>cada maniobra</th></tr>
          <tr><td>1ª</td><td>1º examen</td></tr>
          <tr><td>2ª</td><td>1º recuperatorio</td></tr>
          <tr><td>3ª</td><td>2º examen</td></tr>
          <tr><td>4ª</td><td>2º recuperatorio</td></tr>
          <tr><td>5ª</td><td>3º examen</td></tr>
          <tr><td>6ª</td><td>3º recuperatorio</td></tr>
        </table>
      `
    },
    {
      id: 17,
      titulo: 'Artículo 17: Desarrollo de Nivel 3',
      contenidoHtml: `
        <p><strong>Módulo Teórico</strong></p>
        <p>1. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p><strong>Módulo Pedagógico</strong></p>
        <p>1. Se debe aprobar la Práctica Pedagógica correspondiente. En caso de reprobar, se deberá recursar hasta aprobarla.</p>
        <p><strong>Módulo Técnico</strong></p>
        <p>1. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p>Para obtener estampilla ISIA e ISIA Card se debe aprobar el ISIA Test (disciplina Esquí).</p>
        <p>Todos los alumnos que hayan completado el cursado de un bloque de pista tendrán en total 3 fechas de exámenes (cada fecha cuenta de un examen y recuperatorio) para aprobar cada una de las maniobras, las mismas deben completarse en el lapso de 3 temporadas, siendo la 1º temporada la original del cursado. una vez completas las 6 oportunidades se debe recursar (las oportunidades son administradas por cada alumno, y en base a las mesas disponibles, el alumno puede agotar las oportunidades en una sola temporada si la cantidad de mesas disponibles lo permiten)</p>
        <p><strong>Importante:</strong> a partir de 2025 no se puede acceder al recuperatorio con 35 puntos o menos, aquellos alumnos que en su examen obtengan un puntaje menor a esta nota pierden la posibilidad de realizar el recuperatorio y el mismo deja de ser una oportunidad disponible.</p>
        <p>Ejemplo, si durante el alumno se encuentra realizando su 2º examen (3º oportunidad) y obtiene una nota menor de 35 puntos, no podrá acceder al 2º recuperatorio (4 oportunidad), quedando sólo como posibilidades la el 3º examen y 3º recuperatorio como oportunidades válidas.</p>
        <table>
          <tr><th>Oportunidades</th></tr>
          <tr><td>1ª</td><td>1º examen</td></tr>
          <tr><td>2ª</td><td>1º recuperatorio</td></tr>
          <tr><td>3ª</td><td>2º examen</td></tr>
          <tr><td>4ª</td><td>2º recuperatorio</td></tr>
          <tr><td>5ª</td><td>3º examen</td></tr>
          <tr><td>6ª</td><td>3º recuperatorio</td></tr>
        </table>
      `
    },
    {
      id: 18,
      titulo: 'Artículo 18: Desarrollo de Nivel 4',
      contenidoHtml: `
        <p><strong>Módulo Técnico</strong></p>
        <p>1. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p>2. El examen y su recuperatorio solo tendrán validez durante la temporada en la que se rindió, de no aprobar todas las maniobras durante estas dos instancias deberán rendirse nuevamente todas las maniobras.</p>
        <p>3. No se podrá acceder al recuperatorio de aquellas maniobras que su puntaje sea menor a 35.</p>
        <p><strong>Módulo Pedagógico</strong></p>
        <p>1. Se debe aprobar la Práctica Pedagógica correspondiente. En caso de reprobar, se deberá recursar hasta aprobarla.</p>
      `
    },
    {
      id: 19,
      titulo: 'Artículo 19: Desarrollo de Nivel 5',
      contenidoHtml: `
        <p><strong>Módulo Teórico</strong></p>
        <p>1. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p>2. Se debe asistir a todas las materias de Ayudantía y a las prácticas correspondientes.</p>
        <p><strong>Módulo Pedagógico</strong></p>
        <p>1. Se debe aprobar la Práctica Pedagógica correspondiente. En caso de reprobar, no se podrá acceder al módulo técnico y deberá recursarla hasta aprobarla.</p>
        <p>2. Se debe asistir a todas las materias de Ayudantía y a las prácticas correspondientes.</p>
        <p><strong>Módulo Técnico</strong></p>
        <p>1. Cursar este módulo no implica la aprobación del Módulo Pedagógico. De no aprobar el Módulo Pedagógico, no se accederá al examen oral.</p>
        <p>2. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p>3. Al aprobar este nivel, cada cursante asume el compromiso de dictar dos módulos al año siguiente de recibido.</p>
      `
    },
    {
      id: 20,
      titulo: 'Artículo 20: Desarrollo de Entrenador de Club',
      contenidoHtml: `
        <p><strong>Módulo 1:</strong></p>
        <p>1. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p><strong>Módulo 2:</strong></p>
        <p>1. Se debe aprobar la Práctica Pedagógica correspondiente. En caso de reprobar, no se podrá acceder al módulo tres y se deberá recursar hasta aprobarla.</p>
        <p><strong>Módulo 3:</strong></p>
        <p>1. Cursar este módulo no implica la aprobación del Módulo 2. De no aprobar el Módulo 2, no se accederá al examen correspondiente en pista.</p>
        <p>2. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
      `
    },
    {
      id: 21,
      titulo: 'Artículo 21: Desarrollo de Entrenador Nacional',
      contenidoHtml: `
        <p><strong>Módulo 1:</strong></p>
        <p>1. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
        <p><strong>Módulo 2:</strong></p>
        <p>1. Se debe aprobar la Práctica Pedagógica correspondiente. En caso de reprobar, no se podrá acceder al módulo tres y se deberá recursar hasta aprobarla.</p>
        <p><strong>Módulo 3:</strong></p>
        <p>1. Cursar este módulo no implica la aprobación del Módulo 2. De no aprobar el Módulo 2, no se accederá al examen correspondiente en pista.</p>
        <p>2. Para aprobar el módulo se deben aprobar todas las materias de acuerdo al Plan de Estudios vigente.</p>
      `
    },
    {
      id: 22,
      titulo: 'Artículo 22: Régimen de Correlatividad',
      contenidoHtml: `
        <p>Las cursadas o re-cursadas de los módulos son en forma correlativa o sea que de incumplir con la continuidad, se pierde la condición de alumno regular lo que equivale a comenzar desde el inicio del nivel cursado.</p>
        <p>Se debe cursar la primera parte de la materia para luego cursar la correlativa.</p>
        <p>3. Se puede cursar la correlativa inmediata siguiente pero no se accede al examen correspondiente hasta aprobar el examen de la correlativa anterior.</p>
      `
    },
    {
      id: 23,
      titulo: 'Artículo 23: Validez de las materias cursadas de Nivel 2, 3, 4 y 5',
      contenidoHtml: `
        <p>Cada cursante tiene la posibilidad de rendir examen oficial y un recuperatorio de la materia cursada dentro de la cursada. Pasado este lapso y no aprobando o no presentándose a rendir, se vence la materia y debe cursarla nuevamente.</p>
        <p>Al recursar la materia, vuelve a obtener la posibilidad de examen y recuperatorio, en caso de seguir el resultado negativo al final de estos dos años, se vencen todas las materias del nivel cursado debiéndolas cursar y aprobar nuevamente. Esta norma también se aplica para aquellos cursantes que perdieron la condición de alumno regular por no seguir cursando pasados los cuatro años de la fecha de la última cursada.</p>
        <p>3. Todas las materias re-cursadas deben ser correlativas. En caso de perder la correlatividad, el cursante perderá la condición de alumno regular.</p>
      `
    },
    {
      id: 24,
      titulo: 'Artículo 24: Régimen de Promociones',
      contenidoHtml: `<p>1. A partir de la temporada 2016 ya no hay promociones técnicas en los cursos, todos los cursantes deben rendir la evaluación del módulo y/o el examen final.</p>`
    },
    {
      id: 25,
      titulo: 'Artículo 25: Régimen de Recuperatorios',
      contenidoHtml: `
        <p>Los cursantes de Nivel 2 y 3 pueden cursar el módulo técnico teniendo materias teóricas sin aprobar del módulo teórico, pero para acceder al año siguiente deben aprobar indefectiblemente todas las materias prácticas y teóricas del año cursado..</p>
        <p>En caso de reprobar el Módulo Pedagógico, este no tiene recuperatorio y se debe recursar en forma correlativa hasta aprobarlo.</p>
        <p>Las instancias para aprobar las materias teóricas de Nivel 2 y 3 por año académico son: 1. examen final, 2. un recuperatorio oficial y 3. un recuperatorio arancelado (dentro del año ciclo lectivo y por disponibilidad de profesores). De no aprobar en alguna de estas instancias se debe recursar la materia.</p>
        <p>Las materias teórico-prácticas se aprueban, además de la nota (cuando corresponda), con la asistencia. De no asistir, estas materias no tienen recuperatorio y se debe recursar en la siguiente fecha disponible.</p>
        <p>Las materias Práctica de la Técnica y Teoría del Método tienen un (1) recuperatorio oficial dentro de la semana posterior al examen oficial. (Dependiendo de las condiciones climáticas).</p>
        <p>Cuando se soliciten recuperatorios fuera de las fechas preestablecidas en las materias Práctica de la Técnica y Teoría del Método (exámenes no oficiales), estos serán excepcionales y el I.S.E.S. se reserva el derecho de realizarlos o no dependiendo de la cantidad de inscriptos y de las condiciones de nieve. El arancel correspondiente debe ser abonado en el momento de la inscripción y será devuelto en caso de no realizarse el examen.</p>
        <p>Para poder rendir un recuperatorio oficial en pista o teórico (en caso de no estar cursando), el cursante debe inscribirse antes de la fecha de cierre de inscripciones.</p>
        <p>No hay mínimo de puntaje para acceder a recuperar el examen de Método oral.</p>
        <p>Los recuperatorios por ausentarse del examen original son arancelados.</p>
        <p>Los exámenes de ingreso a nivel 2, 3 y 4 a principios de temporada no son oficiales (se considera oficial a las fechas de septiembre, fin de temporada) y no tienen recuperatorios. Se puede rendir cualquier gesto técnico para ingresar al siguiente nivel sin importar la calificación anterior del mismo gesto ya que es un “examen” y no un “recuperatorio”.</p>
        <p>En aquellos casos en que el cursante no pueda cursar una materia teórica por enfermedad o lesión (con presentación de certificado médico), podrá acceder a un Examen Libre. Este recuperatorio es arancelado, se realizará en una única fecha de octubre en la delegación Bariloche y comprende todos los contenidos teórico-prácticos de la materia correspondiente. De no aprobarlo deberá cursar la materia al año siguiente.</p>
      `
    },
    {
      id: 26,
      titulo: 'Artículo 26: Exámenes escritos presenciales o en Línea',
      contenidoHtml: `
        <p><strong>Tiempo de duración del examen:</strong> Los tiempos de los exámenes de las materias de aula serán asignados desde la Dirección. Los cursantes deberán entregar inmediatamente el examen escrito a partir de cumplido ese tiempo. En los Exámenes En Línea (OnLine), se contará con la información de la duración del examen antes de comenzar el mismo. El tiempo comenzará a correr en el momento que se comience el mismo y se cerrará el examen al finalizar el tiempo. Si el examen no fue enviado, se tomará como no aprobado.</p>
        <p><strong>Tipografía a utilizar:</strong> Se aceptarán los exámenes escritos únicamente si son legibles al profesor de la cátedra. El profesor podrá disminuir la nota o dar por anulado el examen si el mismo es entregado en condiciones que desmerecen el mismo.</p>
        <p><strong>3. Hojas a utilizar:</strong> Todos los exámenes que sean para desarrollar deberán ser escritos en hojas aparte del cuestionario, consignando en las mismas, nombre y apellido del cursante, fecha del examen, cantidad de hojas que entrega y firma. No se aceptarán exámenes escritos en la misma hoja del cuestionario.</p>
        <p><strong>4. Datos a consignar en el cuestionario:</strong> El cursante debe consignar todos los datos del cuestionario, pudiendo el profesor dar por inválido el mismo si los datos no están completos.</p>
        <p><strong>5. Tipo de presentación del examen escrito:</strong> No se aceptarán exámenes escritos que no sean prolijos, legibles y entendibles, que contengan enmiendas y tachaduras. Las respuestas deberán ser correlativas con las preguntas del cuestionario.</p>
        <p><strong>6. Puntuación de cada pregunta:</strong> Los exámenes serán puntuados de 0 a 10 puntos, otorgándole a cada pregunta el puntaje correspondiente, salvo consideraciones especiales de cada examen.</p>
        <p><strong>7.</strong> Los exámenes corregidos deben ser retirados por el cursante en Secretaría Académica o solicitarlos al Delegado Académico antes de la finalización del año académico y de no hacerlo se desecharán.</p>
      `
    },
    {
      id: 27,
      titulo: 'Artículo 27: Módulo Pedagógico',
      contenidoHtml: `
        <p>Todos los cursantes deben cumplir con la Práctica Pedagógica obligatoria en una escuela o club reconocido por A.A.D.I.D.E.S.S y adherido al Plan Nacional de Profesionalización de la Enseñanza.</p>
        <p>Es considerada la materia más importante del Plan de Estudios.</p>
        <p>3. Para aprobar este módulo se deben aprobar todas las materias, prácticas y trabajos prácticos de acuerdo al Plan de Estudios vigente.</p>
        <p>4. El I.S.E.S. no garantiza la obtención de un lugar para realizar la práctica en alguna Escuela o Club Adherido o Reconocido ya que es una responsabilidad de cada cursante.</p>
        <p>5. El Tutor y el Director del establecimiento supervisan y determinan la aprobación o reprobación del cursante.</p>
      `
    },
    {
      id: 28,
      titulo: 'Artículo 28: Actualización del Título o Certificado',
      contenidoHtml: `
        <p>Para ser reconocido por la A.A.D.I.D.E.S.S como instructor y recibir todos los beneficios que esta brinda, se debe tener el Título o Certificado vigente cumpliendo con el régimen de reentrenamientos correspondientes.</p>
        <p>Para poder asistir a los reentrenamientos se debe tener la cuota social al día y abonar el arancel fijado para los mismos.</p>
        <p>3. Para figurar en los listados como reentrenado en el nivel correspondiente, se debe asistir al 100% de la parte práctica.</p>
        <p>4. Todos los instructores y entrenadores deben revalidar su certificado o título cada 3 (tres) años a partir de la fecha de recibido o del último reentrenamiento, asistiendo a seis (6) horas de práctica. La fecha y lugar será comunicada por el I.S.E.S. A través del calendario académico. En caso de no concurrir al mismo y pasados los tres años, no figurará en los listados como instructor habilitado.</p>
        <p>5. Los Instructores Nivel 5, deben asistir a los simposios anuales. De no hacerlo, deberán revalidarse cada 3 (tres) años mediante la asistencia a un reentrenamiento oficial. En caso de no concurrir al mismo no figurarán en los listados como “habilitado” hasta cumplir con el reentrenamiento.</p>
        <p>7. Los instructores que por un motivo válido (enfermedad, accidente, maternidad, etc.) no puedan concurrir al reentrenamiento correspondiente, deben pedir una prórroga por escrito al I.S.E.S. adjuntando el certificado correspondiente antes del inicio del re-entrenamiento correspondiente, no considerándose la misma si es presentada durante o luego de la realización del mismo. El Consejo Académico determina la aceptación o no de la solicitud de prórroga.</p>
        <p>8. Los instructores que residan en el extranjero, pueden realizar reentrenamientos con la asociación del país que residen si está afiliada a la ISIA, enviando el certificado correspondiente. Cuando regresen al país, deben realizar el primer re-entrenamiento programado.</p>
        <p>9. Los instructores mayores de 55 años no están obligados a reentrenar.</p>
      `
    },
    {
      id: 29,
      titulo: 'Artículo 29: Régimen de Alumno Regular',
      contenidoHtml: `
        <p>Se considera “Alumno Regular” aquel que mantiene su cursada vigente asistiendo a las materias y prácticas del respectivo módulo y nivel.</p>
        <p>Se pierde la condición de alumno regular por las siguientes razones: a) no inscribirse a cualquiera de los módulos del nivel correspondiente, b) no inscribirse a los exámenes correspondientes, c) solicitar prórrogas luego del inicio del evento académico correspondiente (módulo, examen, etc.), d) no recursar un módulo o materia en la fecha correspondiente, e) a partir de Nivel 2, haber pasado cuatro años o más desde la última cursada sin cursar o recursar, f) para cursantes de Nivel 1 y Curso Instructor de Niños, se pierde la condición de alumno regular al no presentarse a cursar cualquier módulo (sin solicitar previamente una prórroga) o no presentarse a rendir exámenes de cualquier materia, g) perder la correlatividad en el recursado de materias, h) dictar clases de esquí o snowboard sin haber aprobado el módulo técnico y el metódico (para cursantes de Nivel 1), i) no presentar el certificado de estudios secundarios en tiempo y forma.</p>
        <p>3. Perder la condición de alumno regular significa que se vence todo lo cursado y aprobado anteriormente y se debe recursar todo el nivel completo. Al perder esta condición, se mantiene el examen técnico de ingreso hasta dos años de finalizada la última cursada. Luego de ese lapso, se vence y se deberá rendirlo y aprobarlo nuevamente.</p>
        <p>4. El alumno que haya perdido su “condición de alumno regular” no podrá solicitar certificados de alumno regular.</p>
      `
    },
    {
      id: 30,
      titulo: 'Artículo 30: Régimen de Asistencia',
      contenidoHtml: `
        <p>El cursado de todas las asignaturas en pista del I.S.E.S. es con la modalidad presencial y con dedicación de tiempo completo. Las asignaturas en aula serán con la modalidad en línea (OnLine) o presenciales. No se aceptan justificaciones de inasistencias por motivos laborales, de viaje o estudio.</p>
        <p>Los cursantes pueden tener hasta un máximo de 20% del total de horas de cada materia de faltas injustificadas, en las materias en línea, podrá no asistir a un máximo del 20% del tiempo de conexión. En caso de superar las faltas injustificadas, deben presentar un justificativo válido por escrito el cual se considerará o no, pudiendo el cursante perder su condición de alumno regular.</p>
        <p>3. Los cursantes de Nivel 4 y 5 deben asistir al 100% de todas las materias.</p>
        <p>4. Se consideran faltas justificadas las originadas en accidente o enfermedad debidamente certificadas. No se consideran las faltas por viajes, estudios o trabajo. En caso de cursantes que por enfermedad o accidente presenten un certificado médico, para considerar cursada a la materia deben tener un mínimo de 50% de asistencia a la misma, de lo contrario deberán recursarla.</p>
        <p>5. En caso de quedar libre por faltas injustificadas, se pierde la condición de alumno regular debiendo recursar la materia.</p>
        <p>6. En las materias teóricas y prácticas, se considera hasta 05′ de tolerancia de llegada, entre 05′ y 15′ es llegada tarde y se aplica 1/2 falta. Pasados los 15′, el cursante no puede acceder a la clase y se le computa una falta entera.</p>
        <p>7. Para que tengan validez los certificados médicos, deberán ser presentados dentro de las 48 hs de ocurrido el accidente o enfermedad.</p>
        <p>8. Si un cursante falta una vez a la Práctica de Acción Social o Esquí Escolar, quedará a criterio del Consejo Académico la forma de recuperar la inasistencia. Si falta más días, reprueba la práctica debiéndola realizar esta práctica nuevamente al año siguiente.</p>
        <p>9. Aquellas materias que tienen una parte práctica, el cursante deberá asistir a la misma para aprobar la materia. De no hacerlo, no aprobará la materia hasta tanto asista a esta práctica en otra delegación o al año siguiente. De no asistir a la práctica al año siguiente, deberá recursar nuevamente toda la materia.</p>
      `
    },
    {
      id: 31,
      titulo: 'Artículo 31: Régimen de Prórrogas',
      contenidoHtml: `
        <p>Un alumno regular puede pedir prórroga por única vez, por un límite máximo de 1 (un) año por motivos personales, informando por escrito a la Secretaría Académica con un mes de anticipación al inicio del curso. Superado este tiempo y no habiéndose incorporado, pierde todo lo cursado de ese nivel.</p>
        <p>Los pedidos de prórroga para los reentrenamientos, deben presentarse por escrito al Consejo Académico con un mínimo de 2 (dos) semanas de antelación al inicio del reentrenamiento.</p>
        <p>3. No se aceptan solicitudes de prórroga consecutivas.</p>
        <p>4. No hay prórroga del re-cursado del Módulo Pedagógico si lo reprobó el año anterior.</p>
        <p>5. Las solicitudes de prórroga se presentan por escrito detallando la dirección electrónica y adjuntando los certificados correspondientes.</p>
        <p>6. Las solicitudes de prórroga serán tratadas únicamente si el socio tiene las cuotas al día.</p>
      `
    },
    {
      id: 32,
      titulo: 'Artículo 32: Régimen de Equivalencias',
      contenidoHtml: `
        <p>Los Instructores Nacionales de Esquí del sistema anterior (EFN 3) de hasta 35 años que quieran obtener el título de Instructor Nivel 3, deben aprobar la prueba de Slalom Gigante cronometrado de acuerdo al porcentaje del pace-setter correspondiente. Los recibidos con anterioridad a 1990, deben realizar la Práctica de Avalanchas. Los instructores del mismo nivel de 36 años cumplidos o más teniendo el re-entrenamiento y las cuotas al día, obtienen la equivalencia a Nivel 3 automáticamente. Los recibidos antes de 1990 deben realizar la Práctica de Avalanchas.</p>
        <p>Los Instructores Capacitados y Maestras Jardineras del sistema anterior de cursos pudieron realizar la equivalencia a Nivel 1 cursando el 3er período de Nivel 1 entre el año 2001 y el 2005. Los que no realizaron dicha equivalencia, pierden la condición como tales instructores. Se les considera el ingreso a Nivel 1 aprobado y pueden cursar el Módulo Técnico directamente.</p>
        <p>3. Los Instructores Auxiliares del sistema anterior de cursos pudieron realizar la equivalencia a Nivel 2 cursando el 3er período de Nivel 2 entre el 2003 y el 2005. Los que no realizaron dicha equivalencia obtienen el Nivel 1 al realizar el reentrenamiento correspondiente.</p>
        <p>4. Aquellos instructores del I.S.E.S. que hayan cursado y egresado de esquí en cualquiera de sus niveles y decidan cursar snowboard o viceversa, se les reconoce las materias genéricas, debiendo cursar y aprobar las específicas de la disciplina.</p>
        <p>5. Se podrán presentar certificados de asignaturas cursadas y aprobadas de otros institutos educativos que quedarán a criterio del Consejo Académico la aceptación de los mismos. Las equivalencias de estas asignaturas serán tomadas con una calificación de siete (7) puntos.</p>
      `
    },
    {
      id: 33,
      titulo: 'Artículo 33: Convalidaciones de Títulos y Certificados de Instructor de otras Asociaciones',
      contenidoHtml: `
        <p>Todas las convalidaciones de títulos y certificados de instructores se refieren a las normas de la I.S.I.A. en vigencia.</p>
        <p>Todo ciudadano argentino que presente título o certificado de instructor de Esquí o Snowboard de otra asociación afiliada a la I.S.I.A., será convalidado únicamente incorporándose al I.S.E.S. en el módulo y nivel que determine el Consejo Académico.</p>
        <p>3. Se considera ciudadano argentino todos aquellos que nacieron en Argentina. No se consideran dobles ciudadanías.</p>
        <p>4. Los extranjeros que deseen cursar cualquier nivel del I.S.E.S. estarán sujetos al cupo disponible del nivel correspondiente determinado por el Consejo Académico.</p>
        <p>5. Los extranjeros que posean títulos de otras Asociaciones afiliadas a la I.S.I.A de acuerdo a las equivalencias reconocidas y quieran asociarse, deben inscribirse y cumplir con el reentrenamiento abonando la cuota social anual y el arancel correspondiente.</p>
        <p>6. Los instructores extranjeros certificados por asociaciones que tengan convenio firmado y vigente con la AADIDES, serán reconocidos con reciprocidad de titulaciones de acuerdo al convenio y al que determine el Consejo Académico. Para cursar en el I.S.E.S. deberán rendir el examen de ingreso correspondiente determinado por el Consejo Académico.</p>
        <p>Aadidess y el ISES se reservan el derecho de modificar sin previo aviso las normativas que rigen las mencionadas convalidaciones.</p>
      `
    },
    {
      id: 34,
      titulo: 'Artículo 34: Categorías de Instructores y Pisteros Socorristas',
      contenidoHtml: `
        <ul>
          <li>“Instructor Nivel 1” de esquí alpino.</li>
          <li>“Instructor Nivel 2” de esquí alpino.</li>
          <li>“Instructor Nivel 3” de esquí alpino.</li>
          <li>“Instructor Nivel 4” de esquí alpino.</li>
          <li>“Instructor Nivel 5” de esquí alpino.</li>
          <li>“Instructor Nivel 1” de snowboard.</li>
          <li>“Instructor Nivel 2” de snowboard.</li>
          <li>“Instructor Nivel 3” de snowboard.</li>
          <li>“Instructor Nivel 4” de snowboard.</li>
          <li>“Instructor Nivel 5” de snowboard.</li>
          <li>“Instructor Nivel 1” de esquí de fondo</li>
          <li>“Instructor Nivel 1” de Telemark.</li>
          <li>“Instructor Nivel 2” de Telemark.</li>
          <li>“Profesor de Telemark”.</li>
          <li>“Entrenador de Club de Esquí”.</li>
          <li>“Entrenador Nacional de Esquí”</li>
          <li>“Instructor Nivel 1”de Esquí Adaptado</li>
          <li>“Instructor Nivel 2”de Esquí Adaptado</li>
          <li>“Instructor de Esquí” para niños</li>
          <li>“Pistero Socorrista de 1er Grado”</li>
          <li>“Pistero Socorrista de 2do Grado”</li>
          <li>“Pistero Socorrista de 3er Grado”</li>
          <li>“Maestro Pistero”</li>
          <li>“Artificiero”</li>
          <li>Skiman Nivel 1</li>
        </ul>
        <p>Se considera “En Formación” a los cursantes que se encuentren cursando cualquier nivel. Esta es una situación temporaria limitada al año académico correspondiente y no se otorga certificación alguna.</p>
        <p>Los instructores Nivel 3 o superiores reciben un “título” que los habilita a enseñar en escuelas y clubes como también en forma independiente.</p>
        <p>Los instructores de Nivel 1, Nivel 2, Instructor de Niños, Instructores de Esquí Adaptado y Entrenadores obtienen un “certificado” que los habilita a enseñar únicamente en escuelas, clubes o federaciones de esquí.</p>
        <p>Los Pisteros Socorristas obtienen un “certificado”.</p>
      `
    },
    {
      id: 35,
      titulo: 'Artículo 35: Delegaciones de cursado',
      contenidoHtml: `<p>El Consejo Académico designará los niveles a dictarse en las distintas delegaciones.</p>`
    },
    {
      id: 36,
      titulo: 'Artículo 36: Cancelación y modificaciones de actividades académicas',
      contenidoHtml: `
        <p>El I.S.E.S/ AADIDESS. se reserva el derecho de cancelar cualquier curso, examen, reválida, recuperatorio o reentrenamiento sin previo aviso y no es responsable de los gastos de traslado y/o alojamiento de los participantes.</p>
        <p>Todas las fechas del Calendario Académico y cantidad de horas preestablecidas, tanto para el comienzo, desarrollo y finalización como para los exámenes, reválidas, recuperatorios o reentrenamientos, están sujetas a modificaciones sin previo aviso debido a condiciones climáticas, de nieve y de cierre de los medios de elevación.</p>
        <p>En caso de cancelación total de la actividad por no alcanzar la cantidad mínima de cursantes requerida, situaciones inherentes a la organización de la actividad o razones de fuerza mayor, el cursante podrá optar por realizar dicha actividad en la temporada en curso en otra delegación con inscripciones y vacantes disponibles u optar por el reintegro de la totalidad del arancel abonado.</p>
        <p>El cursante solo podrá modificar su participación a la actividad a la cual se encuentra inscripto mediante él envió de un mail con hasta 10 días de anticipación a la fecha de inicio de la actividad a la cual se encuentra inscripto. En caso de realizar modificaciones en su inscripción pasado el plazo anteriormente mencionado el cursante abonar una multa equivalente al 50% del arancel de la actividad a modificar.</p>
        <p>Una vez completa la inscripción, el arancel solo podrá ser reintegrado por lesión o enfermedad, debiendo presentar un certificado que lo avale.</p>
      `
    },
    {
      id: 37,
      titulo: 'Artículo 37: Instructores Habilitados',
      contenidoHtml: `<p>Para figurar con la certificación o titulación vigente en los listados de la A.A.D.I.D.E.S.S o cursar cualquier Nivel del I.S.E.S. se debe tener la cuota social anual y el reentrenamiento al día.</p>`
    },
    {
      id: 38,
      titulo: 'Artículo 38: Límite de Cupos',
      contenidoHtml: `
        <p>El I.S.E.S. No garantiza la realización de ningún nivel ni tampoco garantiza la continuidad de ningún nivel en cualquiera de las disciplinas, dependiendo éstos de los cupos mínimos y de profesores disponibles.</p>
        <p>El I.S.E.S. Se reserva el derecho de limitar la cantidad de alumnos en cada nivel así como de distribuir los mismos entre los diferentes grupos y horarios.</p>
        <p>3. Las inscripciones se procesan de acuerdo al orden de recepción y el cupo se completará de acuerdo a este orden, siendo facultad de la Dirección o del Consejo Académico la modificación de las mismas..</p>
        <p>4. Aprobar el examen de ingreso no significa poder cursar ya que esto dependerá del cupo disponible para cada disciplina.</p>
      `
    },
    {
      id: 39,
      titulo: 'Artículo 39: Aranceles',
      contenidoHtml: `
        <p>Los aranceles son fijados anualmente por la Comisión Directiva.</p>
        <p>Para participar de cualquier evento académico, todos los aranceles correspondientes deben ser abonados al momento de la inscripción.</p>
        <p>3. Luego de la fecha de cierre, se puede, dentro de los 3 días hábiles y si aún queda cupo, inscribirse con un recargo del 10% por gastos administrativos. Pasado este tiempo, no se aceptan inscripciones, siendo facultad de la Dirección y/o del Consejo Académico la modificación de las mismas.</p>
        <p>4. Los aranceles serán devueltos únicamente contra presentación justificativo médico por accidente o enfermedad comprobada a consideración de la Secretaría Académica.</p>
      `
    },
    {
      id: 40,
      titulo: 'Artículo 40: Excepciones',
      contenidoHtml: `
        <p>Las solicitudes de excepciones se presentarán por escrito al Consejo Académico con la dirección electrónica del remitente para ser contestada por la misma vía.</p>
        <p>Serán tratadas únicamente si son presentadas antes de la situación académica por la cual se solicita excepción, con los certificados correspondientes y las cuotas sociales al día.</p>
        <p>3. Se tomarán en cuenta únicamente las que se solicita la excepción por causa de accidente o enfermedad personal o de un familiar cercano.</p>
        <p>4. No se aceptarán solicitudes de excepción por motivos de estudios, viaje, trabajo, entrenamientos o competencias.</p>
      `
    },
    {
      id: 41,
      titulo: 'Artículo 41: Código de Presencia',
      contenidoHtml: `
        <p>Este Código rige la forma en que el cursante se presentará cada día mientras esté cursando cualquier materia.</p>
        <p>Cada cursante deberá respetar el mismo y quedará a criterio de cada profesor, Director o Delegado el o los llamado/s de atención sobre cualquier punto que el cursante no haya respetado.</p>
        <p>3. Es criterio de la institución que los alumnos de los diversos cursos que se brindan tengan un aspecto prolijo, ordenado, cumpliendo con las pautas que abajo se especifican, sin perjuicio de lo cual las autoridades del I.S.E.S. dispondrán de manera inapelable cuando a su criterio no se guarden las formas adecuadas, imponiendo a los cursantes las pautas a seguir en el caso concreto. Los aspectos que el cursante debe cumplir son los siguientes:</p>
        <ul>
          <li><strong>Vestimenta:</strong> pantalones normales y clásicos que puedan dejar evaluar por parte del profesor o examinador la actitud básica de equilibrio o las acciones fundamentales. En caso de que el Director o algún miembro de dirección, el Asistente, el Delegado, el profesor o el examinador lo requiera, el cursante deberá cambiar de vestimenta.</li>
          <li><strong>Aseo:</strong> El aseo de cada cursante deberá ser impecable ya que muestra la presencia profesional del mismo al estar en contacto con alumnos y clientes representando a la Asociación, la Escuela o Club donde realice su práctica pedagógica como cursante del I.S.E.S. considerándose apropiado el que los hombres estén afeitados o con barba prolija y las mujeres con el pelo atado.</li>
          <li><strong>Aditamentos:</strong> Considerando la peligrosidad de aditamentos en deportes con potencial contacto físico y de alto riesgo como el esquí y el snowboard y que se debe respetar los Artículos 2 inciso c), i), q) y r); Artículo 48, inciso a) y p) y el Artículo 83 de los Estatutos de la Asociación, el uso de aditamentos denominados “aros”, “aritos” o “piercings” por cursantes del I.S.E.S., especialmente en la cara y en la cabeza está prohibido. La violación de ésta disposición, hará pasible al infractor de lo que establece el Artículo 16 de los Estatutos de la Asociación. En el caso de “aritos” en las orejas, estará a juicio del Director o Profesor del Curso, calificar la peligrosidad de los mismos y determinar su eventual remoción.</li>
          <li><strong>Mochilas:</strong> No se permitirá el uso de mochilas de ninguna especie y tamaño durante el cursado de ninguna materia, salvo durante las prácticas de Medio Ambiente y Seguridad.</li>
        </ul>
        <p>4. Está prohibido fumar y/o escuchar música durante la cursada de cualquier evento Académico.</p>
        <p>5. No se podrá utilizar esquís tipo doble punta, fats o rockers durante la cursada, a menos que el profesor así lo requiera para una práctica específica.</p>
        <p>6. Cada cursante debe presentarse en condiciones físicas y psíquicas apropiadas. Los cursantes no podrán participar de ninguna clase en estado de alcoholismo y/o drogadicción.</p>
      `
    },
    {
      id: 42,
      titulo: 'Artículo 42: Pistero Socorrista de 1er, 2do y 3er Grado',
      contenidoHtml: `
        <p>Se deben aprobar todas las materias y trabajos prácticos de acuerdo al Plan de Estudios vigente.</p>
        <p>Las materias prácticas se aprueban con la asistencia obligatoria. De no asistir no se aprueba el módulo, debiendo recursarlo y rendirlo en otra oportunidad.</p>
        <p>3. No hay promoción ni recuperatorios.</p>
        <p>4. Si se reprueba algún módulo, se debe recursar el curso completo..</p>
        <p>5.Para contar con el certificado vigente, se debe revalidar cada dos años asistiendo a un reentrenamiento obligatorio.</p>
      `
    },
    {
      id: 43,
      titulo: 'Artículo 43: Sanciones Disciplinarias',
      contenidoHtml: `<p>El Consejo Académico del I.S.E.S. y/o la Comisión Directiva de A.A.D.I.D.E.S. se reservan el derecho de aplicar las sanciones disciplinarias que crean corresponder a los cursantes cuya actitud y comportamiento no sean los adecuados y afecten a los demás cursantes, cuerpo docente o directivos del I.S.E.S. y/o de la A.A.D.I.D.E.S.</p>`
    },
    {
      id: 44,
      titulo: 'Artículo 44: Situaciones no reglamentadas y Modificaciones',
      contenidoHtml: `<p>Cualquier situación referida al desarrollo en cualquier aspecto que no figure en este reglamento, será elevada al Consejo Académico el cual decidirá al respecto.</p><p>El Consejo Académico se reserva el derecho de modificar las condiciones de cursado debido a causas de fuerza mayor u otra.</p>`
    }
  ];

  scrollTo(id: number): void {
    const element = document.getElementById('art-' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}