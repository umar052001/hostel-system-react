import styled from "styled-components";

export const NavbarHeading = styled.h1`
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  flex-wrap: wrap;
  margin: auto;
  font-weight: bold;
`;
export const NavbarContainer = styled.nav`
  display: flex;
  align-items: flex-end;
  //background-color: green;
`;
export const StyledButton = styled.button`
  background-color: black;
  color: antiquewhite;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    transform: scale(0.9);
    transition-duration: 0.5s;
  }
`;
