import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  height: 70px;
  background-color: maroon;
`;

const SignUp = styled.span`
  color: lightgrey;
  float: right;
  margin-right: 15px;
  margin-left: 25px;
`;

const Login = styled.span`
  color: lightgrey;
  float: right;
`;

const Navigation = () => {
  return (
    <NavBar>
      <Link className="navlogo" to="/">HoopUp</Link>
      <SignUp>Sign Up</SignUp>
      <Login>Login In</Login>
    </NavBar>
  )
}

export default Navigation;