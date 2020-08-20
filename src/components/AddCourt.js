import React from 'react';
import styled from '@emotion/styled';
import CourtImage from '../assets/images/court.jpg';

const Background = styled.div`
  background-image: url(${CourtImage});
  height: 100vh;
  width: 100vw;
`;

const Form = styled.form`
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
        <div>
          <input />
          <input />
          <input />
          <input />
          <select name="environment" id="environment-type">
            <option value="indoor">indoor</option>
            <option value="outdoor">outdoor</option>
          </select>
          <input type="submit" value="Submit" />
        </div>
      </Form>
    </Background>
  )
}

export default AddCourt;