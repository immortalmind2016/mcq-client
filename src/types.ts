export enum ACTION_TYPES {
  CREATE_STUDENT,
  LOADING,
  Q_LOADING,
  GET_QUESTION,
  ANSWER_QUESTION,
  NEXT_QUESTION,
  SUBMIT_EXAM,
}
export interface Student {
  name: string;
  id: string;
}
export interface Question {
  description?: string;
  id: string;
  answers?: { index: number; value: string }[];
  correctAnswerIndex?: number;
}
export interface OriginalQuestion {
  description: string;
  id: string;
  answers: string[];
  correctAnswerIndex: number;
}
export interface CreateStudentAction {
  type: ACTION_TYPES;
  payload: Student;
}
export interface GetQuestionAction {
  type: ACTION_TYPES;
  payload: Question;
}
export interface AnswerQuestionAction {
  type: ACTION_TYPES;
  payload: Answer;
}
export interface commonState {
  loading: boolean;
}
export type Action =
  | CreateStudentAction
  | GetQuestionAction
  | AnswerQuestionAction;
export interface Answer {
  questionId: string;
  answerIndex: number;
  correctAnswerIndex: number;
}
export interface Exam {
  alreadyUsedIds: string[];
  answers: Answer[];
  questionIndex: number;
  maxQuestionsNo: number;
  currentQuestion: Question;
  score: number;
}
