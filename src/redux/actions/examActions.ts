import {
  ACTION_TYPES,
  GetQuestionAction,
  Question,
  OriginalQuestion,
  AnswerQuestionAction,
  Answer,
} from "../../types";
import axios from "axios";
import { config } from "../../config";
const { ROOT_URL } = config;
const _getQuestion: (data: Question) => GetQuestionAction = (
  data: Question
) => {
  return {
    type: ACTION_TYPES.GET_QUESTION,
    payload: data,
  };
};
export const loadQuestion = () => {
  return {
    type: ACTION_TYPES.Q_LOADING,
  };
};
export const getQuestionAction = (alreadyUsedQuestions: string[]) => {
  console.log(
    "🚀 ~ file: studentActions.ts ~ line 6 ~ name",
    alreadyUsedQuestions
  );
  return async (dispatch: Function) => {
    const response = await axios.get<OriginalQuestion>(
      `${ROOT_URL}/api/question?alreadyUsedIds=${JSON.stringify(
        alreadyUsedQuestions
      )}`
    );
    console.log("RESPONSE DATAAAAAAAAAAAA ", response.data);
    let answers = response.data.answers.map((answer: string, index: number) => {
      return {
        index,
        value: answer,
      };
    });

    let question: Question = {
      description: response.data.description,
      answers,
      correctAnswerIndex: response.data.correctAnswerIndex,
      id: response.data.id,
    };
    dispatch(_getQuestion(question));
  };
};
const _answerQuestion: (data: Answer) => AnswerQuestionAction = (
  data: Answer
) => {
  return {
    type: ACTION_TYPES.ANSWER_QUESTION,
    payload: data,
  };
};
export const nextQuestionAction = () => {
  return {
    type: ACTION_TYPES.NEXT_QUESTION,
  };
};
export const answerQuestionAction = (
  questionId: string,
  correctAnswerIndex: number,
  answerIndex: number
) => {
  return (dispatch: Function) => {
    dispatch(_answerQuestion({ questionId, correctAnswerIndex, answerIndex }));
  };
};

export const submitExamAction = (studentId: string, answers: Answer[]) => {
  return async (dispatch: Function) => {
    const response = await axios.post<{ score: number }>(
      `${ROOT_URL}/api/exam`,
      {
        studentId,
        answers,
      }
    );

    dispatch({
      type: ACTION_TYPES.SUBMIT_EXAM,
      payload: response.data.score,
    });
  };
};
