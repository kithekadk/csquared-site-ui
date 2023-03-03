import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAboutComponent } from './country-about.component';

describe('CountryAboutComponent', () => {
  let component: CountryAboutComponent;
  let fixture: ComponentFixture<CountryAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
