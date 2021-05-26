import React, {useState} from "react";
import {
  Container,
  Label,
  Header,
  Icon,
  ListContainer,
  List,
  ListItem,
} from "./selector.styles";
import Caret from "../../assets/caret.svg";

interface IProps {
  label: string;
  options: string[];
}

const Selector: React.FC<IProps> = ({label, options}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
        <Icon src={Caret} />
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
