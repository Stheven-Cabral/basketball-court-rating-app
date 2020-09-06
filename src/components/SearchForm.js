import React from 'react';
import { useHistory } from 'react-router-dom';
import {SearchBackground, Input, Button} from './shared/Form';

const SearchForm = (props) => {
  const inputValue = props.inputValue;
  const onChange = props.onChange;
  const onSearch = props.onSearch;
  let history = useHistory();

  // `newCourt` function redirects to the '/courts/new' endpoint.
  function newCourt() {
    history.push('courts/new');
  }
  return(
    <SearchBackground>
      <h3 className="search-header">Find your next court</h3>
      <Input value = {inputValue} onChange = {onChange} type="text" id="search" name="search"/>
      <div className="buttons">
        <Button onClick = {onSearch}>Search</Button>
        <Button onClick = {newCourt}>New Court</Button>
      </div>
    </SearchBackground>
  )
}

export default SearchForm;

