import React from "react";
import styled from "styled-components";

import AppBar from "../navigations/AppBar";

const HeaderWrapperStyle = styled.header``;
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapperStyle>
        <AppBar />
      </HeaderWrapperStyle>
    );
  }
}

export default Header;
