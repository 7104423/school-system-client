import styled from "styled-components";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const StyledWholePageLoader = styled.div`
  display: flex,
  justify-content: center,
  align-items: center,
  width: 100%,
  height: 100vh
`;

export const WholePageLoader = () => (
  <StyledWholePageLoader>
    <HalfMalf center text={"Loading ..."} width="150px" height="150px" />
  </StyledWholePageLoader>
);

