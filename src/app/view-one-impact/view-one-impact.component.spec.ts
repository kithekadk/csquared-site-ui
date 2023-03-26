import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneImpactComponent } from './view-one-impact.component';

describe('ViewOneImpactComponent', () => {
  let component: ViewOneImpactComponent;
  let fixture: ComponentFixture<ViewOneImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneImpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
