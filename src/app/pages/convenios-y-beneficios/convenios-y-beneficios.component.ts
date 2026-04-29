import { Component, signal, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosComercialesComponent } from '../beneficios-comerciales/beneficios-comerciales.component';

interface AcordeonItem {
  titulo: string;
  contenidoHtml: string;
}

@Component({
  selector: 'app-convenios-y-beneficios',
  standalone: true,
  imports: [CommonModule, BeneficiosComercialesComponent],
  templateUrl: './convenios-y-beneficios.component.html',
  styleUrls: ['./convenios-y-beneficios.component.scss']
})
export class ConveniosYBeneficiosComponent {
  panelesAbiertos = signal<Set<string>>(new Set());
  @ViewChildren('acordeonItem') items!: QueryList<ElementRef>;

  convenios = signal<AcordeonItem[]>([
    {
      titulo: 'Acuerdo con AMSI (Italia)',
      contenidoHtml: `<p>AADIDESS y AMSI han firmado un acuerdo histórico que consolida un espacio de colaboración institucional entre ambas asociaciones, con el objetivo de valorizar la figura profesional del instructor de esquí y promover la práctica de los deportes de invierno en nuestros respectivos países.</p><p>Entre ambas instituciones coincidimos en adoptar los estándares formativos de la ISIA (International Ski Instructors Association), reconociendo la validez de la estampilla ISIA como garantía de la máxima certificación profesional en el ámbito internacional.</p><p>El acuerdo establece el compromiso de respetar y aplicar las normativas profesionales, fiscales y administrativas vigentes en cada país, fortaleciendo así la calidad y la seriedad del ejercicio profesional del esquí.</p><p><a href="/docs/Allegato_AADIDESS_AMSI_2025.pdf" target="_blank">Allegato AADIDESS AMSI 2025.pdf</a></p>`
    },
    {
      titulo: 'Convenio con la EFPEM, Andorra',
      contenidoHtml: `<p>Convenio de colaboración entre AADIDES (Asociación Argentina de Instructores de Esquí y Snowboard) y EFPEM (Escola de Formació de Professions Esportives i de Muntanya)</p><p>Andorra la Vella cinco de Septiembre del 2005<br>REUNIDOS</p><p>De una parte, Josep Maria Pantebre i Yebra, mayor de edad, con domicilio y nacionalidad andorrana y provisto con el pasaporte (andorrano) nro 6291.<br>Y de otra parte, Martín Bacer, mayor de edad, con domicilio y nacionalidad argentina y provisto con el pasaporte (argentino) nro 16392246.<br>ACTUAN</p><p>El primero en nombre y representación de la entidad EFPEM (Escola de Formacio de Professions Esportives i de Muntanya) en su calidad de director de la misma.<br>Y el segundo en nombre y representación de AADIDES (Asociación Argentina de Instructores de Esquí y Snowboard), representativa de las escuelas, profesores y entrenadores de deportes de invierno en argentina, en su calidad de presidente.<br>MANIFIESTAN</p><p>Primero. Que interesa a los dos organismos establecer relaciones, de cooperación en el ámbito técnico i pedagógico, de la enseñanza del esquí y disciplinas asociadas.<br>Segundo. Que de esta cooperación, se reconocen de mutuo acuerdo las respectivas formaciones y titulaciones que permiten el ejercicio de la profesión de monitor de esquí y disciplinas asociadas.<br>Tercero. Que ambas partes, en consecuencia con lo antes manifestado, establecen los siguientes<br>ACUERDOS</p><p>Primero. Ambas organizaciones se remitirán mutuamente, los listados de Educadors Esportius en esquí i disciplines associades y el de Profesores y Entrenadores de esquí alpino y Disciplinas Asociadas, con sus correspondientes titulaciones.<br>Segundo. Ambas organizaciones se remitirán mutuamente, el calendario de formaciones, así como el listado de los formadores de esquí alpino y disciplinas asociadas.<br>Tercero. Contratación de formadores, a través del organismo recíproco, para formaciones puntuales.<br>Cuarto. Intercambio técnico y pedagógico entre los técnicos de los dos organismos.<br>Quinto. Colaboración en el ámbito internacional, defendiendo ante terceros tanto las formaciones y titulaciones propias como las de la recíproca.<br>Sexto. La duración del presente convenio se establece por cuatro años, a partir de su firma, sin perjuicio de la posibilidad de modificarlo, mejorarlo o prolongarlo.<br>Séptimo. La firma de este convenio no ha de perjudicar otros acuerdos bilaterales que puedan existir con organismos de otros países.<br>Octavo. No obstante los acuerdos anteriores, cualquiera de las partes podrá suspenderlo temporalmente o rescindirlo definitivamente, previa comunicación a la otra en todos sus acuerdos.<br>Noveno. Ambos organismos procuraran garantizar el correcto cumplimiento de este convenio, y velaran por el desarrollo, cumplimiento y perfeccionamiento del mismo.</p><p>Plenamente de acuerdo en todo lo manifestado, pactado y dispuesto, sin reservas de ninguna clase, lo firman en todas las paginas (dos por juego), en duplicado original y a un solo efecto en lugar y fecha indicados en el encabezamiento.</p>`
    },
    {
      titulo: 'Convenio Multilateral Italia',
      contenidoHtml: `<p>Luego de un largo tiempo de gestiones con las autoridades de dicho país, AADIDESS logró restablecer el acuerdo laboral en beneficio de nuestros socios que deseen realizar temporada allí.</p><p>Los profesionales que confirmen empleo en alguna escuela italiana, deberán notificarlo de manera formal a nuestra asociación indicando el nombre de la misma y la región. El email donde se recepcionará dicha información es <strong><a href="mailto:administracion@aadidess.com">administracion@aadidess.com</a></strong></p><p>Una vez recibido el aviso, AADIDESS se pondrá en contacto con el Collegio Nazionale Maestri de Sci para realizar el aviso correspondiente, y esta entidad nacional dará aviso al colegio que rige en la región correspondiente.</p><p>Al finalizar este proceso, al instructor se le podrá tramitar la visa de trabajo. De esta manera se logró formalizar el registro junto con el Colegio Nazionale y la ISI de los trabajadores argentinos que realicen temporada en Italia.</p><p>Este es un paso que afianza nuestro compromiso con el objetivo de facilitar y mejorar las condiciones laborales de los socios en el exterior.</p><p><strong><a href="/docs/convenio-italia.pdf" target="_blank">Ver convenio – Noviembre de 2024</a></strong></p>`
    },
    {
      titulo: 'Convenio Marco de Cooperación Técnica con la FASA',
      contenidoHtml: `<p><strong>La FASA y AADIDESS firmaron un convenio de colaboración técnica para optimizar la formación de entrenadores e instructores.</strong></p><p>Argentina, 10 de mayo de 2019.- La FASA (Federación Argentina de Esquí y Andinismo) y AADIDESS (Asociación Argentina de Instructores de Esquí, Snowboard y Pisteros Socorristas) anunciaron la reciente firma de un convenio marco entre ambas instituciones con el objetivo de colaborar en actividades de mutuo interés dentro del desarrollo del esquí y el snowboard en su faz deportiva, competitiva, social y cultural.</p><p>El documento firmado resuelve la necesidad del trabajo conjunto entre ambas instituciones, en pos de optimizar el nivel académico de quienes tienen a su cargo la enseñanza de las disciplinas mencionadas anteriormente.</p><p>Para consultas y más información, podés escribirnos a administracion@aadidess.com</p>`
      // PDF no disponible aún: <p>Para descargar el Convenio: <a href="/docs/convenio-colaboracion-aadidess-fasa.pdf" target="_blank">Convenio colaboración AADIDESS – FASA</a></p>
    },
    {
      titulo: 'Convenio Marco de Asistencia y Cooperación con la Dirección Nacional de Migraciones',
      contenidoHtml: `<p><strong>La Dirección Nacional de Migraciones y AADIDESS firmaron un convenio marco de asistencia y cooperación.</strong></p><p>Argentina, Noviembre de 2019.- Se llevó a cabo la firma de un Convenio Marco de Asistencia y Cooperación entre AADIDESS y la Dirección Nacional de Migraciones, lo que permitirá a todas las escuelas del país reconocidas por la asociación la contratación de manera más sencilla y de acuerdo con la ley de trabajadores extranjeros.</p><p>Las autoridades firmantes son: Horacio José García, Director Nacional de Migraciones, Diego Puente de la Delegación Bariloche de dicha institución y Martín Bacer, Presidente de AADIDESS.</p><p>Este acuerdo también contempla que a través de Migraciones se facilite la gestión de trámites y documentación necesaria para quienes vayan a trabajar a otros países con los que la asociación tiene convenios.</p>`
      // PDF no disponible aún: <p>Podés descargar el documento completo sobre este acuerdo acá: <a href="/docs/convenio-con-asociacion-de-instructores-de-esqui-y-dnm-25-10-19.docx" target="_blank">Convenio con DNM 2019</a></p>
    }
  ]);

