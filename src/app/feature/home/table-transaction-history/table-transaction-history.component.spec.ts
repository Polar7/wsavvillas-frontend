import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTransactionHistoryComponent } from './table-transaction-history.component';

describe('TableTransactionHistoryComponent', () => {
  let component: TableTransactionHistoryComponent;
  let fixture: ComponentFixture<TableTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTransactionHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
