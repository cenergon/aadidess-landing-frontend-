import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tsej-banner',
  standalone: true,
  templateUrl: './tsej-banner.component.html',
  styleUrls: ['./tsej-banner.component.scss']
})
export class TsejBannerComponent {
  @Input() siteUrl: string = 'https://skieducationjournal.com/';
}