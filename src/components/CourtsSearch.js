import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import SearchForm from './SearchForm';
import Courts from './Courts';

const SEARCH = gql``;

const CourtsSearch = () => {
  const [inputValue, setInputValue] = useState('');

  return(
    <div>
      <SearchForm />
      <Courts />
    </div>
  )
}

export default CourtsSearch;
