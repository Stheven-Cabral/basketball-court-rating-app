import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Badge } from './shared/Badge';
import { List, ListItem, Location } from './shared/List'; 

// In the case of GraphQL, the gql tag is used to surround GraphQL operation and schema language (which are represented as Strings or template literals), and makes it easier to differentiate from ordinary strings.
const COURTS = gql`
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

const Courts = (props) => {
  const { loading, error, data } = useQuery(COURTS);
  const searchedPlants = props.searchedPlanets;
  console.log(props);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const renderCourts = (courts) => {
    return courts.map(({id, courtName, location, environment}) => (

      <ListItem key={id}>
        <Link>
          {courtName}<Badge>{environment}</Badge>
          <Location className="location">{location}</Location>
        </Link>
      </ListItem>
    ));
  }

  return(
    <List>{renderCourts(searchedPlants || data.courts)}</List>
  )
}

export default Courts;