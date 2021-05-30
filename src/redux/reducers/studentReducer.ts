import { ACTION_TYPES, Student, Action, commonState } from "../../types";
export interface StudentState extends Student, commonState {}
export const studentReducer = (
  state: StudentState | {} = { loading: false },
  action: Action
) => {
  console.log("ACTION ", action);
  switch (action.type) {
    case ACTION_TYPES.CREATE_STUDENT:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        loading: false,
      };
    case ACTION_TYPES.LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
