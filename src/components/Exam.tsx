import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { answerQuestionAction, nextQuestionAction, submitExamAction } from '../redux/actions/examActions';
import { getQuestionAction } from '../redux/actions/examActions';
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
    const [answerIndex,setAnswerIndex]=useState(0)
   

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

            let q :any=examState.currentQuestion
            if(q){
                   //@ts-ignore
             q.answers=shuffle(q.answers)
             setQuestion(q)
             setAnswerIndex(q.answers[0].index)
             setLoading(false)
             setLoadQuestion(false)
            }
       }
       if(examState.questionIndex>examState.maxQuestionsNo){
            disptach(submitExamAction(studentState.id, examState.answers))
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
       let id=question?.id as string
       let correctAnswerIndex=question?.correctAnswerIndex as number
        disptach(answerQuestionAction(id,correctAnswerIndex,answerIndex))
    }
    
    const change=(e: React.FormEvent<HTMLInputElement>)=>{
        setAnswerIndex(Number(e.currentTarget.id))
    }

    return (
        
        <div>
              {loading&&<div className="overlay" >  <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
     
      /></div>}
         {examState.questionIndex>examState.maxQuestionsNo&&<div className="overlay">
             {examState.score==-1?"Caclulating your score...":<div>Your score is : <h3>{examState.score}</h3></div>}

         </div>}

            {question&& <>    <Question description={question.description as string} change={change} answers={question.answers as {index:number,value:string}[]} correctAnswerIndex={0}></Question><Button onClick={next} variant="success">Next</Button> </> }
         
        

        </div>
    );
};

export default Exam;