import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUrgenceComponent } from './create-urgence.component';

describe('CreateUrgenceComponent', () => {
  let component: CreateUrgenceComponent;
  let fixture: ComponentFixture<CreateUrgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUrgenceComponent]
    });
    fixture = TestBed.createComponent(CreateUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
