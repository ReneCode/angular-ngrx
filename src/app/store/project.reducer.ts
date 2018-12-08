import { Action } from "@ngrx/store";
import { ProjectActionTypes } from "./project.actions";

export interface IProjectState {
  projects: object[];
  selectedProject: string;
}
const initialState: IProjectState = {
  projects: [],
  selectedProject: ""
};

export function projectReducer(state: IProjectState = initialState, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
    case ProjectActionTypes.SelectProject:
      return {
        ...state,
        selectedProject: action.payload
      };
    case ProjectActionTypes.LoadProjectFinish:
      return {
        ...state,
        projects: action.payload
      };
  }
}
