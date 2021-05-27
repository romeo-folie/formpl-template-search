import React, {useEffect} from "react";
import {HomeContainer} from "./home.styles";
import Header from "../../components/header/header.component";
import Alert from "../../components/alert/alert.component";
import TemplateList from "../../components/template-list/template-list.components";
import Pagination from "../../components/pagination/pagination.component";
import {useSelector, useDispatch} from "react-redux";
import {fetchTemplatesAsync} from "../../redux/templates/template.actions";
import {TemplateState} from "../../redux/templates/template.reducer";

const Home: React.FC = () => {
  const templates = useSelector<TemplateState, TemplateState["templates"]>(
    (state) => state.templates
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplatesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
