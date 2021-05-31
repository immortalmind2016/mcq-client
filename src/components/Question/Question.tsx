import React from "react";
import { Form } from "react-bootstrap";

const Question = ({
  description,
  answers,
  correctAnswerIndex,
}: {
  description: string;
  answers: {index:number,value:string}[];
  correctAnswerIndex: number;
  
}) => {
  const type="radio"
    return (
        <div className="question">
          <p>{description}</p>
          <div className="q-options mb-3">
          {answers&&answers.map((answer)=>(
                 <Form.Check
                
                 type={type}
                 id={String(answer.index)}
                 label={`${answer.value}`}
               />
            ))}
          </div>
        </div>

    )
};

export default Question;
