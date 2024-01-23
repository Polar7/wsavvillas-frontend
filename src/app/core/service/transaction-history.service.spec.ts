import { TestBed } from '@angular/core/testing';

import { TransactionHistoryService } from './transaction-history.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TransactionHistoryService', () => {
  let service: TransactionHistoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(TransactionHistoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#getTransactionsHistory should get transaction history", (done: DoneFn) => {
    // Debe ser diferente de nulo
    service.getTransactionsHistory().subscribe(res => {
      expect(res).not.toBeNull();
      done();
    })
  });
});
