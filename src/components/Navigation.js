import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  height: 100px;
  background-color: marshmellow;
  text-align: center;
  @media (max-width: 600px) {
    height: 75px;
  }
`;


const Navigation = () => {
  return (
    <NavBar>
      <Link className="navlogo" to="/">HoopUp</Link>
    </NavBar>
  )
}

export default Navigation;