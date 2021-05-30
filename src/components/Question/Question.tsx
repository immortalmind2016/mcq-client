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
          {answers.map((answer)=>(
                 <Form.Check 
                 type={type}
                 id={`default-${type}`}
                 label={`default ${type}`}
               />
            ))}
          </div>
        </div>

    )
};

export default Question;
