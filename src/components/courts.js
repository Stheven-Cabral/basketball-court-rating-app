import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Badge } from './shared/Badge';
import { List, ListItemWithLink, Name, Location } from './shared/List'; 

// In the case of GraphQL, the gql tag is used to surround GraphQL operation and schema language (which are represented as Strings or template literals), and makes it easier to differentiate from ordinary strings.
const SEARCH_COURTS = gql`
  {
    courts {
      id
      courtName
      location
      backboardMaterial
      rimType
      environment
    }
  }
`;

// List of Courts data
export const Courts = (props) => {
  const { loading, error, data } = useQuery(SEARCH_COURTS);
  const searchedCourts = props.searchedCourts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const renderCourts = (courts) => {
    return courts.map(({id, courtName, location, environment}) => (

      <ListItemWithLink key={id} className="ListItem">
        <Link to={`/court/${id}`}>
          <Name>{courtName}</Name>
          <Location className="location">{location}</Location>
          <Badge>{environment}</Badge>
        </Link>
      </ListItemWithLink>
    ));
  }

  return(
    <List>{renderCourts(searchedCourts || data.courts)}</List>
  )
}