import React, { Component } from 'react';
import {SearchBackground, Input, Button} from './shared/SearchForm';

export default class Search extends Component {


  render() {
    return(
      <SearchBackground>
        <Input type="text" id="search" name="search"/>
        <Button type="submit">Search</Button>
      </SearchBackground>
    )
  }
}

