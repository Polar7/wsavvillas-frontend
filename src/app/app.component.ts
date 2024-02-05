import {Component} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wsavvillas-front';
}
