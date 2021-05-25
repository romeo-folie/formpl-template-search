import React from "react";
import SearchInput from "../search-input/search-input.component";
import {HeaderContainer, Sorters, SortLabel} from "./header.styles";
import Selector from "../selector/selector.component";

const Header: React.FC = (props) => {
  return (
    <HeaderContainer>
      <SearchInput />
      <Sorters>
        <SortLabel>Sort By:</SortLabel>
        <Selector />
        <Selector />
        <Selector />
      </Sorters>
    </HeaderContainer>
  );
};

export default Header;
