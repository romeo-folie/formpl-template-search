import React, {useState} from "react";
import {
  Container,
  Label,
  Header,
  ListContainer,
  List,
  ListItem,
} from "./selector.styles";
import {useDispatch, useSelector} from "react-redux";
import {sortTemplates} from "../../redux/templates/template.actions";
import {
  TemplateState,
  ISorterKeys,
} from "../../redux/templates/template.reducer";

interface IProps {
  label: string;
  options: string[];
}

const labelStateMap: ISorterKeys = {
  "Alphabetical Order": "alphaOrder",
  Category: "category",
  "Date Created": "dateOrder",
};

const Selector: React.FC<IProps> = ({label, options}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  const selectedOption = useSelector<TemplateState, string>(
    (state) => state.sorters[labelStateMap[label]]
  );

  const onOptionClick = (value: string): void => {
    setIsOpen(false);
    dispatch(sortTemplates({label, value}));
  };

  return (
    <Container onClick={toggle}>
      <Label>{label}</Label>
      <Header>
        {selectedOption || options[0]}
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#8F8B8B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Header>
      {isOpen && (
        <ListContainer>
          <List>
            {options.map((option) => (
              <ListItem
                onClick={() => onOptionClick(option)}
                key={option.toLowerCase()}
                active={selectedOption === option}
              >
                {option}
              </ListItem>
            ))}
          </List>
        </ListContainer>
      )}
    </Container>
  );
};

export default Selector;
