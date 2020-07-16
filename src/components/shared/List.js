import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0px 50px;
  margin: 0px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: block;
  padding: 25px 30px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-width: 0px;
  &:first-child {
    border-top-width: 1px;
  }
  &:first-child {
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