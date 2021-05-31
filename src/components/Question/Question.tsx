import React from "react";
import { Form } from "react-bootstrap";

const Question = ({
  description,
  answers,

  change
}: {
  description: string;
  answers: {index:number,value:string}[];
  correctAnswerIndex: number;
  change:any
  
}) => {
 
  const type="radio"
    return (
        <div className="question">
          <h3>{description}</h3>
          <div className="q-options mb-3">
          {answers&&answers.map((answer,i)=>(
                  <Form.Check 
                  key={`${answer.value}-${i}`}
                  {...(i==0&&{defaultChecked:true})}
                  onChange={change}
                  name="answerOption"
                 type={type}
                 id={String(answer.index)}
                 label={`${answer.value} - ${answer.index}`}
               />
            ))}
          </div>
        </div>

    )
};

export default Question;
