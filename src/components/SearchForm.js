import React, { Component } from 'react';
import {SearchBackground, Input, Button} from './shared/Form';

export default class SearchForm extends Component {


  render() {
    return(
      <SearchBackground>
        <Input type="text" id="search" name="search"/>
        <Button type="submit">Search</Button>
      </SearchBackground>
    )
  }
}

