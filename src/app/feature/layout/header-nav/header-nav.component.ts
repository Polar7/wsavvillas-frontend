import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGoogleService} from "../../../core/service/auth-google.service";
import {Router} from "@angular/router";

/**
 * Componente para la navbar de la aplicacion
 */
@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

  /**
   * Centinela para indicar si el usuario a iniciado sesion
   */
  public isLogged: boolean = false;

  constructor(private authGoogle: AuthGoogleService, private router: Router) {
  }

  /**
   * Ciclo de vida del componente cuando se carga la vista
   */
  ngAfterViewInit(): void {
    // Cuando se termina de autenticar lo redirige
    if (this.router.url.includes("/login/google/callback")) {
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 500);
    }
  }

  /**
   * Ciclo de vida del componente cuando se inicializa el componente
   */
  ngOnInit(): void {
    if (this.authGoogle.getProfile() != null) {
      this.isLogged = true;
    }
  }

  /**
   * Loguea al usuario
   */
  public login(): void {
    this.authGoogle.login();
  }

  /**
   * Desloguea al usuario
   */
  public logout(): void {
    this.authGoogle.logout();
  }

  public profile(): void {
    console.log(this.authGoogle.getProfile())
    console.log(this.authGoogle.getIdToken())
    console.log(this.authGoogle.getAccessToken())
    console.log(this.authGoogle.getRefreshToken())
  }

  /**
   * Retorna la ruta de la foto de perfil del usuario
   */
  public getImageProfile(): string {
    return this.authGoogle.getProfile()['picture'];
    //return "https://cdn-icons-png.flaticon.com/512/6073/6073873.png";
  }

  /**
   * Retorna el nombre del perfil del usuario
   */
  public getNameProfile(): string {
    return this.authGoogle.getProfile()['given_name'];
    //return "Usuario autorizado prueba";
  }

}
