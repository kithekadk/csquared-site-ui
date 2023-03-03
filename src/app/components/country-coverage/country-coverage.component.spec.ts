import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCoverageComponent } from './country-coverage.component';

describe('CountryCoverageComponent', () => {
  let component: CountryCoverageComponent;
  let fixture: ComponentFixture<CountryCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCoverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
