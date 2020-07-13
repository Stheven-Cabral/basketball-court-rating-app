import React from 'react';
import { useQuery, gql } from '@apollo/client';

const COURTS = gql``;

export default function Courts() {
  const { loading, error, data } = useQuery(COURTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.basketball_courts.map(({id, courtName, location, backboardMaterial, rimType, indoor}) => {
    <div key={id}>
      <p>
        {courtName} | {location} | {backboardMaterial} | {rimType} | {indoor}
      </p>
    </div>
  });
}