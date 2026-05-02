import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {
  titulo = 'Calendario Académico';
  descripcion = 'Para poder ver el calendario, es necesario que primero te crees un usuario en el campus. Si aún no lo tenés, debés registrarte y activar tu cuenta para poder acceder.';
  pasos = [
    'Completá tus datos en el formulario de registro.',
    'Recibí un PIN en tu correo electrónico.',
    'Hacé clic en el PIN para activar tu cuenta.'
  ];
  mensajeFinal = 'Una vez finalizado este proceso, vas a poder ingresar al campus y visualizar el calendario.';
  campusUrl = 'https://aadidess.cipbyte.io/web/#/profile-authentication';

  irAlCampus(): void {
    window.open(this.campusUrl, '_blank', 'noopener,noreferrer');
  }
}