import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasEditComponent } from './pessoas-edit.component';

describe('PessoasEditComponent', () => {
  let component: PessoasEditComponent;
  let fixture: ComponentFixture<PessoasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasEditComponent]
    });
    fixture = TestBed.createComponent(PessoasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
