import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatersTableComponent } from './skaters-table.component';

describe('SkatersTableComponent', () => {
  let component: SkatersTableComponent;
  let fixture: ComponentFixture<SkatersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkatersTableComponent]
    });
    fixture = TestBed.createComponent(SkatersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
