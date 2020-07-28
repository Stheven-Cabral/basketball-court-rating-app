import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import SearchForm from './SearchForm';
import Courts from './Courts';

const SEARCH = gql`
  query Search ($match: String) {
    basketball_courts(where: {courtName: {_ilike: $match}}, order_by: {courtName: asc}) {
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
  const [search, { loading, error, data }] = useLazyQuery(SEARCH);

  return(
    <div>
      <SearchForm 
        inputValue = {inputValue}
        onChange = {(e) => {setInputValue.target.value}}
        onSearch = {() => search({
          variables: {match: `%${inputValue}%`}
        })}
      />
      <Courts searchedPlanets = {data ? data.basketball_courts : null}/>
    </div>
  )
}

export default CourtsSearch;
