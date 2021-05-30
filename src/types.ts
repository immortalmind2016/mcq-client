export enum ACTION_TYPES {
  CREATE_STUDENT,
  LOADING,
}
export interface Student {
  name: string;
  id: string;
}
export interface CreateStudentAction {
  type: ACTION_TYPES;
  payload: Student;
}
export interface commonState {
  loading: boolean;
}
export type Action = CreateStudentAction;
