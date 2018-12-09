import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { IPokemonState } from "src/app/store/pokemon.reducer";
import {
  SelectPokemon,
  LoadPokemonTrigger
} from "src/app/store/pokemon.actions";

@Component({
  selector: "app-pokemon-master",
  templateUrl: "./pokemon-master.component.html",
  styleUrls: ["./pokemon-master.component.scss"]
})
export class PokemonMasterComponent implements OnInit {
  pokemons$: Observable<object[]>;
  id$: Observable<string>;

  constructor(private store: Store<{ pokemon: IPokemonState }>) {
    this.pokemons$ = store.pipe(
      select("pokemon"),
      map((data: IPokemonState) => data.pokemons)
    );
  }

  selectPokemon(pokemon: any) {
    this.store.dispatch(new SelectPokemon(pokemon.id));
  }

  ngOnInit() {
    this.store.dispatch(new LoadPokemonTrigger());
  }
}
