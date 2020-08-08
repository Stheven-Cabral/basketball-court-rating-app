import React, { useState } from 'react';
import {useSubscription, useMutation, gql} from '@apollo/client';
import {List, ListItem} from './shared/List';
import {Badge} from './shared/Badge';
import {ReviewForm} from './shared/ReviewForm';

const COURT = gql`
  subscription Court($id: uuid!) {
    courts_by_pk(id: $id) {
      id
      courtName
      location
      backboardMaterial
      rimType
      environment
      court_reviews(order_by: {created_at: desc}) {
        id
        body
        created_at
      }
    }
  }
`;

const ADD_REVIEW = gql`
  mutation MyMutation ($body: String!, $id: uuid!) {
    AddReview(body: $body, id: $id) {
      affected_rows
    }
  }
`;

const Court = (props) => {
  const id = props.match.params.id;
  const [inputValue, setInputValue] = useState('');  
  const { loading, error, data } = useSubscription(COURT, {variables: { id }});
  const [addReview] = useMutation(ADD_REVIEW);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  
  const { courtName, location, backboardMaterial, rimType, environment, court_reviews } = data.courts_by_pk;

  return (
    <div>
      <ReviewForm 
        inputValue = {inputValue}
        onChange = {(e) => {setInputValue(e.target.value)}}
        onSearch = {() => {
          addReview({ variables: { id: id, body: inputValue } })
            .then(() => setInputValue(""))
            .catch((e) => {
              setInputValue(e.message);
          });
        }}
        buttonText = "Submit"
      />
      <List>
        <h3>
          {courtName} <Badge>{environment}</Badge>
        </h3>
        <h4>{location}</h4>
        <h5>{backboardMaterial}</h5>
        <h5>{rimType}</h5>
        {court_reviews.map((review) => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default Court;