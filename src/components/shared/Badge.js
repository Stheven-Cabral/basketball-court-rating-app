// Styling for 'environment' data

import styled from "@emotion/styled";

export const Badge = styled.div`
  display: inline-block;
  margin: 0rem 1rem;
  padding: 0.25rem 0.75rem;
  background-color: grey;
  font-size: 1rem;
  color: white;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 0.5rem;
  background-color: maroon;
  @media (max-width: 450px) {
    font-size: 0.82rem;
    font-weight: 100;
  }
`;