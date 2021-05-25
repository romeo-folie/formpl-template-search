import React from "react";
import {Container, Icon} from "./alert.styles";
import Info from "../../assets/info-circle.svg";

const Alert: React.FC = (props) => {
  return (
    <Container>
      <Icon src={Info} alt="Info icon" />
      Tada! Get started with a free template. Can’t find what you are looking
      for? Search from the 1000+ available templates
    </Container>
  );
};

export default Alert;
