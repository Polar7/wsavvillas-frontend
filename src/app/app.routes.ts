import { Routes } from '@angular/router';
import {FeatureComponent} from "./feature/feature.component";

/**
 * Rutas de la aplicacion
 */
export const routes: Routes = [
  {
    path: "",
    component: FeatureComponent
  },
  {
    path: "login/google/callback",
    component: FeatureComponent
  }
];
