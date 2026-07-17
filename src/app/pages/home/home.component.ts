import { Component } from '@angular/core';
import { InfoServiciosComponent } from '../info-servicios/info-servicios.component';
import { UltimasNoticiasComponent } from '../ultimas-noticias/ultimas-noticias.component';
import { HeroBannerHomeComponent } from '../hero-banner-home/hero-banner-home.component';
import { TsejBannerComponent } from '../tsej-banner/tsej-banner.component';
import { AppDownloadBannerComponent } from '../app-download-banner/app-download-banner.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    InfoServiciosComponent,
    UltimasNoticiasComponent,
    HeroBannerHomeComponent,
    TsejBannerComponent,
    AppDownloadBannerComponent,
  ],
})
export class HomeComponent {}
