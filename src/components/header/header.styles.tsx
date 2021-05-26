import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 180px;
  }
`;

export const Sorters = styled.div`
  display: flex;
  align-items: center;
  /* flex-wrap: wrap;
  justify-content: center; */
  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

export const Label = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
