import React from "react";
import {HomeContainer} from "./home.styles";
import Header from "../../components/header/header.component";
import Alert from "../../components/alert/alert.component";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Alert />
    </HomeContainer>
  );
};

export default Home;
