import React from "react";
import SearchInput from "../search-input/search-input.component";
import {HeaderContainer, Sorters, Label} from "./header.styles";
import Selector from "../selector/selector.component";

const categoryOptions = ["All", "Education", "E-commerce", "Health"];
const orderOptions = ["Default", "Ascending", "Descending"];

const Header: React.FC = (props) => {
  return (
    <HeaderContainer>
      <SearchInput />
      <Sorters>
        <Label>Sort By:</Label>
        <Selector label="Category" options={categoryOptions} />
        <Selector label="Alphabetical Order" options={orderOptions} />
        <Selector label="Date Created" options={orderOptions} />
      </Sorters>
    </HeaderContainer>
  );
};

export default Header;
