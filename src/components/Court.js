import React, { useState } from 'react';
import {useSubscription, useMutation, gql} from '@apollo/client';
import {List, ListItem} from './shared/List';
import {ReviewForm} from './ReviewForm';

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
  const [errorMessage, setErrorMessage] = useState('');  
  const { loading, error, data } = useSubscription(COURT, {variables: { id }});
  const [addReview] = useMutation(ADD_REVIEW);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const court_reviews  = data.courts_by_pk.court_reviews;
  console.log(court_reviews);
  
  return (
    <div>
      <ReviewForm 
        courtData = {data.courts_by_pk}
        inputValue = {inputValue}
        onChange = {(e) => {setInputValue(e.target.value)}}
        onSubmit = {() => {
          addReview({ variables: { id: id, body: inputValue } })
            .then(() => setInputValue(""), setErrorMessage(""))
            .catch((e) => {
              setErrorMessage(e.message);
          });
        }}
        buttonText = "Submit"
      />
      {errorMessage.length ? <h6 className="error-message">Error: {errorMessage}</h6> : <hr />}
      <h4 className="reviews-header">Community Reviews</h4>
      <List>
        {court_reviews.map((review) => (
          <ListItem key={review.id}>
            <h6>Review Date: {review.created_at}</h6>
            <div>{review.body}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Court;