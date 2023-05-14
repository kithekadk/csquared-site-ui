import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferFlexComponent } from './what-we-offer-flex.component';

describe('WhatWeOfferFlexComponent', () => {
  let component: WhatWeOfferFlexComponent;
  let fixture: ComponentFixture<WhatWeOfferFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeOfferFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeOfferFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
