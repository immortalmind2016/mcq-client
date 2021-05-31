import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { nextQuestionAction } from '../redux/actions/examActions';
import { getQuestionAction } from '../redux/actions/questionActions';
import { ExamState } from '../redux/reducers/examReducer';
import { StudentState } from '../redux/reducers/studentReducer';
import { StoreState } from '../redux/store';
import {  Question as QType} from '../types';
import Question from './Question/Question';
let shuffle = (arr:{index:number,value:string}[]) => {
    let set = new Set();
    while (set.size !== arr.length) {
      let rand = Math.floor(Math.random() * arr.length);
      set.add(arr[rand]);
    }
    return Array.from(set)
  };
const Exam = () => {
    const [question,setQuestion]=useState<QType>()
    const [loadQuestion,setLoadQuestion]=useState(true)
    const [loading,setLoading]=useState(true)
   

    const disptach=useDispatch()
    let examState:ExamState=useSelector<StoreState>(state=>state.exam) as ExamState
    let history=useHistory()
    let studentState:StudentState=useSelector<StoreState>(state=>state.student) as StudentState
    // useEffect(()=>{
    //     console.log("🚀 ~ file: Exam.tsx ~ line 29 ~ Exam ~ examState", examState)

    //     let q=examState.currentQuestion
    //     if(q){
    //            //@ts-ignore
    //      q.answers=shuffle(q.answers)
    //      setQuestion(q)
    //      setLoading(false)
    //     }
         
    // //@ts-ignore
    // })
    useEffect(()=>{
      
       if(loadQuestion){
       
        console.log("🚀 ~ file: Exam.tsx ~ line 29 ~ Exam ~ examState", examState)

            let q=examState.currentQuestion
            if(q){
                   //@ts-ignore
             q.answers=shuffle(q.answers)
             console.log("+++++++++++++++++++++++++++++++++++++++++")
             setQuestion(q)
             setLoading(false)
             setLoadQuestion(false)
            }
       }
    },[examState.currentQuestion])
    useEffect(()=>{
        if(!studentState.name){
            history.push("/")
            return
        }
        disptach(getQuestionAction(examState.alreadyUsedIds))

    },[])
    let next=()=>{
        disptach(nextQuestionAction())
        setLoading(true)
        setLoadQuestion(true)
       disptach(getQuestionAction(examState.alreadyUsedIds))
    }
 

    return (
        <div>
              {loading&&<div className="overlay" >  <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
     
      /></div>}
         {examState.questionIndex>examState.maxQuestionsNo&&<div className="overlay">Finally you finished the exam</div>}

            {question&& <>   <Question description={question.description as string} answers={question.answers as {index:number,value:string}[]} correctAnswerIndex={0}></Question><Button onClick={next} variant="success">Next</Button> </> }
         
        

        </div>
    );
};

export default Exam;