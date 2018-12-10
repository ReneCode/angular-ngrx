import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStateComponent } from './pokemon-state.component';

describe('PokemonStateComponent', () => {
  let component: PokemonStateComponent;
  let fixture: ComponentFixture<PokemonStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
