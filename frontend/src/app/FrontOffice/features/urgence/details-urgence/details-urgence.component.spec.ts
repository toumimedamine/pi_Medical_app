import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUrgenceComponent } from './details-urgence.component';

describe('DetailsUrgenceComponent', () => {
  let component: DetailsUrgenceComponent;
  let fixture: ComponentFixture<DetailsUrgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsUrgenceComponent]
    });
    fixture = TestBed.createComponent(DetailsUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
