import { Component, signal, computed, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface FaqItem {
  pregunta: string;
  respuesta: string;
}

interface FaqCategory {
  titulo: string;
  items: FaqItem[];
}

interface FaqSection {
  titulo: string;
  categorias: FaqCategory[];
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.scss']
})
export class FAQComponent implements AfterViewInit {
  searchTerm = signal('');

    faqData: FaqSection[] = [
    {
      titulo: 'Cursar Nivel 1 Esquí y Snowboard',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para realizar el curso de Instructor de Esquí o Snowboard?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet (ver INSCRIPCIONES), o enviando un email a central@aadidess.com.' },
            { pregunta: '¿Qué necesito para poder inscribirme?', respuesta: '1. tener 16 años.\n2. completar el formulario de inscripción\n3. abonar el arancel correspondiente.\n4. presentar Ficha Médica firmado y sellado por un médico clínico y por un Psicólogo\n5. Copia DNI\n6. Copia fiel de partida de nacimiento (en caso de contar con el nuevo DNI)\n7. Copia del carnet de obra social/prepaga o seguro personal' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción para todas las Delegaciones. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y con recargo. Todas las fechas las podes encontrar en la descripción de cada curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Requisitos de Cursado',
          items: [
            { pregunta: 'Si apruebo el examen de ingreso, ¿qué necesito hacer para poder cursar?', respuesta: '1. asociarte a AADIDESS (Asociación Argentina de Instructores de Esquí, Snowboard y Pisteros Socorristas),\n2. completar el formulario de inscripción\n3. abonar el arancel correspondiente.\n4. presentarte con el material en buen estado (tablas, fijaciones, botas y casco),\n5. presentarte con el pase para los medios de elevación' },
            { pregunta: '¿Porqué tengo que asociarme a AADIDESS?', respuesta: 'Porque uno de los beneficios que brinda esta institución a sus asociados es poder asistir a cursos de formación y reentrenamiento que brinda el ISES. por esto deberás ser un socio para poder cursar ( durante el cursado de nivel 1, en el valor del curso esta incluido el arancel de socio temporario)' },
            { pregunta: '¿Cómo es la metodología de cursado?', respuesta: 'El cursado de nivel 1 se divide en dos partes, 1 el cursado de materias teóricas (a partir del 2020 en formato virtual) y 2 el cursado de materias en pista (para poder cursar en pista deberás aprobar el examen de ingreso técnico).\nPodrás inscribirte, cursar y aprobar el modulo teórico y contaras con dos años para poder aprobar el examen de ingreso y cursar en pista, caso contrario se perderá lo aprobado anteriormente' },
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El cursado en pista es de tiempo completo durante casi tres semanas.\nDebido a la carga horaria, las fechas de desarrollo del curso y las modificaciones por clima o condiciones de nieve, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 80% de cada materia (ver REGLAMENTO ACADÉMICO), teniendo horarios diferentes, incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizas el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿Puedo cambiar de delegación para cursar?', respuesta: 'Solo pueden cambiarse de delegación y de fecha hasta 10 días antes del inicio de la actividad. Los cambios se realizan a modo excepcional cuando el cursante presente algún motivo o justificación puntual que amerita dicha modificación.' },
            { pregunta: '¿Porqué no aprobé el Módulo Técnico?', respuesta: 'Además de poseer un buen nivel técnico, se necesita incorporar un “lineamiento técnico” o sea una forma establecida de esquiar o surfear que se llama “Técnica de Compensación”. El tiempo necesario para asimilar esta técnica depende de la habilidad que posee cada cursante y puede ser mayor al cursado del módulo.' }
          ]
        },
        {
          titulo: 'Examen de Ingreso técnico',
          items: [
            { pregunta: 'Aadidess ofrece una clínica pre ingreso – ¿es obligatoria?', respuesta: 'la clínica pre ingreso no es obligatoria, pero la recomendamos a aquellos alumnos que quieran estar mas seguros o prepararse específicamente para este examen, la misma se dictara la semana previa al examen de ingreso' },
            { pregunta: 'Si apruebo el ingreso en una Delegación ¿puedo cursar en otra?', respuesta: 'Tenés prioridad para cursar en la Delegación donde aprobaste el ingreso. Si querés cursar en otra, vas a depender del cupo disponible de esa Delegación.' },
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo que varía en cada Delegación y disciplina. No garantizamos que puedas cursar en la Delegación pretendida ya que dependerá del cupo correspondiente. Cuando se completa el cupo máximo en una Delegación, es factible cursar en otra que tenga cupo disponible.' },
            { pregunta: '¿Cuándo se realiza el examen de ingreso?', respuesta: 'Se realiza una fecha oficial a fines de cada temporada dependiendo de la cantidad de inscriptos, de las condiciones climáticas o de nieve y sobre todo, del cupo disponible de cada Delegación. se intentaran realizar otras fechas dependiendo de los inscriptos' },
            { pregunta: 'Si apruebo el ingreso, ¿cuándo comienzo a cursar?', respuesta: 'Inmediatamente después del examen.' },
            { pregunta: '¿En qué consiste el examen de ingreso a Nivel 1?', respuesta: 'Se toman las mejores notas de las bajadas dentro y fuera de pista de cada gesto técnico con Lineamiento de la Técnica de Compensación. Se recomienda una suficiente preparación previa con Lineamiento Técnico. Debido a las condiciones de nieve, clima o pista, se podrán examinar algunos o todos los gestos técnicos. Se toma como referencia nivel Expertos 6.\n\nGestos Técnicos de examen de Esquí: Súperparalelo – Corto Paralelo – Fuera de Pista\nSnowboard: 5 hs de surfeada grupal –\nEl examen constará en realizar diferentes bajadas en diferentes condiciones de pista y nieve.\nSe evaluará la capacidad técnica del alumno para adatarse a los diferentes tipos de vueltas, velocidades y terrenos.\n\nPara rendir este examen, te recomendamos prepararte técnicamente con suficiente anticipación con profesores actualizados o realizando clínicas específicas. Necesitás presentarte con el material en buen estado (tablas, fijaciones, botas y casco).' },
            { pregunta: '¿Cómo se califica el examen?', respuesta: 'Se califica con notas de 0 a 100 puntos. Se toman las mejores calificaciones hasta completar el cupo correspondiente que tiene cada Delegación.\n\nLas mujeres con 140 puntos FIS o menos y 120 puntos FIS o menos para varones en cualquier disciplina presentando certificado FIS o FASA pueden cursar sin rendir ingreso. Los puntos no deben tener más de 5 años de antigüedad.' }
          ]
        },
        {
          titulo: 'Extranjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero vas a tener que esperar a la disponibilidad de cupo ya que tienen prioridad para inscribirse los ciudadanos argentinos.' },
            { pregunta: '¿Cómo extranjero qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Para iniciar los trámites deberás contar con Pasaporte o Cédula extendido por el país de origen y Radicación actualizada o Permiso de Ingreso al País extendido por la Dirección Nacional de Migraciones. En ambos casos deberá figurar el documento que utilicen para iniciar el trámite.' }
          ]
        },
        {
          titulo: 'Aranceles',
          items: [
            { pregunta: '¿Dónde y cómo tengo que abonar el arancel correspondiente al examen de ingreso?', respuesta: 'Para reservar tu lugar al examen de ingreso, tenés que inscribirte completando el formulario de pre-inscripción desde www.aadidess.com .\nAl recibir el mismo, te enviaremos la solicitud de inscripción con las instrucciones.' },
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'El arancel incluye únicamente las horas cátedra de cada módulo, los exámenes, los recuperatorios oficiales.' },
            { pregunta: 'Si no apruebo, ¿me devuelven el dinero del arancel abonado?', respuesta: 'No, es parte de los gastos de organización del examen de ingreso.' }
          ]
        },
        {
          titulo: 'Reglamento y Autoridades',
          items: [
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO encontrás la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿El Certificado que me entregan cuando apruebo es reconocido?', respuesta: 'El Certificado es reconocido por todas las Escuelas y Clubes del país. En el extranjero, dependerá de cada Asociación o escuela el reconocimiento del Nivel 1 y 2, salvo en los países en los cuales existen convenios bilaterales. Desde el Nivel 3 hasta el Nivel 5 tienen reconocimiento internacional ya que llevan la estampilla I.S.I.A. (International Ski Instructors Association).' },
            { pregunta: '¿Qué certificados o requisitos necesito presentar para recibir el certificado y carnet?', respuesta: 'Contactate directamente con central@aadidess.com' },
            { pregunta: '¿Qué se debe tener en cuenta al momento de realizar una preinscripción?', respuesta: 'En caso de preinscribirte a la clínica preingreso, tu vacante en el módulo pista está reservada en caso de que apruebes. No realices la preinscripción a este módulo (pista) hasta no aprobar esta instancia.\n\nPor otro lado, al preinscribirte al examen de ingreso, tu vacante en el módulo pista está reservada en caso de que apruebes. No realices la preinscripción a este módulo (pista) hasta no aprobar esta instancia.\n\nPara poder preinscribirte al módulo pista deberás contar con el módulo teórico cursado y el examen de ingreso a pista aprobado. Si no cumplís con estos requisitos, tu preinscripción será rechazada.' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Nivel 2 Esquí y Snowboard',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para cursar?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet (ver INSCRIPCIONES). Si querés cursar en otra delegación, tenés que pre-inscribirte por Internet.' },
            { pregunta: '¿Qué necesito para poder inscribirme?', respuesta: '1. Tener el Nivel 1 vigente (reentreno y cuota al día).\n2. presentar comprobante de 100 hs trabajadas en escuela o club\n3. Completar el formulario y Abonar el arancel correspondiente.\n4. presentar Certificado de Salud Física firmado y sellado por un Médico Clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo\n5. Copia DNI\n6. Copia Fiel de partida de nacimiento (en caso de contar con el nuevo DNI)\n\nNOTA: los puntos 4, 5 y 6 únicamente si no presentaste antes.' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción para todas las Delegaciones. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y con recargo. Todas las fechas las encontrás en la descripción de cada curso en nuestra página.' },
            { pregunta: '¿Qué necesito hacer para poder cursar?', respuesta: '1. completar personalmente el formulario de inscripción\n2. abonar el arancel correspondiente.\n3. presentarte a cursar con el pase para los medios de elevación.' }
          ]
        },
        {
          titulo: 'Extanjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero antes vas a tener que solicitarlo por escrito al Consejo Académico el cual te indicará los requisitos a seguir.' },
            { pregunta: 'Cómo extranjero, en caso de poder cursar, ¿qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Para iniciar los trámites deberás contar con Pasaporte o Cédula extendido por el país de origen y Radicación actualizada o Permiso de Ingreso al País extendido por la Dirección Nacional de Migraciones. En ambos casos deberá figurar el documento que utilicen para iniciar el trámite.' }
          ]
        },
        {
          titulo: 'Arancel',
          items: [
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'El arancel incluye únicamente las horas cátedra de cada módulo, los exámenes, los recuperatorios oficiales y los manuales de Técnica y Método.' }
          ]
        },
        {
          titulo: 'Cursada',
          items: [
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso es de tiempo completo durante casi cuatro meses (desde la mitad de junio hasta la 1ra semana de octubre aproximadamente) y debido a la carga horaria de las materias y las fechas de desarrollo de cada módulo, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 80% de cada materia (ver REGLAMENTO ACADEMICO), teniendo éstas horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿El I.S.E.S. me garantiza un lugar en alguna Escuela o Club Adherido o Reconocido para realizar la pasantía del Módulo Pedagógico?', respuesta: 'Ofrecemos un listado con las Escuelas y Clubes pero cada cursante es responsable de conseguir un lugar en el establecimiento que mas le convenga. Este listado los podés encontrar en http://www.aadidess.com/institucional/escuelas-y-clubes-reconocidos-por-la-aadides/' },
            { pregunta: '¿Puedo cambiar de delegación para cursar?', respuesta: 'Solo pueden cambiarse de delegación y de fecha hasta 10 días antes del inicio de la actividad. Los cambios se realizan a modo excepcional cuando el cursante presente algún motivo o justificación puntual que amerita dicha modificación.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO podés encontrar la información referida a este punto.' },
            { pregunta: '¿Tengo que practicar durante la temporada o solo cuando estoy cursando?', respuesta: 'Recomendamos practicar el Lineamiento Técnico durante toda la temporada antes de presentarse al examen.' }
          ]
        },
        {
          titulo: 'Plan de Estudios',
          items: [
            { pregunta: '¿Dónde puedo consultar el Plan de Estudios?', respuesta: 'Es importante que leas el Plan de Estudios para que sepas todo el desarrollo de cada módulo.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿El certificado que me entregan cuando apruebo es reconocido?', respuesta: 'El certificado del I.S.E.S. es reconocido por el Ministerio de Educación de Río Negro con validez nacional y por todas las Escuelas y Clubes del país.' },
            { pregunta: '¿Qué tengo que hacer para recibir mi nuevo certificado y el carnet actualizado?', respuesta: 'Contactate directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Nivel 3 Esquí y Snowboard',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Cuáles son los requisitos para cursar Nivel 3?', respuesta: 'Aprobar el examen de ingreso y contar con secundario aprobado, contar con el nivel 2 al día' },
            { pregunta: '¿Dónde y cómo puedo inscribirme para realizar el examen de ingreso o cursar?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet (ver INSCRIPCIONES).' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y con recargo. Todas las fechas las encontrás en la descripción de cada curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Extanjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero antes vas a tener que solicitarlo por escrito al Consejo Académico el cual te indicará los requisitos a seguir.' },
            { pregunta: 'Cómo extranjero, en caso de poder cursar, ¿qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Si aprobaste tus Estudios Secundarios en un país extranjero, deberás convalidar tu Título y Certificado de Estudios secundarios (Bachillerato) por el Ministerio de Educación de la Nación Argentina en el Departamento de Validez Nacional de Títulos y Estudios\n\nIMPORTANTE: Para iniciar los trámites de convalidación deberás contar con Pasaporte o Cédula extendido por el país de origen y Radicación actualizada o Permiso de Ingreso al País extendido por la Dirección Nacional de Migraciones. En ambos casos deberá figurar el documento que utilicen para iniciar el trámite.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Por qué tengo que realizar el examen de ingreso si estoy cursando desde Nivel 1?', respuesta: 'Porque estás por realizar otro curso con un nivel más exigente en el cual se te otorga un certificado superior.' },
            { pregunta: '¿Qué necesito para poder inscribirme al examen de ingreso?', respuesta: '1. tener el Nivel 2 vigente (reentreno y cuota al día).\n2. completar personalmente el formulario de inscripción\n3. abonar el arancel correspondiente.' },
            { pregunta: 'Si apruebo el examen de ingreso ¿qué necesito hacer para poder cursar?', respuesta: '1. completar personalmente el formulario de inscripción\n2. presentar copia del Título Secundario legalizada por Escribano, Policía, Registro Civil. Juez de Paz o Ministerio de Educación.\n3. presentar Certificado de Salud Física firmado y sellado por un Médico Clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo\nNOTA: los puntos 2 y 3 únicamente si no presentaste antes' },
            { pregunta: 'Si apruebo el ingreso en una Delegación ¿puedo cursar en la otra?', respuesta: 'Si querés cursar en otra, vas a depender del cupo disponible de esa Delegación.' },
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo que varía en las dos Delegaciones y disciplinas. No garantizamos que puedas cursar en la Delegación pretendida ya que dependerá del cupo mínimo. Cuando se completa el cupo máximo en una Delegación, es factible cursar en la otra que tenga cupo disponible.' },
            { pregunta: '¿Cuándo se realiza el examen de ingreso?', respuesta: 'El examen oficial se realiza a fines de cada temporada.\nExiste la posibilidad de realizar un examen a principios de temporada dependiendo de la cantidad de inscriptos, de las condiciones climáticas o de nieve y sobre todo, de los inscriptos. Este no es examen oficial y queda a criterio del Consejo Académico si se realiza o no.' },
            { pregunta: '¿En qué consiste el examen de ingreso?', respuesta: 'Es el mismo examen de egreso de Nivel 2 pero se aprueba con 55 puntos de promedio y ningún gesto debajo de esa nota.\nPara rendir este examen, te recomendamos prepararte técnicamente con suficiente anticipación con algún profesor o realizando clínicas específicas. Necesitás presentarte con el material en buen estado (tablas, fijaciones, botas y casco).' },
            { pregunta: 'Si no apruebo, ¿me devuelven el dinero del arancel abonado?', respuesta: 'No, es parte de los gastos de organización del examen de ingreso.' },
            { pregunta: '¿Si apruebo el ingreso, tengo que pagar el arancel completo del módulo?', respuesta: 'Se te descuenta el arancel del ingreso.' }
          ]
        },
        {
          titulo: 'Arancel',
          items: [
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'El arancel incluye únicamente las horas cátedra de cada módulo, los exámenes, los recuperatorios oficiales y el manual de Progresión Metódica.' }
          ]
        },
        {
          titulo: 'Cursada',
          items: [
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso es de tiempo completo durante casi cuatro meses (desde la mitad de junio hasta la 1ra semana de octubre aproximadamente) y debido a la carga horaria de las materias y las fechas de desarrollo de cada módulo, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 80% de cada materia (ver REGLAMENTO ACADEMICO), teniendo éstas horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿El I.S.E.S. me garantiza un lugar en alguna Escuela o Club Adherido o Reconocido para realizar la pasantía del Módulo Pedagógico?', respuesta: 'Ofrecemos un listado con las Escuelas y Clubes pero cada cursante es responsable de conseguir un lugar en el establecimiento que mas le convenga. Este listado los podés encontrar en http://www.aadidess.com/institucional/escuelas-y-clubes-reconocidos-por-la-aadides/' },
            { pregunta: '¿Puedo cambiar de delegación para cursar?', respuesta: 'Solo pueden cambiarse de delegación y de fecha hasta 10 días antes del inicio de la actividad. Los cambios se realizan a modo excepcional cuando el cursante presente algún motivo o justificación puntual que amerita dicha modificación.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO podés encontrar la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿El certificado que me entregan cuando apruebo es reconocido?', respuesta: 'El certificado del I.S.E.S. es reconocido por el Ministerio de Educación de Río Negro y por todas las Escuelas y Clubes del país.\n\nEl Nivel 3 tiene reconocimiento internacional solo para los cursantes que presenten ISIA TEST aprobado, ya que lleva la tarjeta I.S.I.A. (International Ski Instructors Association).' },
            { pregunta: '¿Qué tengo que hacer para recibir mi nuevo certificado y el carnet actualizado?', respuesta: 'Contactate directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Nivel 4 Demo',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para realizar el examen de ingreso o cursar?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet (ver INSCRIPCIONES). Este nivel se dicta únicamente en Chapelco y Catedral.' },
            { pregunta: '¿Qué necesito para poder inscribirme al examen de ingreso?', respuesta: '1. Tener el Nivel 3 vigente (reentreno y cuota al día).\n2. Tener ISIA TEST aprobado\n3. Completar personalmente el formulario de inscripción\n4. Abonar el arancel correspondiente.\n5. presentar Certificado de Salud Física firmado y sellado por un Médico Clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y con recargo. Todas las fechas las encontrás en la descripción del curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Por qué tengo que realizar el examen de ingreso si estoy cursando desde Nivel 1?', respuesta: 'Porque estás por realizar otro curso con un nivel más exigente en el cual se te otorga un título de posgrado.' },
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo que varía en las dos Delegaciones y disciplinas. No garantizamos que puedas cursar en la Delegación pretendida ya que dependerá del cupo mínimo o máximo. Cuando se completa el cupo máximo en una Delegación, es factible cursar en la otra que tenga cupo disponible.' },
            { pregunta: '¿Cuándo se realiza el examen de ingreso?', respuesta: 'El examen oficial se realiza a fines de cada temporada.' },
            { pregunta: '¿En qué consiste el examen de ingreso?', respuesta: 'Consiste en aprobar Súper, Corto, Bumps y Fuera de Pista en esquí y Vuelta Súper, Vuelta Corta y Fuera de pista en snowboard con 50 puntos de promedio y ningún gesto debajo de esa nota.\nPara rendir este examen, te recomendamos prepararte técnicamente con suficiente anticipación con algún profesor o realizando clínicas específicas. Se debe utilizar casco.' }
          ]
        },
        {
          titulo: 'Examen de Egreso Libre',
          items: [
            { pregunta: '¿Existe la posibilidad de rendir el examen de egreso en forma libre?', respuesta: 'Existe la posibilidad de rendir el examen de egreso en forma libre. Por favor consultar en Secretaría Académica.' }
          ]
        },
        {
          titulo: 'Cursada',
          items: [
            { pregunta: '¿Cuáles son los requisitos técnicos para cursar?', respuesta: '1. Aprobar el examen de ingreso.\n2. ISIA Test Aprobado' },
            { pregunta: 'Si apruebo el examen de ingreso y el ISIA TEST, ¿qué necesito hacer para poder cursar?', respuesta: '1. completar personalmente el formulario de inscripción\n2. abonar el arancel correspondiente.\n3. utilizar casco\n4. presentarte con el pase para los medios de elevación.' },
            { pregunta: 'Si apruebo el ingreso en una Delegación ¿puedo cursar en la otra?', respuesta: 'Tenés prioridad para cursar en la Delegación donde aprobaste el ingreso. Si querés cursar en la otra, vas a depender del cupo disponible de esa Delegación. Se cursa únicamente en Chapelco y Catedral.' },
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso es de tiempo completo durante casi cuatro meses (desde la mitad de junio hasta la 1ra semana de octubre aproximadamente) y debido a la carga horaria de las materias y las fechas de desarrollo de cada módulo, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 100% de cada materia (ver REGLAMENTO ACADEMICO), teniendo éstas horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿El I.S.E.S. me garantiza un lugar en alguna Escuela o Club Adherido o Reconocido para realizar la pasantía del Módulo Pedagógico?', respuesta: 'Ofrecemos un listado con las Escuelas y Clubes pero cada cursante es responsable de conseguir un lugar en el establecimiento que más le convenga. Este listado los podés encontrar en http://www.aadidess.com/institucional/escuelas-y-clubes-reconocidos-por-la-aadides/' },
            { pregunta: '¿Puedo cambiar de delegación para cursar?', respuesta: 'Solo pueden cambiarse de delegación y de fecha hasta 10 días antes del inicio de la actividad. Los cambios se realizan a modo excepcional cuando el cursante presente algún motivo o justificación puntual que amerita dicha modificación.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO podés encontrar la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Arancel',
          items: [
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'El arancel incluye únicamente las horas cátedra de cada módulo, los exámenes, los recuperatorios oficiales y los manuales de Técnica y Método.' },
            { pregunta: 'Si no apruebo, ¿me devuelven el dinero del arancel abonado?', respuesta: 'No, es parte de los gastos de organización del examen de ingreso.' },
            { pregunta: '¿Si apruebo el ingreso, tengo que pagar el arancel completo del módulo?', respuesta: 'Se te descuenta el arancel del ingreso.' }
          ]
        },
        {
          titulo: 'Título',
          items: [
            { pregunta: '¿El título que me entregan cuando apruebo es reconocido?', respuesta: 'Todos los certificados y títulos del I.S.E.S. son reconocidos por todas las Escuelas y Clubes del país.' },
            { pregunta: '¿Qué tengo que hacer para recibir mi nuevo Título y el carnet actualizado?', respuesta: 'Contactate directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Nivel 5 Profesor',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para cursar?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet' },
            { pregunta: '¿Qué necesito para poder inscribirme?', respuesta: '1. Haber aprobado el Nivel 4 no hace más de dos temporadas\n2. Cuota al día.\n3. Completar personalmente el formulario de inscripción\n4. Abonar el arancel correspondiente.\n5. presentar Certificado de Salud Física firmado y sellado por un Médico Clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo.\n6. Presentar Certificado de Antecedentes emitido por la Policía Federal.' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y con recargo. Todas las fechas las encontrás en la descripción del curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Hay algún examen o cupo para ingresar?', respuesta: 'Si aprobaste el Nivel 4 hace más de dos temporadas deberás rendir nuevamente el examen final de Nivel 4 y aprobarlo para poder cursar Nivel 5.' }
          ]
        },
        {
          titulo: 'Cursada',
          items: [
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso es de tiempo completo durante casi cuatro meses (desde la mitad de junio hasta la 1ra semana de octubre aproximadamente) y debido a la carga horaria de las materias y las fechas de desarrollo de cada módulo, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 100% de cada materia (ver REGLAMENTO ACADEMICO), teniendo éstas horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿Puedo cambiar de delegación para cursar?', respuesta: 'Este nivel solo se cursa en la delegación Catedral.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO podés encontrar la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Arancel',
          items: [
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'No, los aranceles incluyen únicamente las horas cátedra de cada módulo, los exámenes, los recuperatorios oficiales y los manuales de Técnica y Método.' }
          ]
        },
        {
          titulo: 'Título',
          items: [
            { pregunta: '¿El título que me entregan cuando apruebo es reconocido?', respuesta: 'Todos los certificados y títulos del I.S.E.S. son reconocidos por todas las Escuelas y Clubes del país.' },
            { pregunta: '¿Qué tengo que hacer para recibir mi nuevo Título y el carnet actualizado?', respuesta: 'Contactate directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Entrenador de Club de Esquí',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para realizar el curso de Entrenador?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet' },
            { pregunta: '¿Qué necesito para poder inscribirme?', respuesta: '1. Tener el Nivel 1 o superior vigente (reentreno y cuota al día).\n2. Completar personalmente el formulario de inscripción\n3. Abonar el arancel correspondiente.\n4. presentar Certificado de Salud Física firmado y sellado por un Médico Clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo\n5. Copia DNI\n6. Copia Fiel de partida de nacimiento (en caso de contar con el nuevo DNI)\n\nNOTA: los puntos 4, 5 y 6 únicamente si no presentaste antes.' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y el arancel es con recargo. Todas las fechas las encontrarás en la descripción del curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Requisitos de Cursado',
          items: [
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso es de tiempo completo durante casi cuatro meses (desde la mitad de junio hasta mitad de octubre aproximadamente).\nDebido a la carga horaria de las materias, las fechas de desarrollo de cada módulo y las modificaciones por clima o condiciones de nieve, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 80% de cada materia (ver REGLAMENTO ACADEMICO), teniendo éstas horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿El I.S.E.S. me garantiza un lugar en algún Club Adherido o Reconocido para realizar la pasantía del Módulo Pedagógico?', respuesta: 'Ofrecemos un listado con los Clubes pero cada cursante es responsable de conseguir un lugar en el establecimiento que más le convenga. Este listado lo encontrás en http://www.aadidess.com/institucional/escuelas-y-clubes-reconocidos-por-la-aadides/' },
            { pregunta: '¿Cuánto voy a cobrar durante la pasantía del Módulo Pedagógico?', respuesta: 'La pasantía es obligatoria como materia y no se estipula cobro alguno. Sin embargo, de existir una remuneración, esta queda liberada al común acuerdo entre el establecimiento y el pasante.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo. Tienen prioridad los aspirantes que están actualmente desempeñándose en un club.' },
            { pregunta: '¿Cuándo se realiza el examen de ingreso?', respuesta: 'Este curso no exige examen de ingreso.' }
          ]
        },
        {
          titulo: 'Extranjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero se deberá esperar a la disponibilidad de cupo ya que tienen prioridad para inscribirse los ciudadanos argentinos.' },
            { pregunta: '¿Cómo extranjero qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Si aprobaste tus Estudios Secundarios en un país extranjero, deberás convalidar tu Título y Certificado de Estudios secundarios (Bachillerato) por el Ministerio de Educación de la Nación Argentina en el Departamento de Validez Nacional de Títulos y Estudios' }
          ]
        },
        {
          titulo: 'Aranceles',
          items: [
            { pregunta: '¿Dónde y cómo tengo que abonar el arancel correspondiente?', respuesta: 'Para reservar tu lugar, tenés que inscribirte completando el formulario de pre-inscripción desde www.aadidess.com  Para inscribirte en Chapelco o Catedral tenés que hacerlo personalmente en las respectivas oficinas. Al recibir el mismo, te enviaremos la solicitud de inscripción con las instrucciones.' },
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'No, los aranceles incluyen únicamente las horas cátedra de cada módulo, los exámenes y los recuperatorios oficiales.' },
            { pregunta: '¿Cuántos módulos tengo que pagar?', respuesta: 'El Módulo 1 y el Módulo 3.' }
          ]
        },
        {
          titulo: 'Reglamento y Autoridades',
          items: [
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO encontrás la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿El Certificado que me entregan cuando apruebo todos los módulos es reconocido?', respuesta: 'El Certificado del I.S.E.S. es reconocido por todos los Clubes del país y por el Ministerio de Educación. En el extranjero, dependerá de cada Asociación o club el reconocimiento.' },
            { pregunta: '¿Qué certificados o requisitos necesito presentar para recibir el certificado y carnet?', respuesta: 'Contactarse directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Entrenador Nacional',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para realizar el curso de Entrenador?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet' },
            { pregunta: '¿Qué necesito para poder inscribirme?', respuesta: '1. Tener el titulo Entrenador de Club de Esqui vigente (reentreno y cuota al día).\n2. Completar personalmente el formulario de inscripción\n3. Abonar el arancel correspondiente.\n4. presentar Certificado de Salud Física firmado y sellado por un Médico Clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo\n5. Copia DNI\n6. Copia Fiel de partida de nacimiento (en caso de contar con el nuevo DNI)\n\nNOTA: los puntos 4, 5 y 6 únicamente si no presentaste antes.' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y el arancel es con recargo. Todas las fechas las encontrarás en la descripción del curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Requisitos de Cursado',
          items: [
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso es de tiempo completo durante casi cuatro meses (desde la mitad de junio hasta mitad de octubre aproximadamente).\nDebido a la carga horaria de las materias, las fechas de desarrollo de cada módulo y las modificaciones por clima o condiciones de nieve, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 80% de cada materia (ver REGLAMENTO ACADEMICO), teniendo éstas horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados, por estas razones te recomendamos dedicarte exclusivamente al curso de instructor ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿El I.S.E.S. me garantiza un lugar en algún Club Adherido o Reconocido para realizar la pasantía del Módulo Pedagógico?', respuesta: 'Ofrecemos un listado con los Clubes pero cada cursante es responsable de conseguir un lugar en el establecimiento que más le convenga. Este listado lo encontrás en http://www.aadidess.com/institucional/escuelas-y-clubes-reconocidos-por-la-aadides/' },
            { pregunta: '¿Cuánto voy a cobrar durante la pasantía del Módulo Pedagógico?', respuesta: 'La pasantía es obligatoria como materia y no se estipula cobro alguno. Sin embargo, de existir una remuneración, esta queda liberada al común acuerdo entre el establecimiento y el pasante.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo. Tienen prioridad los aspirantes que están actualmente desempeñándose en un club.' },
            { pregunta: '¿Cuándo se realiza el examen de ingreso?', respuesta: 'Este curso no exige examen de ingreso.' }
          ]
        },
        {
          titulo: 'Extranjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero se deberá esperar a la disponibilidad de cupo ya que tienen prioridad para inscribirse los ciudadanos argentinos.' },
            { pregunta: '¿Cómo extranjero qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Si aprobaste tus Estudios Secundarios en un país extranjero, deberás convalidar tu Título y Certificado de Estudios secundarios (Bachillerato) por el Ministerio de Educación de la Nación Argentina en el Departamento de Validez Nacional de Títulos y Estudios' }
          ]
        },
        {
          titulo: 'Aranceles',
          items: [
            { pregunta: '¿Dónde y cómo tengo que abonar el arancel correspondiente?', respuesta: 'Para reservar tu lugar, tenés que inscribirte completando el formulario de pre-inscripción desde www.aadidess.com  Para inscribirte en Chapelco o Catedral tenés que hacerlo personalmente en las respectivas oficinas. Al recibir el mismo, te enviaremos la solicitud de inscripción con las instrucciones.' },
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'No, los aranceles incluyen únicamente las horas cátedra de cada módulo, los exámenes y los recuperatorios oficiales.' },
            { pregunta: '¿Cuántos módulos tengo que pagar?', respuesta: 'El Módulo 1 y el Módulo 3.' }
          ]
        },
        {
          titulo: 'Reglamento y Autoridades',
          items: [
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO encontrás la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿El Certificado que me entregan cuando apruebo todos los módulos es reconocido?', respuesta: 'El Certificado del I.S.E.S. es reconocido por todos los Clubes del país y por el Ministerio de Educación. En el extranjero, dependerá de cada Asociación o club el reconocimiento.' },
            { pregunta: '¿Qué certificados o requisitos necesito presentar para recibir el certificado y carnet?', respuesta: 'Contactarse directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Pistero Socorrista 1° grado',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo pre-inscribirme para realizar el curso de Pistero Socorrista de 1er Grado?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet' },
            { pregunta: '¿Qué necesito para poder inscribirme al examen de ingreso?', respuesta: '1. tener 18 años en el momento de la inscripción.\n2. completar personalmente el formulario de inscripción.\n3. abonar el arancel correspondiente.\n4. presentar copia del Analítico Secundario legalizada por Escribano, Policía, Registro Civil. Juez de Paz o Ministerio de Educación.\n5. presentar Certificado de Salud Física firmado y sellado por un médico clínico y un Certificado de Salud Mental firmado y sellado por un Psicólogo\n6. Copia DNI\n7. Copia Fiel de partida de nacimiento ( en caso de contar con el nuevo DNI)' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si hay una fecha límite y figurará en nuestra página www.aadidess.com .' }
          ]
        },
        {
          titulo: 'Requisitos de Cursado',
          items: [
            { pregunta: 'Si apruebo el examen de ingreso, ¿qué necesito hacer para poder cursar?', respuesta: '1. ingresar al cupo determinado (se toman las mejores notas),\n2. completar personalmente el formulario de inscripción,\n3. abonar el arancel correspondiente,\n4. asociarte a AADIDES (Asociación Argentina de Instructores de Esquí y Snowboard),\n5. presentarte con el material en buen estado (tablas, fijaciones, botas y casco),' },
            { pregunta: '¿Porqué tengo que asociarme a AADIDES?', respuesta: 'Porque uno de los beneficios que brinda esta institución a sus asociados es asistir a cursos de formación y reentrenamiento que brinda el ISES.' },
            { pregunta: '¿Tengo tiempo para continuar con mis estudios secundarios, universitarios o mi trabajo actual?', respuesta: 'El curso de Pistero Socorrista es de tiempo completo durante casi un mes (desde la mitad de septiembre hasta principios de octubre).\nDebido a la carga horaria de las materias, las fechas de desarrollo y las modificaciones por clima o condiciones de nieve, es necesario contar con total disponibilidad y flexibilidad de tiempo ya que se debe cursar el 100% del curso (ver REGLAMENTO ACADEMICO), teniendo  horarios diferentes (diurnos y nocturnos) incluyendo fines de semana y feriados. Por estas razones te recomendamos dedicarte exclusivamente al curso ya que no reconocemos justificaciones por estudio, trabajo o traslados.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizás el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante contar con una cobertura médica y seguro personal contra accidentes.' },
            { pregunta: '¿Puedo cambiar de delegación para cursar?', respuesta: 'El curso se dicta anualmente en una sola delegación a determinar.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo.' },
            { pregunta: '¿Cuándo se realiza el examen de ingreso?', respuesta: 'El día previo al comienzo del curso.' },
            { pregunta: '¿Necesito casco u otro material especial?', respuesta: 'Necesitás casco para el examen de ingreso.' }
          ]
        },
        {
          titulo: 'Reglamento del Examen de Ingreso',
          items: [
            { pregunta: '¿Cuál es el reglamento del examen de ingreso?', respuesta: 'Cada participante debe conocer el presente reglamento.\nCada participante deberá estar identificado con su respectiva pechera, que será asignada por la mesa examinadora por sorteo previo.\nCada participante deberá estar provisto de su material de esquí y casco, y teniendo en cuenta el buen funcionamiento del mismo. No podrán utilizarse mochilas u otra indumentaria que dificulte la visión corporal.\nEl orden de salida de los participantes estará dado por el número de pechera, en orden de menor a mayor.\nBajará un abridor (elegido previamente por la mesa examinadora), cuya bajada será calificada con 18 puntos sobre 20. En base a esta, la mesa puntuará las bajadas de los participantes.\nSe hará una bajada de reconocimiento en pista, luego se hará la misma bajada pero calificada.\nSe realizará una bajada fuera de pista calificada (sin reconocimiento previo)\nLa mesa examinadora evaluará las siguientes condiciones de los participantes durante la bajada: seguridad, postura, dinamismo, rapidez, control de velocidad, cambios de ritmo, lectura y aprovechamiento de terreno.\nAccederán al curso los mejores resultados (promedio de bajada de pista y fuera de pista) siempre y cuando el total supere los 12 Pts. (puntaje mínimo para acceder al curso)\nAl finalizar el test es obligación devolver la pechera, caso contrario el participante quedará automáticamente eliminado del examen y descalificado.\nEl resultado será comunicado el mismo día por la mesa examinadora.\nEn caso de participantes aprobados con el mismo puntaje para la última plaza del curso, se les tomará nuevas bajadas evaluativas quedando así los mejores resultados.\nNo hay recuperatorio de este examen.\nLas mujeres con 140 puntos FIS o menos y 120 puntos FIS o menos para varones en cualquier disciplina presentando certificado FIS o FASA pueden cursar sin rendir ingreso. Los puntos no deben tener más de 5 años de antigüedad.\nLos Instructores de Esquí del ISES de Nivel 1 o superiores cursan directamente sin rendir ingreso.' }
          ]
        },
        {
          titulo: 'Extranjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero vas a tener que esperar a la disponibilidad de cupo ya que tienen prioridad para inscribirse los ciudadanos argentinos.' },
            { pregunta: '¿Cómo extranjero qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Si aprobaste tus Estudios Secundarios en un país extranjero, deberás convalidar tu Título y Certificado de Estudios secundarios (Bachillerato) por el Ministerio de Educación de la Nación Argentina en el Departamento de Validez Nacional de Títulos y Estudios.' }
          ]
        },
        {
          titulo: 'Aranceles',
          items: [
            { pregunta: '¿Dónde y cómo tengo que abonar el arancel correspondiente al examen de ingreso?', respuesta: 'El arancel del curso se abona una vez que aprobaste el ingreso.' },
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'El arancel incluye únicamente las horas cátedra de cada módulo, los exámenes, el pase para los medios de elevación y el manual de estudio.' },
            { pregunta: 'Si no apruebo ¿me devuelven el dinero del arancel abonado?', respuesta: 'No, es parte de los gastos de organización del examen de ingreso.' },
            { pregunta: '¿Si apruebo el ingreso, el arancel del curso se paga aparte del arancel del examen de ingreso?', respuesta: 'Si.' }
          ]
        },
        {
          titulo: 'Reglamento y Autoridades',
          items: [
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿Si no apruebo el curso, hay recuperatorios?', respuesta: 'En el REGLAMENTO ACADEMICO encontrás la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Desarrollo del curso',
          items: [
            { pregunta: '¿Cómo es el desarrollo del curso?', respuesta: 'Durante el desarrollo del curso se realizarán actividades teórico/prácticas en sala dedicadas a la adquisición de conocimientos concretos, siendo los mismos puestos en práctica durante las actividades en el medio. El orden de actividades podrá ser modificado de acuerdo a condiciones climáticas u otras variables a considerar.\n\nHorarios: La presencia en el curso debe ser dentro de los horarios pautados con antelación, requiriéndose la misma en tiempo y forma.\n\nAsistencia: Se requiere la asistencia a la totalidad del curso para obtener el derecho a examen final. En caso de inasistencias totales o parciales la justificación de las mismas quedará a consideración de los responsables de curso, siendo la decisión inapelable.\n\nConducta: Se considerará al cursante como un profesional en labor desde el momento de ingreso al curso, por lo que cualquier actitud irresponsable podrá ser motivo de sanción, de acuerdo a la magnitud de la misma.\n\nResponsabilidades: durante el desarrollo del curso, el cursante será responsable de daños o inconvenientes que su accionar produzca, tanto a si mismo como a terceros, no siendo los mismos imputables al I.S.E.S. o a la empresa explotadora del centro de esquí.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿Cómo se obtiene el Certificado?', respuesta: 'La obtención del Certificado de Pistero Socorrista de 1º grado está supeditada a la aprobación de los diferentes exámenes que conforman el examen final.\n\nLas notas de los diferentes exámenes es promediable para la nota final, pero deben ser aprobados de manera individual para la obtención del diploma, de acuerdo a requisitoria de examen que se entregara con anterioridad a los mismos.\n\nLa calificación de los exámenes estará a cargo de una mesa examinadora conformada por profesionales de la especialidad, siendo la decisión de los mismos de carácter inapelable.\n\nLa participación en el curso implica el conocimiento y aceptación de la metodología descripta.' },
            { pregunta: '¿El Certificado que me entregan cuando apruebo es reconocido?', respuesta: 'El Certificado del I.S.E.S. es reconocido por el Ministerio de Educación de Río Negro con validez nacional y por todos los centros de montaña del país. En el extranjero, el reconocimiento dependerá de cada país o centro de montaña.' },
            { pregunta: '¿Qué certificados o requisitos necesito presentar para recibir el certificado y carnet?', respuesta: 'Contactate directamente con central@aadides.com' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Esquí Adaptado',
      categorias: [
        {
          titulo: 'Consultas generales',
          items: [
            { pregunta: 'Si no tengo el NIVEL 1 de Esquí o no poseo ningún título o certificado relacionado con la docencia, ¿puedo hacer el curso de todos modos?', respuesta: 'Si no poseés título o certificado relacionado con la docencia y / o del I.S.E.S., podés cursar en carácter de voluntario y se te dará un certificado de asistencia. Los voluntarios son aquellos que pueden asistir a los instructores en las clases de esquí adaptado, pero no son instructores. Dependerá del cupo disponible' },
            { pregunta: '¿Los Certificados son reconocidos en el país? ¿y en el exterior?', respuesta: 'Los Certificados que otorga el I.S.E.S. son reconocidos en todo el país y en aquellos países donde la AADIDES pueda establecer convenios bilaterales.' },
            { pregunta: '¿Qué pasa si hice una clínica o curso en otro centro de montaña o en el exterior?', respuesta: 'Si realizaste una clínica en el exterior con otra asociación, quedará a criterio del Comité de Esquí Adaptado el reconocimiento de ese título o certificado, debiendo presentar toda la documentación que se te requiera.' },
            { pregunta: '¿Cuántos días puedo faltar o si me enfermo durante el curso?', respuesta: 'Consultá en el Reglamento Académico (Régimen de Asistencias).' },
            { pregunta: '¿Cuántos años tengo que tener para rendir el ingreso?', respuesta: 'Debes tener 18 años cumplidos al momento de comenzar con el curso. Ver Requisitos de Ingreso' },
            { pregunta: 'Si soy snowboardista, ¿lo puedo hacer?', respuesta: 'Por el momento no tenemos organizado el curso para snowboarders,' },
            { pregunta: 'Las materias teóricas de aula ¿son obligatorias?', respuesta: 'Tenés que asistir obligatoriamente a todas las teóricas y aprobar los exámenes correspondientes.' },
            { pregunta: 'Los exámenes finales, ¿quiénes los toman?', respuesta: 'Los exámenes finales serán evaluados por examinadores de esquí adaptado del ISES' }
          ]
        }
      ]
    },
    {
      titulo: 'Cursar Instructor de Esquí para Niños',
      categorias: [
        {
          titulo: 'Inscripción',
          items: [
            { pregunta: '¿Dónde y cómo puedo inscribirme para realizar el curso de Instructor de Esquí para Niños?', respuesta: 'Podés hacerlo personalmente en nuestras oficinas en Bariloche o a través de una pre-inscripción desde nuestro sitio en internet (ver INSCRIPCIONES). Si querés cursar en otra delegación, tenés que pre-inscribirte por internet.' },
            { pregunta: '¿Qué necesito para poder inscribirme al examen de ingreso?', respuesta: '1. tener 17 años antes cumplidos.\n2. completar el formulario de inscripción\n3. abonar el arancel correspondiente.' },
            { pregunta: '¿Hay una fecha establecida de cierre de inscripciones?', respuesta: 'Si, hay una fecha de cierre de inscripción para todas las Delegaciones. Luego de esa fecha, únicamente se aceptan inscripciones si hay cupo y con recargo. Todas las fechas las podes encontrar en la descripción de cada curso en nuestra página.' }
          ]
        },
        {
          titulo: 'Requisitos de Cursado',
          items: [
            { pregunta: 'Si apruebo el examen de ingreso, ¿qué necesito hacer para poder cursar?', respuesta: '1. ingresar al cupo determinado (se toman las mejores notas),\n2. completar el formulario de inscripción\n3. abonar el arancel correspondiente.\n4. asociarte a AADIDES (Asociación Argentina de Instructores de Esquí y Snowboard),\n5. presentarte con el material en buen estado (tablas, fijaciones, botas y casco),\n6. presentarte con el pase para los medios de elevación' },
            { pregunta: '¿Porqué tengo que asociarme a AADIDES?', respuesta: 'Porque uno de los beneficios que brinda esta institución a sus asociados es asistir a cursos de formación y reentrenamiento que brinda el ISES.' },
            { pregunta: '¿Necesito tener una cobertura médica?', respuesta: 'Mientras realizas el curso estás cubierto con un seguro de Responsabilidad Civil. Es responsabilidad de cada cursante estar contar con una cobertura médica o seguro personal contra accidentes.' },
            { pregunta: '¿Porqué no aprobé el Módulo?', respuesta: 'Además de poseer un buen nivel técnico, se necesita incorporar un “lineamiento técnico” o sea una forma establecida de esquiar o surfear que se llama “Técnica de Compensación”. El tiempo necesario para asimilar esta técnica depende de la habilidad que posee cada cursante y puede ser mayor al cursado del módulo.' }
          ]
        },
        {
          titulo: 'Ingreso',
          items: [
            { pregunta: '¿Hay algún cupo para ingresar?', respuesta: 'Hay un cupo mínimo y máximo que varía en cada Delegación y disciplina. No garantizamos que puedas cursar en la Delegación pretendida ya que dependerá del cupo correspondiente. Cuando se completa el cupo máximo en una Delegación, es factible cursar en otra que tenga cupo disponible.' },
            { pregunta: 'Si apruebo el ingreso, ¿cuándo comienzo a cursar el Módulo?', respuesta: 'Inmediatamente después del examen.' },
            { pregunta: '¿En qué consiste el examen de ingreso?', respuesta: 'Se evaluará nivel de esquí general – parámetro: Avanzado 5 – sobre nivel de pista roja. Se debe obtener 35 puntos o más para ingresar.\n\nPara rendir este examen, te recomendamos prepararte técnicamente con suficiente anticipación con profesores actualizados o realizando clínicas específicas. Necesitás presentarte con el material en buen estado (tablas, fijaciones, botas y casco).' },
            { pregunta: '¿Cómo se califica el examen?', respuesta: 'Se califica con notas de 0 a 100 puntos. Se toman las mejores calificaciones hasta completar el cupo correspondiente que tiene cada Delegación.' }
          ]
        },
        {
          titulo: 'Extranjeros',
          items: [
            { pregunta: '¿Puedo inscribirme si soy extranjero?', respuesta: 'Si, pero vas a tener que esperar a la disponibilidad de cupo ya que tienen prioridad para inscribirse los ciudadanos argentinos.' },
            { pregunta: '¿Cómo extranjero qué papeles necesito en caso de ingresar al cupo?', respuesta: 'Para iniciar los trámites deberás contar con Pasaporte o Cédula extendido por el país de origen y Radicación actualizada o Permiso de Ingreso al País extendido por la Dirección Nacional de Migraciones. En ambos casos deberá figurar el documento que utilicen para iniciar el trámite.' }
          ]
        },
        {
          titulo: 'Aranceles',
          items: [
            { pregunta: '¿Dónde y cómo tengo que abonar el arancel correspondiente al examen de ingreso?', respuesta: 'Para reservar tu lugar al examen de ingreso, tenés que inscribirte completando el formulario de pre-inscripción desde www.aadidess.com . Para inscribirte en Chapelco o Catedral tenés que hacerlo personalmente en las respectivas oficinas.\nAl recibir el mismo, te enviaremos la solicitud de inscripción con las instrucciones.' },
            { pregunta: '¿El arancel incluye el pase de los medios, alojamiento, equipos, traslados o comidas?', respuesta: 'El arancel incluye únicamente las horas cátedra de cada módulo, los exámenes, los recuperatorios oficiales y el manual de Técnica.' },
            { pregunta: 'Si no apruebo, ¿me devuelven el dinero del arancel abonado?', respuesta: 'No, es parte de los gastos de organización del examen de ingreso.' },
            { pregunta: '¿Si apruebo el ingreso, el arancel del Módulo se paga aparte del arancel del examen de ingreso?', respuesta: 'Se te descuenta el arancel del examen de ingreso.' }
          ]
        },
        {
          titulo: 'Reglamento y Autoridades',
          items: [
            { pregunta: '¿El I.S.E.S. se rige por algún reglamento?', respuesta: 'Si, por el Reglamento Académico que figura en http://www.aadidess.com/reglamento-ises/\nTodos los cursantes tienen el derecho y la obligación de leer, aplicar y respetar este reglamento como así también el “Código de Presencia”.' },
            { pregunta: '¿Qué es el “Consejo Académico”?', respuesta: 'Es el órgano superior del I.S.E.S. que rige el mismo. Toda solicitud debe ser enviada a este Consejo, el cual resolverá la situación correspondiente.' },
            { pregunta: '¿Qué pasa si no apruebo algún módulo?', respuesta: 'En el REGLAMENTO ACADEMICO encontrás la información referida a este punto.' }
          ]
        },
        {
          titulo: 'Certificado',
          items: [
            { pregunta: '¿El Certificado que me entregan cuando apruebo todos los módulos es reconocido?', respuesta: 'El Certificado del I.S.E.S. es reconocido por todas las Escuelas y Clubes del país. En el extranjero, dependerá de cada Asociación o escuela el reconocimiento' },
            { pregunta: '¿Qué certificados o requisitos necesito presentar para recibir el certificado y carnet?', respuesta: 'Contactate directamente con central@aadides.com' }
          ]
        }
      ]
    }
  ];

  filteredSections = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.faqData;

    return this.faqData
      .map(section => {
        const filteredCats = section.categorias
          .map(cat => {
            const matchingItems = cat.items.filter(
              item =>
                item.pregunta.toLowerCase().includes(term) ||
                item.respuesta.toLowerCase().includes(term)
            );
            return { ...cat, items: matchingItems };
          })
          .filter(cat => cat.items.length > 0);
        return { ...section, categorias: filteredCats };
      })
      .filter(section => section.categorias.length > 0);
  });

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => this.scrollTo(fragment), 100);
      }
    });
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getSectionId(titulo: string): string {
    return 'sec-' + titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}
