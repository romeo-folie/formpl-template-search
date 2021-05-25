import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-weight: 500;
`;

export const Count = styled.span``;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  align-items: center;
  /* row-gap: 20px; */
  grid-gap: 30px;
  margin-top: 30px;
`;
