import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonMasterComponent } from "./pokemon-master.component";

describe("PokemonMasterComponent", () => {
  let component: PokemonMasterComponent;
  let fixture: ComponentFixture<PokemonMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMasterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
