import React from "react";
import {HomeContainer} from "./home.styles";
import Header from "../../components/header/header.component";
import Alert from "../../components/alert/alert.component";
import TemplateList from "../../components/template-list/template-list.components";
import Pagination from "../../components/pagination/pagination.component";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Alert />
      <TemplateList />
      <Pagination />
    </HomeContainer>
  );
};

export default Home;
