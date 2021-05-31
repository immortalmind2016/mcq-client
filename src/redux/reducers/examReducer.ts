import {
  ACTION_TYPES,
  Exam,
  Action,
  commonState,
  Question,
  Answer,
} from "../../types";
export interface ExamState extends Exam, commonState {
  alreadyUsedIds: string[];
}
export const examReducer = (
  state: ExamState = {
    loading: false,
    alreadyUsedIds: [],
    questionIndex: 1,
    maxQuestionsNo: 5,
    currentQuestion: null as any,
    score: -1,
    answers: [],
  },
  action: Action
) => {
  let payload: any = action.payload;

  switch (action.type) {
    case ACTION_TYPES.GET_QUESTION:
      return {
        ...state,
        alreadyUsedIds: [...state.alreadyUsedIds, payload.id],
        loading: false,
        currentQuestion: payload,
      };
    case ACTION_TYPES.ANSWER_QUESTION:
      return {
        ...state,
        answers: [...state.answers, payload] as Answer[],
      };
    case ACTION_TYPES.NEXT_QUESTION: {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    }
    case ACTION_TYPES.SUBMIT_EXAM: {
      return {
        ...state,
        score: payload,
      };
    }

    default:
      return state;
  }
};
