import React, { Component } from 'react';

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
