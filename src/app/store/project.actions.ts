import { Action } from "@ngrx/store";

export enum ProjectActionTypes {
  LoadProjectTrigger = "LOAD_PROJECT_TRIGGER",
  LoadProjectFinish = "LOAD_PROJECT_FINISH",
  SelectProject = "SELECT_PROJECT"
}

export class LoadProjectTrigger implements Action {
  readonly type = ProjectActionTypes.LoadProjectTrigger;
}

export class LoadProjectFinish implements Action {
  readonly type = ProjectActionTypes.LoadProjectFinish;
  payload: string[];
  constructor(projects: string[]) {
    this.payload = projects;
  }
}
export class SelectProject implements Action {
  readonly type = ProjectActionTypes.SelectProject;
  payload: string;
  constructor(project: string) {
    this.payload = project;
  }
}
