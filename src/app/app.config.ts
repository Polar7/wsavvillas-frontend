import {ApplicationConfig, importProvidersFrom, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import {OAuthModule} from "angular-oauth2-oidc";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(OAuthModule.forRoot()),
    { provide: LOCALE_ID, useValue: 'es' }]
};
