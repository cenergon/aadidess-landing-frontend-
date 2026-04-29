import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelegadosComponent } from '../delegados/delegados.component';

interface Autoridad {
  nombre: string;
  periodo: string;
  cargo: string;
  foto: string; // ruta desde public/ (ej: 'images/autoridades/martin-bacer.jpg')
}

@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [CommonModule, DelegadosComponent],
  templateUrl: './autoridades.component.html',
  styleUrls: ['./autoridades.component.scss']
})
export class AutoridadesComponent {
  autoridades: Autoridad[] = [
    { nombre: 'Martín Bacer', periodo: '2022-2026', cargo: 'Presidente', foto: 'images/martin-bacer.jpg' },
    { nombre: 'Rodolfo Longo', periodo: '2023-2026', cargo: 'Secretario', foto: 'images/rodolfo-longo.jpg' },
    { nombre: 'Justo Luis Olivieri', periodo: '2022-2026', cargo: 'Tesorero', foto: 'images/justo-luis-olivieri.jpg' },
    { nombre: 'Gabriel Runschke', periodo: '2024-2026', cargo: 'Revisor de cuentas titular', foto: 'images/fondo-aranceles-aadidess.jpg' },
    { nombre: 'Jorge Nabarlaz', periodo: '2024-2028', cargo: 'Revisor de cuentas titular', foto: 'images/jorge-nabarlaz.jpg' },
    { nombre: 'Mauro Agüero', periodo: '2024-2026', cargo: 'Revisor de cuentas suplente', foto: 'images/mauro-aguero.jpg' },
    { nombre: 'Pablo Calello', periodo: '2022-2026', cargo: 'Vocal Titular', foto: 'images/pablo-calello.jpg' },
    { nombre: 'Luis Rodriguez', periodo: '2022-2026', cargo: 'Vocal Titular', foto: 'images/luis-rodriguez.jpg' },
    { nombre: 'Román Arinovich', periodo: '2022-2026', cargo: 'Vocal Titular', foto: 'images/roman-arinovich.jpg' },
    { nombre: 'Pedro Vergara', periodo: '2022-2026', cargo: 'Vocal Titular', foto: 'images/pedro-vergara.jpg' },
    { nombre: 'José Maria Rossi', periodo: '2022-2026', cargo: 'Vocal Titular', foto: 'images/jose-maria-rossi.jpg' },
    { nombre: 'Williams M. Davies', periodo: '2022-2026', cargo: 'Vocal Titular', foto: 'images/williams-m-davies.jpg' },
    { nombre: 'Federico Corsiglia', periodo: '', cargo: 'Miembro del Tribunal de Honor', foto: 'images/federico-corsiglia.jpg' },
    { nombre: 'Eric Guzman', periodo: '', cargo: 'Miembro del Tribunal de Honor', foto: 'images/eric-guzman.jpg' },
    { nombre: 'Jorge Taricco', periodo: '', cargo: 'Miembro del Tribunal de Honor', foto: 'images/jorge-taricco.jpg' }
    ];

  // Placeholder si no hay foto disponible
  getInitials(nombre: string): string {
    return nombre.split(' ').slice(0, 2).map(n => n[0]).join('');
  }

  getFotoUrl(foto: string): string | null {
    return foto ? foto : null;
  }
}