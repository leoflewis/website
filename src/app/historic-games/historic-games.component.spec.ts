import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricGamesComponent } from './historic-games.component';

describe('HistoricGamesComponent', () => {
  let component: HistoricGamesComponent;
  let fixture: ComponentFixture<HistoricGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricGamesComponent]
    });
    fixture = TestBed.createComponent(HistoricGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
