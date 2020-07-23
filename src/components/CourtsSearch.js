import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Courts from './Courts';

const SEARCH = gql``;

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
