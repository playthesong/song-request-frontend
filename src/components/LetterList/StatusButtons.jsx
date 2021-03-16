import React from "react";
import styled from "styled-components";
import { LIST_TITLE } from "../../constants/letterStatus";

const StatusButtons = () => {
  return (
    <ButtonList>
      <Button>{LIST_TITLE.WAITING}</Button>
      <Button>{LIST_TITLE.PENDING}</Button>
      <Button>{LIST_TITLE.DONE}</Button>
    </ButtonList>
  );
};

const ButtonList = styled.ul``;

const Button = styled.li``;

export default StatusButtons;
