import React from "react";
import {Container, Header, Title, Count, Grid} from "./template-list.styles";
import TemplateCard from "../template-card/template-card.component";

const TemplateList: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>All Templates</Title>
        <Count>2000 Templates</Count>
      </Header>
      <Grid>
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </Grid>
    </Container>
  );
};

export default TemplateList;
