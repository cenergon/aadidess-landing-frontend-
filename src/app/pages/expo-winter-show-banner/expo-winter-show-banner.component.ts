import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expo-winter-show-banner',
  standalone: true,
  templateUrl: './expo-winter-show-banner.component.html',
  styleUrls: ['./expo-winter-show-banner.component.scss'],
})
export class ExpoWinterShowBannerComponent {
  @Input() siteUrl: string = 'https://expowinter.com.ar/';
  @Input() mapsUrl: string = 'https://maps.app.goo.gl/v31wiRnCJZdQArTs9';
}
