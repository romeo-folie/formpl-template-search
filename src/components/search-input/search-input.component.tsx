import React, {ChangeEvent, useState} from "react";
import {InputContainer, Input, Icon} from "./search-input.styles";
import Magnifier from "../../assets/search.svg";
import {useDispatch} from "react-redux";
import {searchTemplates} from "../../redux/templates/template.actions";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
    dispatch(searchTemplates(event.target.value));
  };

  return (
    <InputContainer>
      <Input
        placeholder="Search Templates"
        value={searchValue}
        onChange={onChange}
      />
      <Icon src={Magnifier} alt="search icon" />
    </InputContainer>
  );
};

export default SearchInput;
