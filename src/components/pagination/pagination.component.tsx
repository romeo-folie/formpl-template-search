import React from "react";
import {Container, PLink, Page, Total} from "./pagination.styles";
import {loadNewPage} from "../../redux/templates/template.actions";
import {useSelector, useDispatch} from "react-redux";
import {TemplateState} from "../../redux/templates/template.reducer";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector<TemplateState, TemplateState["isFetching"]>(
    (state) => state.isFetching
  );

  const totalPages = useSelector<TemplateState, TemplateState["totalPages"]>(
    (state) => state.totalPages
  );

  const currentPage = useSelector<TemplateState, TemplateState["currentPage"]>(
    (state) => state.currentPage
  );

  const onNextClick = () => {
    dispatch(loadNewPage(1));
  };

  const onPreviousClick = () => {
    dispatch(loadNewPage(-1));
  };

  return !isLoading ? (
    <Container>
      <PLink onClick={onPreviousClick} disabled={currentPage === 1}>Previous</PLink>

      <PLink>
        <Page>{currentPage}</Page>
        of
        <Total>{totalPages}</Total>
      </PLink>

      <PLink onClick={onNextClick} disabled={currentPage === totalPages}>
        Next
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#8F8B8B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </PLink>
    </Container>
  ) : null;
};

export default Pagination;
