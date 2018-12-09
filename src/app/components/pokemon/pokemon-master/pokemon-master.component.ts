import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
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
export class PokemonMasterComponent implements OnInit, OnDestroy {
  pokemons: object[];
  selectedId: string = "";
  subscription: Subscription;

  constructor(private store: Store<{ pokemon: IPokemonState }>) {
    this.subscription = store
      .pipe(
        select("pokemon"),
        map((state: IPokemonState) => {
          this.selectedId = state.selectedId;
          this.pokemons = state.pokemons;
          return state.pokemons;
        })
      )
      .subscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectPokemon(pokemon: any) {
    this.store.dispatch(new SelectPokemon(pokemon.id));
  }

  ngOnInit() {
    this.store.dispatch(new LoadPokemonTrigger());
  }
}
