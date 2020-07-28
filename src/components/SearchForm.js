import React, { Component } from 'react';
import {SearchBackground, Input, Button} from './shared/Form';

const SearchForm = ({ inputValue, onChange, onSearch }) => {

  return(
    <SearchBackground>
      <Input value = {inputValue} onChange = {onChange} type="text" id="search" name="search"/>
      <Button onClick = {onSearch}>Search</Button>
    </SearchBackground>
  )
}

export default SearchForm;

