import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenyaComponent } from './kenya.component';

describe('KenyaComponent', () => {
  let component: KenyaComponent;
  let fixture: ComponentFixture<KenyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
