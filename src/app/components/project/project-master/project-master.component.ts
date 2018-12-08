import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { IProjectState } from "src/app/store/project.reducer";
import { SelectProject } from "src/app/store/project.actions";

@Component({
  selector: "app-project-master",
  templateUrl: "./project-master.component.html",
  styleUrls: ["./project-master.component.scss"]
})
export class ProjectMasterComponent implements OnInit {
  projects$: Observable<string[]>;
  id$: Observable<string>;

  constructor(private store: Store<{ project: IProjectState }>) {
    this.projects$ = store.pipe(
      select("project"),
      map((data: IProjectState) => data.projects)
    );
  }

  selectProject(project: string) {
    this.store.dispatch(new SelectProject(project));
  }

  ngOnInit() {}
}
