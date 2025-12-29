import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfRinkComponent } from './half-rink.component';

describe('HalfRinkComponent', () => {
  let component: HalfRinkComponent;
  let fixture: ComponentFixture<HalfRinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalfRinkComponent]
    });
    fixture = TestBed.createComponent(HalfRinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
