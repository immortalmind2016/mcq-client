import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { Exam, Student } from "../types";
import { studentReducer } from "./reducers/studentReducer";
import { examReducer, ExamState } from "./reducers/examReducer";

export interface StoreState {
  student: Student | {};
  exam: ExamState;
}

const initState = {};
// allow Redux devtool
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers<StoreState>({
    student: studentReducer,
    exam: examReducer,
  }),
  initState,
  // Allow Async actions by using Thunk middleware
  composeEnhancers(applyMiddleware(Thunk))
);
