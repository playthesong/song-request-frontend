import React from "react";
import styled from "styled-components";

const SongInput = ({
  maxLength,
  placeholder,
  name,
  onChange,
  value,
  defaultValue
}) => {
  return (
    <SongInputBox
      type="text"
      maxLength={maxLength}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      required
    />
  );
};

const SongInputBox = styled.input`
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: #27273e;
  opacity: 0.8;
  padding: 0.2rem 0.09rem 0.37rem 0.1rem;
  background-color: #fbfbfd;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:focus {
    &::placeholder {
      opacity: 0;
    }

    border-bottom: 1.5px solid rgba(230, 73, 128, 0.7);
  }

  &::placeholder {
    font-size: 1.2rem;
    opacity: 0.7;
  }
`;

export default SongInput;
