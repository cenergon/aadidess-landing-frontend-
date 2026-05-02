import { Component } from '@angular/core';
import { InfoServiciosComponent } from "../info-servicios/info-servicios.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [InfoServiciosComponent]
})
export class HomeComponent {

}