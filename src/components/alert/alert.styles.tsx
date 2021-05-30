import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: #fff4ea;
  min-height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    padding: 10px;
    font-size: 0.9em;
  }
`;

export const Icon = styled.img`
  margin-right: 15px;
`;
