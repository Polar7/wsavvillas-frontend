import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

/**
 * Servicio para el consumo del endpoint de TransactionHistory
 */
@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  constructor(private http: HttpClient) { }
}
