import React from "react";
import {
  Container,
  Title,
  Header,
  Icon,
  ListContainer,
  List,
  ListItem,
} from "./selector.styles";
import Caret from "../../assets/caret.svg";

const Selector: React.FC = (props) => {
  return (
    <Container>
      <Title>Category</Title>
      <Header>
        All
        <Icon src={Caret} />
      </Header>
      <ListContainer>
        <List>
          <ListItem>Some</ListItem>
          <ListItem>Some other</ListItem>
          <ListItem>Some other other</ListItem>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Selector;
