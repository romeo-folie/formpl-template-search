import React from "react";
import {InputContainer, Input, Icon} from "./search-input.styles";
import Magnifier from "../../assets/search.svg";

const SearchInput: React.FC = (props) => {
  return (
    <InputContainer>
      <Input placeholder="Search Templates" />
      <Icon src={Magnifier} alt="search icon" />
    </InputContainer>
  );
};

export default SearchInput;
