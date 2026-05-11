import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ]
};
