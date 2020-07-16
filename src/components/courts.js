import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Badge } from './shared/Badge';
import { List, ListItem } from './shared/List'; 

// In the case of GraphQL, the gql tag is used to surround GraphQL operation and schema language (which are represented as Strings or template literals), and makes it easier to differentiate from ordinary strings.
const COURTS = gql`
  {
    basketball_courts {
      id
      courtName
      location
      backboardMaterial
      rimType
      environment
    }
  }
`;

export default function Courts() {
  const { loading, error, data } = useQuery(COURTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <List>
      {data.basketball_courts.map(({id, courtName, location, environment}) => (
        <ListItem key={id}>
          {courtName}<Badge>{environment}</Badge>
          <p className="location">{location}</p>
        </ListItem>
      ))}
    </List>
  )
}
