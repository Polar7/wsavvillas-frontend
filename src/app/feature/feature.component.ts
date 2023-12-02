import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderNavComponent} from "./layout/header-nav/header-nav.component";
import {TableTransactionHistoryComponent} from "./home/table-transaction-history/table-transaction-history.component";

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, HeaderNavComponent, TableTransactionHistoryComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

}
