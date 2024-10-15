import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

/**
 * Servicio encargado de manejar el login con Google
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {

  /**
   * Inyecta la libreria de Google para la autenticacion
   */
  constructor(private oAuthService: OAuthService) {
    this.initLogin();
  }

  /**
   * Inicializa la conexion con la API de Google para la autenticacion
   */
  private initLogin(): void {
    let config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '35849955504-j4h1lrj1b409fqltu92kbvr6m0r89hj0.apps.googleusercontent.com',
      // Si se cambia la maquina remota, cambiar la IP de la redireccion
      redirectUri: 'https://frontwsavvillas.unibague.edu.co/login/google/callback',
      scope: 'openid profile email',
      logoutUrl: window.location.origin
    }

    this.oAuthService.configure(config);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  /**
   * Inicia el flujo de inicio de sesion con Google
   */
  public login(): void {
    this.oAuthService.initLoginFlow();
  }

  /**
   * Desloguea al usuario
   */
  public logout(): void {
    this.oAuthService.logOut();
  }

  /**
   * Retorna el objeto del perfil autenticado
   */
  public getProfile(): Record<string, any> {
    return this.oAuthService.getIdentityClaims();
  }

  /**
   * Retorna un JWT con la informacion del usuario logueado
   */
  public getIdToken(): string {
    return this.oAuthService.getIdToken();
  }

  /**
   * Retorna el accessToken de google
   */
  public getAccessToken(): string {
    return this.oAuthService.getAccessToken();
  }

  public getRefreshToken(): string {
    return this.oAuthService.getRefreshToken();
  }
}
