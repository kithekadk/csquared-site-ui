import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDescriptionComponent } from './career-description.component';

describe('CareerDescriptionComponent', () => {
  let component: CareerDescriptionComponent;
  let fixture: ComponentFixture<CareerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
