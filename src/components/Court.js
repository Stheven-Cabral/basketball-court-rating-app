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

  const { court_reviews } = data.courts_by_pk;
  
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
      <List>
        {court_reviews.map((review) => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default Court;