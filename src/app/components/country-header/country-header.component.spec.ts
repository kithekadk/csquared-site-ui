import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHeaderComponent } from './country-header.component';

describe('CountryHeaderComponent', () => {
  let component: CountryHeaderComponent;
  let fixture: ComponentFixture<CountryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