  beneficios = signal<AcordeonItem[]>([
    {
      titulo: 'Beneficios institucionales',
      contenidoHtml: `<ul><li>Ser reconocido a nivel nacional e internacional (con la estampilla ISIA) como Instructor titulado.</li><li>Tener acceso a cursos y reentrenamientos.</li><li>Tener derecho a votar (a partir del Nivel 3) y ser elegido delegado en las asambleas ordinarias y extraordinarias para la conformación de nuevas autoridades de la Comisión Directiva.</li><li>Poder integrar el Comité Técnico (todos los niveles para el área Metodológica / a partir del Nivel 3 para el área Técnica).</li><li>Poder integrar sub-comités de trabajos específicos.</li><li>Tener la posibilidad de representar al país en congresos internacionales, como el Interski, formando parte del equipo de Demostradores de Esquí y Snowboard (a partir del Nivel 4).</li><li>Tener la posibilidad de dictar cursos para instructores en materias teóricas (todos los niveles) y en las prácticas (a partir del Nivel 3).</li><li>Poder participar en los siguientes eventos: Campeonato Argentino de Instructores, Cena Anual, Campeonato Sincro, Memorial Quito Astete y en las charlas de Capacitaciones Gratuitas.</li></ul>`
    },
    {
      titulo: 'Beneficios Laborales',
      contenidoHtml: `<ul><li>Figurar en los listados como instructor habilitado.</li><li>Salida laboral nacional e internacional inmediata.</li><li>Acceso a intercambios en escuelas y clubes en Europa y U.S.A.</li><li>Acceso a pasantías en escuelas y clubes en el país reconocidos a través del Instituto Superior de Esquí y Snowboard.</li></ul>`
    },
    {
      titulo: 'Beneficios Comerciales',
      contenidoHtml: `<ul><li>Acceso a cobertura médica a precios promocionales y carencias bonificadas.</li><li>Descuentos en negocios adheridos.</li><li>Acceso a precios especiales en merchandising de la AADIDESS.</li><li>Estampilla ISIA: descuentos en pases para los medios de elevación en centros de montaña de Europa y U.S.A.</li><li>Acceso a coberturas de seguro promocionales.</li><li>Precios promocionales en pasajes aéreos de cabotaje e internacionales.</li></ul>`
    }
  ]);

  togglePanel(titulo: string, index: number): void {
    this.panelesAbiertos.update(prev => {
      const next = new Set(prev);
      if (next.has(titulo)) {
        next.delete(titulo);
      } else {
        next.add(titulo);
      }
      return next;
    });

    // Scroll al acordeón recién expandido/colapsado
    setTimeout(() => {
      const itemsArray = this.items.toArray();
      if (itemsArray[index]) {
        itemsArray[index].nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 50);
  }

  isOpen(titulo: string): boolean {
    return this.panelesAbiertos().has(titulo);
  }
}