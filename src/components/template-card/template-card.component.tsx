import React from "react";
import {
  Container,
  Upper,
  Lower,
  Title,
  Desc,
  TempLink,
} from "./template-card.styles";
import { ITemplate } from '../../redux/templates/template.reducer'

const TemplateCard: React.FC<ITemplate> = ({ name, description }) => {
  return (
    <Container>
      <Upper>
        <Title>{name}</Title>
        <Desc>
          {description}
        </Desc>
      </Upper>
      <Lower>
        <TempLink>Use Template</TempLink>
      </Lower>
    </Container>
  );
};

export default TemplateCard;
