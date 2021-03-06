import React, { useState } from 'react';
import {useMutation, gql} from '@apollo/client';
import styled from '@emotion/styled';
import CourtImage from '../assets/images/court.jpg';
import { Button } from './shared/Form';

const Background = styled.div`
  background-image: url(${CourtImage});
  background-position: center;
  background-repeat: repeat-y;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 125px;
  background-color: white;
  width: 500px;
  height: auto;
  border: 1px solid maroon;
  border-radius: 1rem;
  @media (max-width: 570px) {
    width: 90%;
    font-size: .75em;
    margin-top: 20px;
  }
`;

const Intro = styled.h3`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 0px;
  color: white;
  font-weight: 100;
  @media (max-width: 570px) {
    font-size: .80em;
    margin-top: 25px;
  }
`;

// `ADD_COURT` mutation adds a court to the database when the add court form is submitted.
const ADD_COURT = gql`
  mutation MyMutation ($courtName: String!, $location: String!, $backboardMaterial: String!, $rimType: String!, $environment: String!) {
    AddCourt(courtName: $courtName, location: $location, backboardMaterial: $backboardMaterial, rimType: $rimType, environment: $environment) {
      affected_rows
    }
  }
`;

const AddCourt = () => {
  const [addCourt] = useMutation(ADD_COURT);
  const [nameValue, setNameValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [backboardValue, setBackboardValue] = useState('');
  const [rimValue, setRimValue] = useState('');
  const [environmentValue, setEnvironmentValue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState([]); 

  // `handleReset` function resets 'input' and 'select' elements.
  function handleReset () {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      )
      Array.from(document.querySelectorAll("select")).forEach(
        input => (input.value = "")
      )
  };

  return(
    <Background>
      <Intro>Add where you play</Intro>
      <div className="clearfix"></div>
      <Form className="court-add" 
        onSubmit = {(event) => {
          // On submit, the `addCourt` mmutation is called.
          event.preventDefault();
          setErrorMessage([]); 
          addCourt({ variables: {
            courtName: nameValue,
            location: locationValue,
            backboardMaterial: backboardValue,
            rimType: rimValue,
            environment: environmentValue
          }})
          // The following code resets state properties for input and select form fields and sets the `successMessage` state property when no errors occur.
          .then(() => {
            handleReset();
            setNameValue("");
            setLocationValue("");
            setBackboardValue("");
            setRimValue("");
            setEnvironmentValue("");
            if (!errorMessage.length) {
              setSuccessMessage("Court Added");
            }
          })
          // Sets the `successMessage` state property when errors occur.
          .catch((e) => {
            setErrorMessage([e.message]);
          });
      }}>
        <label htmlFor="court-name">Court Name:</label>
        <input name="court-name" onChange={(e) => setNameValue(e.target.value)}/>
        
        <label htmlFor="location">Location:</label>
        <input name="location" onChange={(e) => setLocationValue(e.target.value)}/>
        
        <label htmlFor="backboard-material">Backboard Material:</label>
        <select name="backboard-material" id="backboard-material" onChange={(e) => setBackboardValue(e.target.value)}>
          <option></option>
          <option value="acrylic">acrylic</option>
          <option value="aluminum">aluminum</option>
          <option value="fiberglass">fiberglass</option>
          <option value="steel">steel</option>
          <option value="tempered glass">tempered glass</option>
          <option value="wood">wood</option>
        </select>
        
        <label htmlFor="rim-type">Rim Type:</label>
        <select name="rim-type" id="rim-type" onChange={(e) => setRimValue(e.target.value)}>
          <option></option>
          <option value="Breakaway Single Rim">Breakaway Single Rim</option>
          <option value="Fixed Single Rim">Fixed Single Rim</option>
          <option value="Breakaway Double Rim">Breakaway Double Rim</option>
          <option value="Fixed Double Rim">Fixed Double Rim</option>
        </select>
        
        <label htmlFor="environment">Environment:</label>
        <select name="environment" id="environment" onChange={(e) => setEnvironmentValue(e.target.value)}>
          <option></option>
          <option value="indoor">indoor</option>
          <option value="outdoor">outdoor</option>
        </select>
        {errorMessage.length ? <h6 className="error-message">Error: {errorMessage}</h6> : <h6 className="success-message">{successMessage}</h6>}
        <Button className="addcourt-button">Submit</Button>
      </Form>
    </Background>
  )
}

export default AddCourt;