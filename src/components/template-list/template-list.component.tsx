import React from "react";
import {Container, Header, Title, Count, Grid} from "./template-list.styles";
import TemplateCard from "../template-card/template-card.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import {TemplateState} from "../../redux/templates/template.reducer";
import {useSelector} from "react-redux";

const TemplateList: React.FC = () => {
  const GridWithSpinner = WithSpinner(Grid);

  const templates = useSelector<
    TemplateState,
    TemplateState["filteredTemplates"]
  >((state) => state.filteredTemplates);

  const templateCount = useSelector<TemplateState, TemplateState["totalCount"]>(
    (state) => state.totalCount
  );

  return (
    <Container>
      <Header>
        <Title>All Templates</Title>
        <Count>{templateCount} Templates</Count>
      </Header>
      <GridWithSpinner>
        {templates.map((temp) => (
          <TemplateCard {...temp} key={temp.name} />
        ))}
      </GridWithSpinner>
    </Container>
  );
};

export default TemplateList;
