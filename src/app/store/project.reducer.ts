import { Action } from "@ngrx/store";
import { ProjectActionTypes } from "./project.actions";

export interface IProjectState {
  projects: object[];
  selectedId: string;
}
const initialState: IProjectState = {
  projects: [],
  selectedId: ""
};

export function projectReducer(state: IProjectState = initialState, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
    case ProjectActionTypes.SelectProject:
      return {
        ...state,
        selectedId: action.payload
      };
    case ProjectActionTypes.LoadProjectFinish:
      return {
        ...state,
        projects: action.payload
      };
  }
}
