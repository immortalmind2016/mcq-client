import React from 'react';
import { Button } from 'react-bootstrap';
import Question from './Question/Question';

const Exam = ({index}:{index:number}) => {
    const answers=[{
        index:0,
        value:"A",
        
    },{
        index:0,
        value:"B"
    }
,{
    index:0,
    value:"C"
}]

    return (
        <div>
           <Question description="Desc" answers={answers} correctAnswerIndex={0}></Question>
           <Button variant="success">Next</Button>

        </div>
    );
};

export default Exam;