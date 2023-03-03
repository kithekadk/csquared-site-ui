import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferGridComponent } from './what-we-offer-grid.component';

describe('WhatWeOfferGridComponent', () => {
  let component: WhatWeOfferGridComponent;
  let fixture: ComponentFixture<WhatWeOfferGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeOfferGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeOfferGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
