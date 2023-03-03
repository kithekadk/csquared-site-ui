import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogoComponent } from './togo.component';

describe('TogoComponent', () => {
  let component: TogoComponent;
  let fixture: ComponentFixture<TogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
