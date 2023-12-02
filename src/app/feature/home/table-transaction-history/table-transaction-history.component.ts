import {Component, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionHistoryService} from "../../../core/service/transaction-history.service";
import {TransactionHistoryDto} from "../../../core/dto/transaction-history-dto";

@Component({
  selector: 'app-table-transaction-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-transaction-history.component.html',
  styleUrl: './table-transaction-history.component.css'
})
export class TableTransactionHistoryComponent {

 // public listTransactionHistory: WritableSignal<TransactionHistoryDto[]>;

  public listTransactionHistory: WritableSignal<TransactionHistoryDto[]>;

  constructor(private transactionService: TransactionHistoryService) {
    this.listTransactionHistory = signal([]);
    this.transactionService.getTransactionsHistory().subscribe(
      resp => this.listTransactionHistory.set(resp));
  }

}
