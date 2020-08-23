import React, { useState } from 'react';
import {useMutation, gql} from '@apollo/client';
import styled from '@emotion/styled';
import CourtImage from '../assets/images/court.jpg';
import { Button } from './shared/Form';

const Background = styled.div`
  background-image: url(${CourtImage});
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 35px;
  background-color: white;
  width: 500px;
  height: auto;
  border: 1px solid maroon;
  border-radius: 1rem;
`;

const Intro = styled.h3`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 0px;
  color: white;
  font-weight: 100;
  `;

const ADD_COURT = gql`
  mutation MyMutation($courtName: String!, $location: String!, $backboardMaterial: String!, $rimType: String!, $environment: String!) {
    insert_courts(objects: {courtName: $courtName, location: $location, backboardMaterial: $backboardMaterial, rimType: $rimType, environment: $environment}) {
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

  return(
    <Background>
      <Intro>Add where you play..</Intro>
      <div className="clearfix"></div>
      <Form className="court-add">
        <label for="court-name">Court Name:</label>
        <input name="court-name"/>
        <label for="location">Location:</label>
        <input name="location"/>
        <label for="backboard-material">Backboard Material:</label>
        <select name="backboard-material" id="backboard-material">
          <option></option>
          <option value="acrylic">acrylic</option>
          <option value="aluminum">aluminum</option>
          <option value="fiberglass">fiberglass</option>
          <option value="steel">steel</option>
          <option value="tempered glass">tempered glass</option>
          <option value="wood">wood</option>
        </select>
        <label for="rim-type">Rim Type:</label>
        <select name="rim-type" id="rim-type">
          <option></option>
          <option value="Breakaway Single Rim">Breakaway Single Rim</option>
          <option value="Fixed Single Rim">Fixed Single Rim</option>
          <option value="Breakaway Double Rim">Breakaway Double Rim</option>
          <option value="Fixed Double Rim">Fixed Double Rim</option>
        </select>
        <label for="environment">Environment:</label>
        <select name="environment" id="environment">
          <option></option>
          <option value="indoor">indoor</option>
          <option value="outdoor">outdoor</option>
        </select>
        <Button className="addcourt-button">Submit</Button>
      </Form>
    </Background>
  )

  change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }
}

export default AddCourt;