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


export const routes: Routes = [

    { path: 'institucional/autoridades', component: AutoridadesComponent },
    { path: 'institucional/estatuto', component: EstatutoComponent },
    { path: 'institucional/reglamento-comite-tecnico', component: ReglamentoComiteTecnicoComponent },
    { path: 'institucional/requisitos-delegados', component: RequisitosDelegadosComponent },
    { path: 'institucional/escuelas-clubes', component: EscuelasClubesComponent },
    { path: 'aranceles-y-formas-de-pago/aranceles', component: ArancelesComponent },
    { path: 'aranceles-y-formas-de-pago/formas-de-pago', component: FormasDePagoComponent },
    { path: 'socios/convenios-y-beneficios', component: ConveniosYBeneficiosComponent },
    { path: 'socios/bolsa-de-trabajo', component: BolsaDeTrabajoComponent },
    { path: 'socios/por-que-ser-socio', component: PorQueSerSocioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'wip', component: WipComponent },
    { path: 'calendario', component: CalendarioComponent }

    

];
