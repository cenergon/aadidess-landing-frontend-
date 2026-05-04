import { Component } from '@angular/core';

interface Sponsor {
  imagen: string;
  alt: string;
  height?: number;
  escala?: number;
  invertOnDark?: boolean;
}

@Component({
  selector: 'app-sponsor-bar',
  standalone: true,
  templateUrl: './sponsor-bar.component.html',
  styleUrls: ['./sponsor-bar.component.scss']
})
export class SponsorBarComponent {
  sponsor: Sponsor[] = [
    { imagen: 'images/sponsor/macro2.svg', alt: 'Macro', invertOnDark: true},
    { imagen: 'images/sponsor/marcapais2.svg', alt: 'Argentina', height: 60, escala: 1.8},
    { imagen: 'images/sponsor/turkish2.svg', alt: 'Turkish Airlines' },
    { imagen: 'images/sponsor/thonet2.png', alt: 'Thonet' },
    { imagen: 'images/sponsor/hubtravel2.png', alt: 'Hub travel', height: 29, escala: 1.8 },
    { imagen: 'images/sponsor/vola2.png', alt: 'Vola' },
    { imagen: 'images/sponsor/oakley2.png', alt: 'Oakley' },
    { imagen: 'images/sponsor/catedral2.png', alt: 'Catedral' }
  ];
}