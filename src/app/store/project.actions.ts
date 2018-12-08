import { Action } from "@ngrx/store";

export enum ProjectActionTypes {
  SelectProject = "SELECT_PROJECT"
}

export class SelectProject implements Action {
  readonly type = ProjectActionTypes.SelectProject;
  payload: string;
  constructor(project: string) {
    this.payload = project;
  }
}
