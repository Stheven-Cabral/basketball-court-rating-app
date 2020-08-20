import React from 'react';
import styled from "@emotion/styled";
import { Input, Button, ReviewBackground } from './shared/Form';

export const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`;

export const ReviewForm = ({ inputValue, onChange, onSearch, buttonText }) => {
  return(
    <ReviewBackground>
      <Input value={inputValue} onChange={onChange} />
      <Button onClick={onSearch}>{buttonText}</Button>
    </ReviewBackground>
  )
};

