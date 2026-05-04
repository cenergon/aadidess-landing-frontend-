import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor-esqui-nivel-uno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor-esqui-nivel-uno.component.html',
  styleUrls: ['./instructor-esqui-nivel-uno.component.scss']
})
export class InstructorEsquiNivelUnoComponent {
  scrollToClinica(): void {
    const el = document.getElementById('clinica-pre-ingreso');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}