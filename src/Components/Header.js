import React from 'react';
import logo from '../Assets/Images/logo.png';
import {Navbar,Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
export default function Header() {
const users = useSelector(state => state);
// console.log(state);
let dispatch = useDispatch();
const update = () =>{
  dispatch({
    type: "UPDATEDATA",
    email:"newemailishere"
  })
}
    return (
        <div className="header">
          <Button onClick={update}>Update Email</Button>
      <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      {users.users.email}
    </Navbar.Brand>
  </Navbar>
            
        </div>
    )
}
