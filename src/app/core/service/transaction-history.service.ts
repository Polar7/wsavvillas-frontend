import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {TransactionHistoryDto} from "../dto/transaction-history-dto";

/**
 * Servicio para el consumo del endpoint de TransactionHistory
 */
@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  constructor(private http: HttpClient) { }

  /**
   * Consulta el historial de transacciones
   */
  public getTransactionsHistory(): Observable<TransactionHistoryDto[]> {
    return this.http.get<TransactionHistoryDto[]>("http://localhost:8080/transactionHistory");
  }

}
