import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PLink = styled.a`
  & > svg {
    transform: rotate(-90deg);
    margin-left: 5px;
  }
`;

export const Page = styled.span`
  border: 1px solid black;
  border-radius: 3px;
  padding: 2px 7px;
  margin-right: 5px;
`;

export const Total = styled(Page)`
  border: none;
  border-radius: none;
  margin-left: 2px;
`;