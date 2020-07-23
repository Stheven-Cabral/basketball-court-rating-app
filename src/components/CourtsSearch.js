import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Courts from './Courts';

export default class CourtsSearch extends Component {
  state = {
    inputValue: ''
  }

  render() {
    return(
      <div>
        <SearchForm />
        <Courts />
      </div>
    )
  }
}
