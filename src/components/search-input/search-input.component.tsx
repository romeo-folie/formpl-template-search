import React, {ChangeEvent} from "react";
import {InputContainer, Input, Icon} from "./search-input.styles";
import Magnifier from "../../assets/search.svg";
import {useDispatch, useSelector} from "react-redux";
import {searchTemplates} from "../../redux/templates/template.actions";
import {TemplateState} from "../../redux/templates/template.reducer";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector<TemplateState, TemplateState["searchValue"]>(
    (state) => state.searchValue
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
