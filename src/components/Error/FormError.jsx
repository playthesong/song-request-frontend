import React from "react";
import styled from "styled-components";

const FormError = ({ errorMessage }) => {
  return <FormErrorMessage>{errorMessage}</FormErrorMessage>;
};

const FormErrorMessage = styled.p`
  display: block;
  position: absolute;
  width: 28.5rem;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #ffa8a8;
`;

export default FormError;
