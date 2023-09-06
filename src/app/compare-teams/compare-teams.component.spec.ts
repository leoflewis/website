import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTeamsComponent } from './compare-teams.component';

describe('CompareTeamsComponent', () => {
  let component: CompareTeamsComponent;
  let fixture: ComponentFixture<CompareTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareTeamsComponent]
    });
    fixture = TestBed.createComponent(CompareTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
