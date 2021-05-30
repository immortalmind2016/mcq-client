import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { Student } from "../types";
import { studentReducer } from "./reducers/studentReducer";

export interface StoreState {
  student: Student | {};
}

const initState = {};
// allow Redux devtool
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers<StoreState>({
    student: studentReducer,
  }),
  initState,
  // Allow Async actions by using Thunk middleware
  composeEnhancers(applyMiddleware(Thunk))
);
