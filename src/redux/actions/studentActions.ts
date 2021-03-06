import { ACTION_TYPES, CreateStudentAction, Student } from "../../types";
import axios from "axios";
import { config } from "../../config";
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
export const createStudent = (name: string) => {
  return async (dispatch: Function) => {
    const response = await axios.post<Student>(`${ROOT_URL}/api/student`, {
      name,
    });

    dispatch(_createStudent(response.data));
  };
};
