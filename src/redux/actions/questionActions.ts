import { ACTION_TYPES, CreateStudentAction, Student } from "../../types";
import axios from "axios";
import { config } from "../../config";
import { Dispatch } from "react";
const { ROOT_URL } = config;
const _createStudent: (data: Student) => CreateStudentAction = (
  data: Student
) => {
  return {
    type: ACTION_TYPES.CREATE_STUDENT,
    payload: data,
  };
};
export const loadStudent = () => {
  return {
    type: ACTION_TYPES.LOADING,
  };
};
export const getAction = (name: string) => {
  console.log("🚀 ~ file: studentActions.ts ~ line 6 ~ name", name);
  return async (dispatch: Function) => {
    const response = await axios.post<Student>(`${ROOT_URL}/api/student`, {
      name,
    });

    dispatch(_createStudent(response.data));
  };
};
