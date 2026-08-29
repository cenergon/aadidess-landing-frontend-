import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'app-campus-virtual-fab',
  standalone: true,
  templateUrl: './campus-virtual-fab.component.html',
  styleUrls: ['./campus-virtual-fab.component.scss'],
})
export class CampusVirtualFabComponent {
  private readonly elementRef = inject(ElementRef);

  readonly campusUrl = 'https://aadidess.cipbyte.io/web/#/profile-authentication';
  readonly open = signal(false);

  toggle(): void {
    this.open.update((value) => !value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.open.set(false);
    }
  }
}
