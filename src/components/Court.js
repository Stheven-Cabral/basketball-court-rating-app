import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {List, ListItem} from './shared/List';
import {Badge} from './shared/Badge';

const COURT = gql`
  query Court($id: uuid!) {
    courts_by_pk(id: $id) {
      id
      courtName
      location
      backboardMaterial
      rimType
      environment
      court_reviews {
        id
        body
      }
    }
  }
`;

const Court = (props) => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(Court, {variables: { id }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
}

export default Court;