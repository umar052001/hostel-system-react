import styled from "styled-components";

export const CardDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  margin: 2%;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px 16px;
`;
