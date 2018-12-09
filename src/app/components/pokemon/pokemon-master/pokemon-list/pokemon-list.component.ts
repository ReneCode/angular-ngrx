import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons;
  @Input() selectedId;
  @Output() selectPokemon = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(pokemon: object) {
    this.selectPokemon.emit(pokemon);
  }
}
