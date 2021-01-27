import React from "react";
import styled from "styled-components";
import realpiano_logo from "../../assets/realpiano_logo_white.jpg";

const HeaderTitle = () => {
  return (
    <HeaderTitleBlock>
      <img src={realpiano_logo} alt="REALPIANO" />
      <h2>REALPIANO</h2>
    </HeaderTitleBlock>
  );
};

const HeaderTitleBlock = styled.div``;

export default HeaderTitle;
