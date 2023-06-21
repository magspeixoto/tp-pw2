import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarAcoesComponent } from './comprar-acoes.component';

describe('ComprarAcoesComponent', () => {
  let component: ComprarAcoesComponent;
  let fixture: ComponentFixture<ComprarAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarAcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
