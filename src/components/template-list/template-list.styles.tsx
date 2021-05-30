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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  align-items: center;
  column-gap: 0;
  row-gap: 30px;
  margin: 30px auto 0;
`;
