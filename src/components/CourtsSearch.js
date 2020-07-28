import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import SearchForm from './SearchForm';
import Courts from './Courts';

const SEARCH = gql`
  query Search ($match: String) {
    courts(where: {courtName: {_ilike: $match}}, order_by: {courtName: asc}) {
      id
      courtName
      location
      environment
      backboardMaterial
      rimType
    }
  }
`;

const CourtsSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [search, { data }] = useLazyQuery(SEARCH);

  return(
    <div>
      <SearchForm 
        inputValue = {inputValue}
        onChange = {(e) => {setInputValue(e.target.value)}}
        onSearch = {() => search({
          variables: {match: `%${inputValue}%`}
        })}
      />
      <Courts searchedPlanets = {data ? data.courts : null}/>
    </div>
  )
}

export default CourtsSearch;
