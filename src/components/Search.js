import React, { Component } from 'react';
// import styled from '@motion/styled';
// import {Input, Button} from './shared/Form';

export default class Search extends Component {


  render() {
    return(
      <React.Fragment>
        <input type="text" id="search" name="search"/>
        <button type="submit">Search</button>
      </React.Fragment>
    )
  }
}

