import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.state";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectSelectedPokemon } from "src/app/store/pokemon.reducer";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pokemon-image",
  templateUrl: "./pokemon-image.component.html",
  styleUrls: ["./pokemon-image.component.scss"]
})
export class PokemonImageComponent implements OnInit {
  image$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.image$ = this.store.pipe(
      select(selectSelectedPokemon),
      map((p: any) => {
        return p ? p.image : "";
      })
    );
  }
}
