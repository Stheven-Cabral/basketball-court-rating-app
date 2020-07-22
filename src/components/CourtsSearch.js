import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Courts from './components/Courts';

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
