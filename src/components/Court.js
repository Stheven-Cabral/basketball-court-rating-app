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
  const { loading, error, data } = useQuery(COURT, {variables: { id }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  
  const { courtName, location, backboardMaterial, rimType, environment, court_reviews } = data.courts_by_pk;

  return (
    <div>
      <h3>
        {courtName} <Badge>{environment}</Badge>
      </h3>
      <h4>{location}</h4>
      <h5>{backboardMaterial}</h5>
      <h5>{rimType}</h5>
      <List>
        {court_reviews.map((review) => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default Court;