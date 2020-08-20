import React from 'react';
import styled from '@emotion/styled';
import CourtImage from '../assets/images/court.jpg';

const Background = styled.div`
  background-image: url(${CourtImage});
  height: 100vh;
  width: 100vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  background-color: white;
  width: 500px;
  height: 600px;
  border: 1px solid maroon;
  border-radius: 1rem;
`;

// courtName
// location
// backboardMaterial
// rimType
// environment

const AddCourt = () => {
  return(
    <Background>
      <div className="clearfix"></div>
      <Form>
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
        <input type="submit" value="Submit" />
      </Form>
    </Background>
  )
}

export default AddCourt;