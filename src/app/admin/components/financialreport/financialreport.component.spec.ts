import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialreportComponent } from './financialreport.component';

describe('FinancialreportComponent', () => {
  let component: FinancialreportComponent;
  let fixture: ComponentFixture<FinancialreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialreportComponent]
    });
    fixture = TestBed.createComponent(FinancialreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
