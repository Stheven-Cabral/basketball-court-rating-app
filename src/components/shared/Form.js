import styled from '@emotion/styled';
import CourtImage from '../../assets/images/court.jpg';

export const SearchBackground = styled.div`
  background-image: url(${CourtImage});
  background-position: center;
  background-color: grey;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReviewBackground = styled.div`
  background-image: url(${CourtImage});
  background-position: center;
  background-color: grey;
  height: auto;
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 570px) {
    flex-direction: column;
    justify-content: center;
    padding: 0px;
  }
`;

export const Input = styled.input`
  display: block;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  height: 45px;
  width: 100%;
  max-width: 540px;
  background-color: #fff;
  border: 0px;
  font-size: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5rem;
  @media (max-width: 570px) {
    width: 75%;
  }
`;

export const Button = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 30px;
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
  width: 175px;
  border-radius: 0.25rem;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #008080;
  }
  &:active {
    background-color: #0062cc;
  }
  @media (max-width: 570px) {
    font-size: 1.3rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
    height: 45px;
    width: 150px;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  height: 100px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 0px;
  font-size: 1.3rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5rem;
`;