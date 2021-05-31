import { ACTION_TYPES, Student, Action, commonState } from "../../types";
export interface StudentState extends Student, commonState {}
export const studentReducer = (
  state: StudentState | {} = { loading: false },
  action: Action
) => {
  console.log("ACTION ", action);
  let payload: Student = action.payload as Student;

  switch (action.type) {
    case ACTION_TYPES.CREATE_STUDENT:
      return {
        ...state,
        name: payload.name,
        id: payload.id,
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
