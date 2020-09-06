import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Badge } from './shared/Badge';
import { List, ListItemWithLink, Name, Location } from './shared/List'; 

// `SEARCH_COURTS`  query string returns all courts in the database.
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


export const Courts = (props) => {
  const { loading, error, data } = useQuery(SEARCH_COURTS);
  const searchedCourts = props.searchedCourts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  /***
   * `renderCourts` function renders a list of courts or list of search courts.
   *  @param {object} courts - accepts an object containing data on courts from the database.
   */ 

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