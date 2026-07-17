import { Injectable, signal } from '@angular/core';

export type Platform = 'ios' | 'android' | 'other';

@Injectable({ providedIn: 'root' })
export class PlatformService {
  readonly platform = signal<Platform>(this.detectPlatform());

  private detectPlatform(): Platform {
    if (typeof navigator === 'undefined') {
      return 'other';
    }

    const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';

    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      return 'ios';
    }
    if (/android/i.test(ua)) {
      return 'android';
    }
    return 'other';
  }
}
