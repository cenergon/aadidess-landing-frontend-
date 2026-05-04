import { Component } from '@angular/core';
import { InfoServiciosComponent } from "../info-servicios/info-servicios.component";
import { UltimasNoticiasComponent } from "../ultimas-noticias/ultimas-noticias.component";
import { HeroBannerHomeComponent } from "../hero-banner-home/hero-banner-home.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [InfoServiciosComponent, UltimasNoticiasComponent, HeroBannerHomeComponent]
})
export class HomeComponent {

}