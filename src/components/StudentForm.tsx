import React, { useState } from "react";
import {useHistory} from "react-router-dom"

import { Button,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { createStudent ,loadStudent} from "../redux/actions/studentActions";
import { StoreState } from "../redux/store";
import { StudentState } from "../redux/reducers/studentReducer";
import Loader from "react-loader-spinner";

function StudentForm() {
  const [username,setUsername]=useState("")
  const dispatch=useDispatch()
  const history=useHistory()
  const studentState:StudentState=useSelector<StoreState>(state=>state.student) as StudentState
  console.log("studentStatestudentStatestudentState ",studentState)
  let onsubmit=(e:any)=>{

    e.preventDefault()
    dispatch(loadStudent())
    dispatch(createStudent(username))
    history.push("/exam")

  }
  let onchange=(e:any)=>{
    let value=e.target.value;
    setUsername(value)
  }
  return <>
  {studentState.loading&&<div className="overlay">
  <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
     
      />
    </div>}
   <Form onSubmit={onsubmit}>
    
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Your name</Form.Label>
      <Form.Control value={username} onChange={onchange} placeholder="Enter Name" />
      <Form.Text className="text-muted">
        We'll never share your data with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Button variant="primary" type="submit" >
      Submit and start 
    </Button>
  </Form>
  </>


}

export default StudentForm;
