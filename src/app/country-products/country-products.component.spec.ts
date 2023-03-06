import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryProductsComponent } from './country-products.component';

describe('CountryProductsComponent', () => {
  let component: CountryProductsComponent;
  let fixture: ComponentFixture<CountryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
