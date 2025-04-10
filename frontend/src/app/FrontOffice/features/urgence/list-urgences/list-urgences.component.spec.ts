import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUrgencesComponent } from './list-urgences.component';

describe('ListUrgencesComponent', () => {
  let component: ListUrgencesComponent;
  let fixture: ComponentFixture<ListUrgencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUrgencesComponent]
    });
    fixture = TestBed.createComponent(ListUrgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
