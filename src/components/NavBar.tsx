import React from 'react';
import { useSelector } from 'react-redux';
import { StudentState } from "../redux/reducers/studentReducer";
import { StoreState } from '../redux/store';

const NavBar = () => {

    const studentState:StudentState=useSelector<StoreState>(state=>state.student) as StudentState
  
    return (
        <div className="navbar">
           <h5>Welcome <strong>{studentState?.name}</strong></h5>
           <h6>Question 1 of 5</h6>
        </div>
    );
};

export default NavBar;