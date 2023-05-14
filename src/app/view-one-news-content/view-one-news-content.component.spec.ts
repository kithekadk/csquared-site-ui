import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneNewsContentComponent } from './view-one-news-content.component';

describe('ViewOneNewsContentComponent', () => {
  let component: ViewOneNewsContentComponent;
  let fixture: ComponentFixture<ViewOneNewsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneNewsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
