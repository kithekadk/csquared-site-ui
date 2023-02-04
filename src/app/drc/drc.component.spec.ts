import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DRCComponent } from './drc.component';

describe('DRCComponent', () => {
  let component: DRCComponent;
  let fixture: ComponentFixture<DRCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DRCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DRCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
