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
// import Caret from "../../assets/caret.svg";

interface IProps {
  label: string;
  options: string[];
}

const Selector: React.FC<IProps> = ({label, options}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0] || null
  );

  const toggle = () => setIsOpen(!isOpen);

  const onOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
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
