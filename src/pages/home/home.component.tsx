import React, {useEffect} from "react";
import {HomeContainer} from "./home.styles";
import Header from "../../components/header/header.component";
import Alert from "../../components/alert/alert.component";
import TemplateList from "../../components/template-list/template-list.component";
import Pagination from "../../components/pagination/pagination.component";
import {fetchTemplates} from "../../redux/templates/template.actions";
import {useDispatch} from "react-redux";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

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
