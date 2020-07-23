import React, { Component } from 'react';
import {SearchBackground, Input, Button} from './shared/Form';

export default class SearchForm extends Component {


  render() {
    return(
      <SearchBackground>
        <Input value = {this.props.inputValue} onChange = {this.props.onChange} type="text" id="search" name="search"/>
        <Button onClick={this.props.onSearch} type="submit">Search</Button>
      </SearchBackground>
    )
  }
}

