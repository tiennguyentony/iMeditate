import React from "react";
import styled from "styled-components";

import { NavLink } from "style/style";

const HeaderContainer = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const LogoText = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: white;
  margin-left: 2rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoText>
        <NavLink to="/">iMeditate</NavLink>
      </LogoText>
    </HeaderContainer>
  );
}

export default Header;
