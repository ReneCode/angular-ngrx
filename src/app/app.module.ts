import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { projectReducer } from "./store/project.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { ProjectMasterComponent } from "./components/project/project-master/project-master.component";
import { ProjectDetailComponent } from "./components/project/project-detail/project-detail.component";
import { ProjectComponent } from "./components/project/project.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectMasterComponent,
    ProjectDetailComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ project: projectReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
