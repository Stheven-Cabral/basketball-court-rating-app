import React from 'react';
import styled from "@emotion/styled";
import { TextArea, Button, ReviewBackground } from './shared/Form';
import {Badge} from './shared/Badge';

export const CourtInfo = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  border-right: 2px solid whitesmoke;
`;

export const ReviewFormSection = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-shadow: 2px 2px 5px #1f1f1f;
`;

export const ReviewForm = ({ courtData, inputValue, onChange, onSubmit, buttonText }) => {
  
  const { courtName, location, backboardMaterial, rimType, environment } = courtData;

  return(
    <ReviewBackground>
      <CourtInfo>
        <h3 className="court-info">
          {courtName} <Badge className="court-info">{environment}</Badge>
        </h3>
        <h4 className="court-info">{location}</h4>
        <h5 className="court-info" id="backboard">Backboard: {backboardMaterial}</h5>
        <h5 className="court-info" id="rimtype">Rim Type: {rimType}</h5>
      </CourtInfo>
      <ReviewFormSection>
        <h4 className="review-header">Add a Review</h4>
        <TextArea value={inputValue} onChange={onChange} />
        <Button onClick={onSubmit}>{buttonText}</Button>
      </ReviewFormSection>
    </ReviewBackground>
  )
};

