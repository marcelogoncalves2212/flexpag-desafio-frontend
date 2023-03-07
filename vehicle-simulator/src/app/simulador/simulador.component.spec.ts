import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorComponent } from './simulador.component';

describe('SimuladorComponent', () => {
  let component: SimuladorComponent;
  let fixture: ComponentFixture<SimuladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
