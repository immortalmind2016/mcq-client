import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ExamState } from '../redux/reducers/examReducer';
import { StudentState } from "../redux/reducers/studentReducer";
import { StoreState } from '../redux/store';

const NavBar = () => {
    const studentState:StudentState=useSelector<StoreState>(state=>state.student) as StudentState
    const examState:ExamState=useSelector<StoreState>(state=>state.exam) as ExamState
    console.log("STUDENT ",studentState)
   
    return (
        <div className="navbar">
           <h5>Welcome <strong>{studentState?.name}</strong></h5>
          {examState.questionIndex<=examState.maxQuestionsNo&& <h6>Question {examState.questionIndex} of {examState.maxQuestionsNo}</h6>}
        </div>
    );
};

export default NavBar;