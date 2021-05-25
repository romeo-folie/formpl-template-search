import React from "react";
import SearchInput from "../search-input/search-input.component";
import {HeaderContainer, Sorters, Label} from "./header.styles";
import Selector from "../selector/selector.component";

const Header: React.FC = (props) => {
  return (
    <HeaderContainer>
      <SearchInput />
      <Sorters>
        <Label>Sort By:</Label>
        <Selector />
        <Selector />
        <Selector />
      </Sorters>
    </HeaderContainer>
  );
};

export default Header;
