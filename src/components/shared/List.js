import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  padding-left: 0px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 100%;
  background-color: #fafafa;
  display: block;
  padding: 50px 75px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  color: black;
`;

export const Location = styled.p`
  margin: 0px;
  font-size: 1rem;
`;

export const ListItemWithLink = styled.li`
  width: 30%;
  min-width: 400px;
  margin: 10px 5px;
  overflow: auto;
  display: block;
  border: 1px solid maroon;
  border-radius: 0.25rem;
  text-align: center;
  > a {
    display: block;
    padding: 2rem 2rem;
    text-decoration: none;
    color: black;
    &:hover {
      color: #fff;
      background-color: #bababa;
      border-color: #bababa;
      cursor: pointer;
    }
  }
  @media (max-width: 450px) {
    width: 80%;
    min-width: 100px;
  }
`;

