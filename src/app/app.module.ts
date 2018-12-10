import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { pokemonReducer } from "./store/pokemon.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { PokemonMasterComponent } from "./components/pokemon/pokemon-master/pokemon-master.component";
import { PokemonDetailComponent } from "./components/pokemon/pokemon-detail/pokemon-detail.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { HomeComponent } from "./components/home/home.component";
import { EffectsModule } from "@ngrx/effects";
import { PokemonEffects } from "./store/pokemon.effects";
import { HttpClientModule } from "@angular/common/http";
import { PokemonListComponent } from "./components/pokemon/pokemon-master/pokemon-list/pokemon-list.component";
import { SearchInputComponent } from "./components/common/search-input/search-input.component";
import { appState } from "./app.state";
import { PokemonStateComponent } from "./components/pokemon/pokemon-state/pokemon-state.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonMasterComponent,
    PokemonDetailComponent,
    PokemonComponent,
    HomeComponent,
    PokemonListComponent,
    SearchInputComponent,
    PokemonStateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot([PokemonEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
