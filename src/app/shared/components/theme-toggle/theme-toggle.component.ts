import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Theme = 'light' | 'dark' | 'system';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="theme-toggle"
      (click)="toggleTheme()"
      [attr.aria-label]="'Cambiar tema: ' + themeLabel()"
      title="Cambiar tema (Click para rotar: light → dark → system)"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        {{ getIcon() }}
      </span>
      <span class="theme-toggle__label">{{ themeLabel() }}</span>
    </button>
  `,
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  private readonly STORAGE_KEY = 'aadidess-theme';
  private readonly THEME_ATTRIBUTE = 'data-theme';

  currentTheme = signal<Theme>('system');
  themeLabel = signal<string>('Sistema');

  ngOnInit(): void {
    this.initTheme();
  }

  initTheme(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    const theme = stored || 'system';
    this.currentTheme.set(theme);
    this.updateThemeLabel();
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    this.currentTheme.set(nextTheme);
    localStorage.setItem(this.STORAGE_KEY, nextTheme);
    this.updateThemeLabel();
    this.applyTheme(nextTheme);
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute(this.THEME_ATTRIBUTE, prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute(this.THEME_ATTRIBUTE, theme);
    }
  }

  private updateThemeLabel(): void {
    const labels: Record<Theme, string> = {
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema'
    };
    this.themeLabel.set(labels[this.currentTheme()]);
  }

  getIcon(): string {
    const theme = this.currentTheme();
    if (theme === 'dark') return 'dark_mode';
    if (theme === 'light') return 'light_mode';
    return 'brightness_auto';
  }
}
