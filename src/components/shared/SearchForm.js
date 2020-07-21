import styled from '@emotion/styled';
import CourtImage from '../../assets/images/court.jpg';

export const SearchBackground = styled.div`
  background-image: url(${CourtImage});
  background-color: grey;
  height: 600px;
`;

export const Input = styled.input`
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
  height: 40px;
  width: 100%;
  max-width: 600px;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  display: block;
  background-color: #fff;
  border: 1px solid #ced4da;
`;

export const Button = styled.button`
  margin: auto;
  color: #fff;
  background-color: #750000;
  border-color: #007bff;
  display: block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  height: 50px;
  border-radius: 0.25rem;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #008080;
    border-color: black;
  }
  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;