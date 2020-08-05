import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0px 50px;
  margin: auto;
  margin-top: 100px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: block;
  padding: 25px 30px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-width: 0px;
  &:first-of-type {
    border-top-width: 1px;
  }
  &:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  color: black;
  list-style-type: none;
`;

export const Location = styled.p`
  margin: 0px;
  font-size: 1rem;
`;

export const ListItemWithLink = styled.li`
  display: block;
  > a {
    display: block;
    background-color: #fff;
    padding: 3rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-top-width: 0;
    &:hover {
      color: #fff;
      background-color: #bababa;
      border-color: #bababa;
      cursor: pointer;
    }
  }
  &:first-of-type {
    a {
      border-top-width: 1px;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  }
  &:last-of-type {
    a {
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  }

`;