import {Component, signal, ViewChild, WritableSignal} from '@angular/core';
import {CommonModule, DatePipe, formatCurrency} from '@angular/common';
import {TransactionHistoryService} from "../../../core/service/transaction-history.service";
import {TransactionHistoryDto} from "../../../core/dto/transaction-history-dto";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";

/**
 * Componente de la tabla con el historial de transacciones
 */
@Component({
  selector: 'app-table-transaction-history',
  standalone: true,
  imports: [CommonModule, MatPaginator, FormsModule],
  providers: [DatePipe],
  templateUrl: './table-transaction-history.component.html',
  styleUrl: './table-transaction-history.component.css'
})
export class TableTransactionHistoryComponent {

  /**
   * Listado con el historial de transacciones
   */
  public listTransactionHistory: WritableSignal<TransactionHistoryDto[]>;

  /**
   * Filtrado de la lista para la tabla
   */
  public tableFilter: TransactionHistoryDto[];

  /**
   * Numero de solicitudes total
   */
  public totalRequests: number = 0;

  /**
   * Filtros por cada columna de la tabla
   */
  public filter: any = {
    filterOption: '1',
    id: '',
    requestId: '',
    whoSendPetition: '',
    searchType: '',
    invoiceId: '',
    invoiceCard: '',
    paidValue: '',
    numberStatus: '',
    messageStatus: '',
    requestDate: '',
    strWebService: ''
  };

  /**
   * Centinela para indicar si hay filtros de busqueda
   */
  public filtersExist: boolean = false;

  /**
   * Lista auxiliar para el filtrado de la tabla
   */
  public tableFilterAux: TransactionHistoryDto[];

  /**
   * Objeto del paginador en el HTML
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /**
   * Atributo para paginador, items por página
   */
  public pageSizePaginator: number = 25;

  /**
   * Atributo para paginador, numero desde la lista corta
   */
  private sincePaginator: number = 0;

  /**
   * Atributo para paginador, numero hasta la lista termina
   */
  private untilPaginator: number = this.pageSizePaginator;


  /**
   * Inicializa el componente
   * @param transactionService
   * @param datePipe
   */
  constructor(private transactionService: TransactionHistoryService, private datePipe: DatePipe) {
    this.listTransactionHistory = signal([]);
    this.tableFilter = [];

    this.transactionService.getTransactionsHistory().subscribe(
      resp => {
        this.listTransactionHistory.set(resp);
        this.totalRequests = this.listTransactionHistory().length;
        this.tableFilter = this.listTransactionHistory().slice(this.sincePaginator, this.untilPaginator);
      });
  }

  /**
   * Permite buscar transacciones segun palabras claves en cada columna
   */
  public onSearchTransaction(): void {

    if (this.filter.filterOption == 1) {
      this.includesSearch();
    } else {
      this.equalsSearch();
    }

    this.totalRequests = this.tableFilter.length;

    this.tableFilterAux = this.tableFilter
    this.tableFilter = this.tableFilterAux.slice(this.sincePaginator, this.untilPaginator);

    this.filtersExist = this.totalRequests != this.listTransactionHistory().length;
    this.paginator.firstPage();
  }

  /**
   * Permite cambiar la página en la tabla
   * @param e Evento del paginador
   */
  public changePage(e: PageEvent): void {
    this.pageSizePaginator = e.pageSize;
    this.sincePaginator = e.pageIndex * e.pageSize;
    this.untilPaginator = this.sincePaginator + this.pageSizePaginator;

    if (this.untilPaginator > this.listTransactionHistory().length) {
      this.untilPaginator = this.listTransactionHistory().length;
    }

    if (this.filtersExist) {
      this.tableFilter = this.tableFilterAux.slice(this.sincePaginator, this.untilPaginator);
    } else {
      this.tableFilter = this.listTransactionHistory().slice(this.sincePaginator, this.untilPaginator);
    }
  }


  /**
   * Filtra la tabla por valores que contienen a
   */
  private includesSearch(): void {
    this.tableFilter = this.listTransactionHistory()
      .filter(t => {
        return (!this.filter.id || t.id?.toString().includes(this.filter.id)) &&
          (!this.filter.requestId || t.requestId?.includes(this.filter.requestId)) &&
          (!this.filter.whoSendPetition || t.whoSendPetition?.includes(this.filter.whoSendPetition)) &&
          (!this.filter.searchType || t.searchType?.includes(this.filter.searchType)) &&
          (!this.filter.invoiceId || t.invoiceId?.includes(this.filter.invoiceId)) &&
          (!this.filter.invoiceCard || t.invoiceCard?.includes(this.filter.invoiceCard)) &&
          (!this.filter.paidValue || t.paidValue?.toString().includes(this.filter.paidValue)) &&
          (!this.filter.numberStatus || t.numberStatus?.toString().includes(this.filter.numberStatus)) &&
          (!this.filter.messageStatus || t.messageStatus?.includes(this.filter.messageStatus)) &&
          (!this.filter.requestDate || t.requestDate?.toString().includes(this.filter.requestDate)) &&
          (!this.filter.strWebService || t.strWebService?.toString().includes(this.filter.strWebService))
      });
  }

  /**
   * Filtra la tabla por valores iguales a
   */
  private equalsSearch(): void {
    this.tableFilter = this.listTransactionHistory()
      .filter(t => {
        return (!this.filter.id || t.id?.toString() == this.filter.id) &&
          (!this.filter.requestId || t.requestId?.toString() == (this.filter.requestId)) &&
          (!this.filter.whoSendPetition || t.whoSendPetition?.toString() == (this.filter.whoSendPetition)) &&
          (!this.filter.searchType || t.searchType?.toString() == (this.filter.searchType)) &&
          (!this.filter.invoiceId || t.invoiceId?.toString() == (this.filter.invoiceId)) &&
          (!this.filter.invoiceCard || t.invoiceCard?.toString() == (this.filter.invoiceCard)) &&
          (!this.filter.paidValue || t.paidValue?.toString() == (this.filter.paidValue)) &&
          (!this.filter.numberStatus || t.numberStatus?.toString() == (this.filter.numberStatus)) &&
          (!this.filter.messageStatus || t.messageStatus?.toString() == (this.filter.messageStatus)) &&
          (!this.filter.requestDate || t.requestDate?.toString() == (this.filter.requestDate)) &&
          (!this.filter.strWebService || t.strWebService?.toString() == (this.filter.strWebService))
      });
  }
}
