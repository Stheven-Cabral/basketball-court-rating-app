import React from 'react';
import {SearchBackground, Input, Button} from './shared/Form';

const SearchForm = ({ inputValue, onChange, onSearch }) => {

  return(
    <Form>
      <SearchBackground>
        <h3 className="search-header">Find your next court.</h3>
        <Input value = {inputValue} onChange = {onChange} type="text" id="search" name="search"/>
        <Button onClick = {onSearch}>Search</Button>
        <Button>New Court</Button>
      </SearchBackground>
    </Form>
  )
}

export default SearchForm;

