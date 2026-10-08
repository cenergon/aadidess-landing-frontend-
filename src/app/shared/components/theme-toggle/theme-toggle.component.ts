import { Component, signal, OnInit, HostListener, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

type Theme = 'light' | 'dark' | 'system';

interface ThemeOption {
  value: Theme;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-toggle" [class.theme-toggle--open]="open()">
      <button
        type="button"
        class="theme-toggle__button"
        (click)="toggleOpen()"
        [attr.aria-label]="'Cambiar tema: ' + themeLabel()"
        [attr.aria-expanded]="open()"
        aria-haspopup="listbox"
      >
        <span class="material-symbols-outlined" aria-hidden="true">{{ getIcon() }}</span>
        <span class="theme-toggle__label">{{ themeLabel() }}</span>
        <span class="material-symbols-outlined theme-toggle__chevron" aria-hidden="true">
          expand_more
        </span>
      </button>

      @if (open()) {
        <ul class="theme-toggle__menu" role="listbox" aria-label="Tema">
          @for (option of options; track option.value) {
            <li role="none">
              <button
                type="button"
                role="option"
                class="theme-toggle__option"
                [class.theme-toggle__option--active]="currentTheme() === option.value"
                [attr.aria-selected]="currentTheme() === option.value"
                (click)="selectTheme(option.value)"
              >
                <span class="material-symbols-outlined" aria-hidden="true">{{ option.icon }}</span>
                <span>{{ option.label }}</span>
                @if (currentTheme() === option.value) {
                  <span
                    class="material-symbols-outlined theme-toggle__check"
                    aria-hidden="true"
                    >check</span
                  >
                }
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  private readonly STORAGE_KEY = 'aadidess-theme';
  private readonly THEME_ATTRIBUTE = 'data-theme';
  private readonly hostRef = inject(ElementRef);

  readonly options: ThemeOption[] = [
    { value: 'light', label: 'Claro', icon: 'light_mode' },
    { value: 'dark', label: 'Oscuro', icon: 'dark_mode' },
    { value: 'system', label: 'Sistema', icon: 'brightness_auto' },
  ];

  currentTheme = signal<Theme>('light');
  open = signal(false);

  ngOnInit(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    // Default 'light'; se respeta 'dark' o 'system' si ya estaban guardados.
    const theme: Theme = stored === 'dark' || stored === 'system' ? stored : 'light';
    this.currentTheme.set(theme);
    this.applyTheme(theme);
  }

  themeLabel(): string {
    return this.currentOption().label;
  }

  getIcon(): string {
    return this.currentOption().icon;
  }

  toggleOpen(): void {
    this.open.update((value) => !value);
  }

  selectTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.applyTheme(theme);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.hostRef.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.open.set(false);
  }

  private currentOption(): ThemeOption {
    return this.options.find((option) => option.value === this.currentTheme()) ?? this.options[0];
  }

  private applyTheme(theme: Theme): void {
    const applied: 'light' | 'dark' =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;

    document.documentElement.setAttribute(this.THEME_ATTRIBUTE, applied);

    // Notificar a otros componentes del cambio (theme = tema resuelto)
    window.dispatchEvent(
      new CustomEvent('theme-changed', {
        detail: { theme: applied, selected: theme },
      }),
    );
  }
}
