import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from '../../shared/services/platform.service';

@Component({
  selector: 'app-app-download-banner',
  standalone: true,
  templateUrl: './app-download-banner.component.html',
  styleUrls: ['./app-download-banner.component.scss'],
})
export class AppDownloadBannerComponent implements OnInit, OnDestroy {
  private platformService = inject(PlatformService);
  private document = inject(DOCUMENT);

  readonly appStoreLink = 'https://apps.apple.com/us/app/aadidess/id6446376678';
  readonly playStoreLink =
    'https://play.google.com/store/apps/details?id=io.aadidessinspectores.app';

  readonly appStoreBadge = 'svgs/Download_on_the_App_Store_Badge_ESMX_RGB_blk_100217.svg';
  readonly playStoreBadge = 'svgs/GetItOnGooglePlay_Badge_Web_color_Spanish-LATAM.svg';

  readonly isMobile = signal(false);
  readonly platform = this.platformService.platform;
  readonly modoOscuro = signal(false);

  showAppStore = signal(true);
  showPlayStore = signal(true);

  private resizeListener = () => this.checkMobile();
  private themeChangeHandler?: EventListener;

  ngOnInit(): void {
    this.checkMobile();
    this.updateBadges();
    window.addEventListener('resize', this.resizeListener);

    this.actualizarModo();
    this.themeChangeHandler = () => this.actualizarModo();
    window.addEventListener('theme-changed', this.themeChangeHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
    if (this.themeChangeHandler) {
      window.removeEventListener('theme-changed', this.themeChangeHandler);
    }
  }

  private checkMobile(): void {
    this.isMobile.set(window.innerWidth <= 600);
    this.updateBadges();
  }

  private updateBadges(): void {
    if (this.isMobile()) {
      const p = this.platform();
      this.showAppStore.set(p === 'ios' || p === 'other');
      this.showPlayStore.set(p === 'android' || p === 'other');
    } else {
      this.showAppStore.set(true);
      this.showPlayStore.set(true);
    }
  }

  private actualizarModo(): void {
    const theme = this.document.documentElement.getAttribute('data-theme');
    this.modoOscuro.set(theme === 'dark');
  }
}
