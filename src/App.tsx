import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "./redux/actions/studentActions";
import StudentForm from "./components/StudentForm";
import { Route, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import { StudentState } from "./redux/reducers/studentReducer";
import { StoreState } from "./redux/store";
import Exam from "./components/Exam";

function App() {
  const studentState:StudentState=useSelector<StoreState>(state=>state.student) as StudentState
  console.log("🚀 ~ file: App.tsx ~ line 18 ~ App ~ studentState", studentState,Object.keys(studentState))

  return <>

  <Container>
    {Object.keys(studentState).length>1&& <NavBar></NavBar>}
 
<div className="App">
  <div className="student-form">
 
     <Route path="/" component={StudentForm} exact></Route>
     <Route path="/exam" component={Exam} exact></Route>
 </div>
 </div>
  </Container>
  </>

}

export default App;
