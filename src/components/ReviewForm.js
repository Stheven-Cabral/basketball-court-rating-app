import React from 'react';
import styled from "@emotion/styled";
import { TextArea, Button, ReviewBackground } from './shared/Form';

export const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`;

export const ReviewForm = ({ courtData, inputValue, onChange, onSubmit, buttonText }) => {
  
  const { courtName, location, backboardMaterial, rimType, environment, court_reviews } = courtData;

  return(
    <ReviewBackground>
      <div></div>
      <div>
        <h3 className="review-header">Add a Review.</h3>
        <TextArea value={inputValue} onChange={onChange} />
        <Button onClick={onSubmit}>{buttonText}</Button>
      </div>
    </ReviewBackground>
  )
};

