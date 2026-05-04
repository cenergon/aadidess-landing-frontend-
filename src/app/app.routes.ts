import { Routes } from '@angular/router';
import { AutoridadesComponent } from './pages/autoridades/autoridades.component';
import { EstatutoComponent } from './pages/estatuto/estatuto.component';
import { ReglamentoComiteTecnicoComponent } from './pages/reglamento-comite-tecnico/reglamento-comite-tecnico.component';
import { RequisitosDelegadosComponent } from './pages/requisitos-delegados/requisitos-delegados.component';
import { EscuelasClubesComponent } from './pages/escuelas-clubes/escuelas-clubes.component';
import { ArancelesComponent } from './pages/aranceles/aranceles.component';
import { FormasDePagoComponent } from './pages/formas-de-pago/formas-de-pago.component';
import { ConveniosYBeneficiosComponent } from './pages/convenios-y-beneficios/convenios-y-beneficios.component';
import { BolsaDeTrabajoComponent } from './pages/bolsa-de-trabajo/bolsa-de-trabajo.component';
import { PorQueSerSocioComponent } from './pages/por-que-ser-socio/por-que-ser-socio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { WipComponent } from './pages/wip/wip.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HomeComponent } from './pages/home/home.component';
import { ReglamentoAcademicoComponent } from './pages/reglamento-academico/reglamento-academico.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InstructorEsquiNivelUnoComponent } from './pages/instructor-esqui-nivel-uno/instructor-esqui-nivel-uno.component';
import { InstructorEsquiNivelDosComponent } from './pages/instructor-esqui-nivel-dos/instructor-esqui-nivel-dos.component';
import { InstructorEsquiNivelTresComponent } from './pages/instructor-esqui-nivel-tres/instructor-esqui-nivel-tres.component';
import { InstructorSnowboardNivelUnoComponent } from './pages/instructor-snowboard-nivel-uno/instructor-snowboard-nivel-uno.component';
import { InstructorSnowboardNivelDosComponent } from './pages/instructor-snowboard-nivel-dos/instructor-snowboard-nivel-dos.component';
import { InstructorSnowboardNivelTresComponent } from './pages/instructor-snowboard-nivel-tres/instructor-snowboard-nivel-tres.component';
import { InstructorNivelCuatroDemoComponent } from './pages/instructor-nivel-cuatro-demo/instructor-nivel-cuatro-demo.component';
import { InstructorNivelCincoProfesorComponent } from './pages/instructor-nivel-cinco-profesor/instructor-nivel-cinco-profesor.component';
import { EntrenadorClubEsquiComponent } from './pages/entrenador-club-esqui/entrenador-club-esqui.component';
import { EntrenadorNacionalComponent } from './pages/entrenador-nacional/entrenador-nacional.component';
import { InstructorNinosComponent } from './pages/instructor-ninos/instructor-ninos.component';
import { PisteroSocorristaPrimerGradoComponent } from './pages/pistero-socorrista-primer-grado/pistero-socorrista-primer-grado.component';
import { PisteroSocorristaSegundoGradoComponent } from './pages/pistero-socorrista-segundo-grado/pistero-socorrista-segundo-grado.component';
import { PisteroSocorristaTercerGradoComponent } from './pages/pistero-socorrista-tercer-grado/pistero-socorrista-tercer-grado.component';


export const routes: Routes = [

    { path: 'institucional/autoridades', component: AutoridadesComponent },
    { path: 'institucional/estatuto', component: EstatutoComponent },
    { path: 'institucional/reglamento-comite-tecnico', component: ReglamentoComiteTecnicoComponent },
    { path: 'institucional/reglamento-academico', component: ReglamentoAcademicoComponent },
    { path: 'institucional/requisitos-delegados', component: RequisitosDelegadosComponent },
    { path: 'institucional/escuelas-clubes', component: EscuelasClubesComponent },
    { path: 'aranceles-y-formas-de-pago/aranceles', component: ArancelesComponent },
    { path: 'aranceles-y-formas-de-pago/formas-de-pago', component: FormasDePagoComponent },
    { path: 'socios/convenios-y-beneficios', component: ConveniosYBeneficiosComponent },
    { path: 'socios/bolsa-de-trabajo', component: BolsaDeTrabajoComponent },
    { path: 'socios/por-que-ser-socio', component: PorQueSerSocioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'wip', component: WipComponent },
    { path: 'academico/calendario', component: CalendarioComponent },
    { path: 'academico/cursos', component: CursosComponent },
    { path: 'academico/cursos/instructor-esqui-nivel-1', component: InstructorEsquiNivelUnoComponent },
    { path: 'academico/cursos/instructor-esqui-nivel-2', component: InstructorEsquiNivelDosComponent },
    { path: 'academico/cursos/instructor-esqui-nivel-3', component: InstructorEsquiNivelTresComponent },
    { path: 'academico/cursos/instructor-snowboard-nivel-1', component: InstructorSnowboardNivelUnoComponent },
    { path: 'academico/cursos/instructor-snowboard-nivel-2', component: InstructorSnowboardNivelDosComponent },
    { path: 'academico/cursos/instructor-snowboard-nivel-3', component: InstructorSnowboardNivelTresComponent },
    { path: 'academico/cursos/instructor-nivel-cuatro-demo', component: InstructorNivelCuatroDemoComponent },
    { path: 'academico/cursos/instructor-nivel-cinco-profesor', component: InstructorNivelCincoProfesorComponent },
    { path: 'academico/cursos/entrenador-club-esqui', component: EntrenadorClubEsquiComponent },
    { path: 'academico/cursos/entrenador-nacional', component: EntrenadorNacionalComponent },
    { path: 'academico/cursos/instructor-ninos', component: InstructorNinosComponent },
    { path: 'academico/cursos/pistero-socorrista-primer-grado', component: PisteroSocorristaPrimerGradoComponent },
    { path: 'academico/cursos/pistero-socorrista-segundo-grado', component: PisteroSocorristaSegundoGradoComponent },
    { path: 'academico/cursos/pistero-socorrista-tercer-grado', component: PisteroSocorristaTercerGradoComponent },



    { path: '', component: HomeComponent },

    

];
