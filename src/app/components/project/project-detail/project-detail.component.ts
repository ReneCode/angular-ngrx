import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IProjectState } from "src/app/store/project.reducer";
import { map } from "rxjs/operators";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"]
})
export class ProjectDetailComponent implements OnInit {
  selectedId$;

  constructor(private store: Store<{ project: IProjectState }>) {
    this.selectedId$ = store.pipe(
      select("project"),
      map((data: IProjectState) => {
        console.log("ID:", data.selectedId);
        return data.selectedId;
      })
    );
    // this.id$ = store.pipe(
    //   select("project"),
    //   map((data: IProjectState) => data.id)
    // );
  }

  ngOnInit() {}
}
