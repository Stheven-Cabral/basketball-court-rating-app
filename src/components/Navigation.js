import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  height: 70px;
  background-color: marshmellow;
`;

const SignUp = styled.span`
  color: black;
  float: right;
  margin-right: 15%;
  margin-left: 25px;
  line-height: 70px;
  font-size: 0.75em;
`;

const Login = styled.span`
  color: black;
  float: right;
  line-height: 70px;
  font-size: 0.75em;
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