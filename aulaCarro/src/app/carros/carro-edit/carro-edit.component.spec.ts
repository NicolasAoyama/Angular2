import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroEditComponent } from './carro-edit.component';

describe('CarroEditComponent', () => {
  let component: CarroEditComponent;
  let fixture: ComponentFixture<CarroEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroEditComponent]
    });
    fixture = TestBed.createComponent(CarroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
