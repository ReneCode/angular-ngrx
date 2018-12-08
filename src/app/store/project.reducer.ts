import { Action } from "@ngrx/store";

// export interface IProjectState {
//   items: number[];
//   id: string;
// }
// const initialState: IProjectState = {
//   items: [1, 2, 3, 4],
//   id: "hallo"
// };

export function projectReducer(
  // state: IProjectState = initialState,
  state = 42,
  action: Action
) {
  switch (action.type) {
    default:
      return state;
  }
}
