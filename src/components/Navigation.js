import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  height: 90px;
  background-color: marshmellow;
  text-align: center;
`;


const Navigation = () => {
  return (
    <NavBar>
      <Link className="navlogo" to="/">HoopUp</Link>
    </NavBar>
  )
}

export default Navigation;