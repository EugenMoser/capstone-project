import styled from "styled-components";
//import { css } from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  width: 100vw;
  height: 70px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-weight: 700;
`;

export { StyledHeader, StyledH1 };
