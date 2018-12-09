import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { projectReducer } from "./store/project.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { PokemonMasterComponent } from "./components/project/pokemon-master/pokemon-master.component";
import { ProjectDetailComponent } from "./components/project/project-detail/project-detail.component";
import { ProjectComponent } from "./components/project/project.component";
import { HomeComponent } from "./components/home/home.component";
import { EffectsModule } from "@ngrx/effects";
import { ProjectEffects } from "./store/project.effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PokemonMasterComponent,
    ProjectDetailComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ project: projectReducer }),
    EffectsModule.forRoot([ProjectEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
