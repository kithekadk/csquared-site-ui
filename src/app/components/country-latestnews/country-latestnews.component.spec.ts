import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLatestnewsComponent } from './country-latestnews.component';

describe('CountryLatestnewsComponent', () => {
  let component: CountryLatestnewsComponent;
  let fixture: ComponentFixture<CountryLatestnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryLatestnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLatestnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
