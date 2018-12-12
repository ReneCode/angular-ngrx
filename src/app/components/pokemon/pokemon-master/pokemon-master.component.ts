import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import {
  IPokemonState,
  selectSelectedPokemonId,
  selectAllPokemons
} from "src/app/store/pokemon.reducer";
import {
  SelectPokemonId,
  LoadPokemonTrigger
} from "src/app/store/pokemon.actions";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-pokemon-master",
  templateUrl: "./pokemon-master.component.html",
  styleUrls: ["./pokemon-master.component.scss"]
})
export class PokemonMasterComponent implements OnInit, OnDestroy {
  selectedId$: Observable<string>;
  pokemons$: Observable<object[]>;
  searchValue: string = "";

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.pokemons$ = this.store.pipe(select(selectAllPokemons));
    this.selectedId$ = this.store.pipe(select(selectSelectedPokemonId));

    this.store.dispatch(new LoadPokemonTrigger());
  }

  ngOnDestroy() {}

  selectPokemon(pokemon: any) {
    this.store.dispatch(new SelectPokemonId(pokemon.id));
  }

  onSearchChange(searchValue: string) {
    this.store.dispatch(new LoadPokemonTrigger(searchValue));
  }
}
