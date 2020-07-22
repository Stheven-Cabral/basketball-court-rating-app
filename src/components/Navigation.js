import React from 'react';
import styled from '@emotion/styled';

const NavBar = styled.div`
  height: 70px;
  background-color: maroon;
`;

const NavLogo = styled.h3`
  display: inline-block;
  line-height: 70px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin: 0px 10px;
  vertical-align: middle;
  color: white;
  letter-spacing: 2px;
`;

const Navigation = () => {
  return (
    <NavBar>
      <NavLogo>HoopUp</NavLogo>
    </NavBar>
  )
}

export default Navigation;