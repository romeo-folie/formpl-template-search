import React, {useState} from "react";
import {
  Container,
  Label,
  Header,
  // Icon,
  ListContainer,
  List,
  ListItem,
} from "./selector.styles";
import {useDispatch} from "react-redux";
import {sortTemplates} from "../../redux/templates/template.actions";
// import {TemplateState} from "../../redux/templates/template.reducer";
// import Caret from "../../assets/caret.svg";

interface IProps {
  label: string;
  options: string[];
}

const Selector: React.FC<IProps> = ({label, options}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0] || null
  );

  // need to store state variables for every one of these selectors
  // then I also need to somehow be able to specifically fetch the right value for this
  // particular selector
  // interface IStateMap {
  //   "Alphabetical Order": string;
  //   "Date Created": string;
  //   "Category": string;
  // }

  // const labelStateMap: IStateMap = {
  //   "Alphabetical Order": "alphaOrder",
  //   "Date Created": "dateOrder",
  //   "Category": "category"
  // }

  // const selectedOption = useSelector<TemplateState, TemplateState[`${labelStateMap[label]}`]>((state) => state[labelStateMap[label]])

  // I know exactly what the labels are gonna be
  // based on the label
  // I can determine which state var to select and use as the selected Option

  const toggle = () => setIsOpen(!isOpen);

  const onOptionClick = (value: string): void => {
    setSelectedOption(value);
    setIsOpen(false);
    dispatch(sortTemplates({label, value}));
  };

  return (
    <Container onClick={toggle}>
      <Label>{label}</Label>
      <Header>
        {selectedOption || options[0]}
        {/* <Icon src={Caret} /> */}
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
