import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCarteiraComponent } from './nova-carteira.component';

describe('NovaCarteiraComponent', () => {
  let component: NovaCarteiraComponent;
  let fixture: ComponentFixture<NovaCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaCarteiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
