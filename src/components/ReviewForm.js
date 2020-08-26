import React from 'react';
import styled from "@emotion/styled";
import { TextArea, Button, ReviewBackground } from './shared/Form';
import {Badge} from './shared/Badge';

export const CourtInfo = styled.div`
  display: flex;
  flex-direction: column;
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
        <h5 className="court-info">{backboardMaterial}</h5>
        <h5 className="court-info">{rimType}</h5>
      </CourtInfo>
      <div>
        <h3 className="review-header">Add a Review.</h3>
        <TextArea value={inputValue} onChange={onChange} />
        <Button onClick={onSubmit}>{buttonText}</Button>
      </div>
    </ReviewBackground>
  )
};

