import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff4ea;
  min-height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    padding: 12px;
  }
`;

export const Icon = styled.img`
  margin-right: 15px;
`;
