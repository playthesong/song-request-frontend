import React from "react";
import styled from "styled-components";

const CreatedDateTime = ({ createdDateTime }) => {
  return <StyledSpan>{createdDateTime}</StyledSpan>;
};

const StyledSpan = styled.span`
  margin-top: 1.2rem;
  font-size: 0.8rem;
  opacity: 0.6;
`;

export default CreatedDateTime;
