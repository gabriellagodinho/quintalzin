import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutores } from './lista-produtores';

describe('ListaProdutores', () => {
  let component: ListaProdutores;
  let fixture: ComponentFixture<ListaProdutores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProdutores],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProdutores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
