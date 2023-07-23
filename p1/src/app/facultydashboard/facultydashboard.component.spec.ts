import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydashboardComponent } from './facultydashboard.component';

describe('FacultydashboardComponent', () => {
  let component: FacultydashboardComponent;
  let fixture: ComponentFixture<FacultydashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultydashboardComponent]
    });
    fixture = TestBed.createComponent(FacultydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
