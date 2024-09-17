import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {TransactionHistoryDto} from "../dto/transaction-history-dto";
import {AuthGoogleService} from "./auth-google.service";

/**
 * Servicio para el consumo del endpoint de TransactionHistory
 */
@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  constructor(private http: HttpClient, private authGoogle: AuthGoogleService) { }

  /**
   * Consulta el historial de transacciones
   */
  public getTransactionsHistory(): Observable<TransactionHistoryDto[]> {
    let headers = {
      'token-google': this.authGoogle.getAccessToken()
    }

    return this.http.get<TransactionHistoryDto[]>("https://10.238.25.216:8443/transactionHistory", { headers: headers});
  }

}
