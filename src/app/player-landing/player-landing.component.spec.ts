import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLandingComponent } from './player-landing.component';

describe('PlayerLandingComponent', () => {
  let component: PlayerLandingComponent;
  let fixture: ComponentFixture<PlayerLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerLandingComponent]
    });
    fixture = TestBed.createComponent(PlayerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
