import React from "react";
import {Container, PLink, Page, Total} from "./pagination.styles";

const Pagination: React.FC = () => {
  return (
    <Container>
      <PLink>Previous</PLink>

      <PLink>
        <Page>1</Page>
        of
        <Total>24</Total>
      </PLink>

      <PLink>
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
  );
};

export default Pagination;
