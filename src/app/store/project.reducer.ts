import { Action } from "@ngrx/store";
import { ProjectActionTypes } from "./project.actions";

export interface IProjectState {
  projects: string[];
  selectedProject: string;
}
const initialState: IProjectState = {
  projects: ["a", "b", "C", "D", "E"],
  selectedProject: ""
};

export function projectReducer(state: IProjectState = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case ProjectActionTypes.SelectProject:
      return {
        ...state,
        selectedProject: action.payload
      };
  }
}
