import React from "react";
import {
  Container,
  Upper,
  Lower,
  Title,
  Desc,
  TempLink,
} from "./template-card.styles";

const TemplateCard: React.FC = (props) => {
  return (
    <Container>
      <Upper>
        <Title>Alumni Membership Form Template</Title>
        <Desc>
          Engage your alumni network better with this alumni registration form
          template. Embed this in your website. Engage your alumni network
          better with this alumni registration form template. Embed this in your
          website. Embed this in your website.
        </Desc>
      </Upper>
      <Lower>
        <TempLink>Use Template</TempLink>
      </Lower>
    </Container>
  );
};

export default TemplateCard;
