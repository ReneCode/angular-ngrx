import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
// import { IProjectState } from "src/app/store/project.reducer";
import { select, Store } from "@ngrx/store";

@Component({
  selector: "app-project-master",
  templateUrl: "./project-master.component.html",
  styleUrls: ["./project-master.component.scss"]
})
export class ProjectMasterComponent implements OnInit {
  project$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.project$ = store.pipe(select("project"));
  }

  ngOnInit() {}
}
