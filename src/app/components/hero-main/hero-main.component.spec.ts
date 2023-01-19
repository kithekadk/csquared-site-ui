import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMainComponent } from './hero-main.component';

describe('HeroMainComponent', () => {
  let component: HeroMainComponent;
  let fixture: ComponentFixture<HeroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
