import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-snowboard-nivel-uno',
  standalone: true,
  imports: [],
  templateUrl: './instructor-snowboard-nivel-uno.component.html',
  styleUrls: ['./instructor-snowboard-nivel-uno.component.scss']
})
export class InstructorSnowboardNivelUnoComponent {
  scrollToClinica(): void {
    const el = document.getElementById('clinica-pre-ingreso');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}