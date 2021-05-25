import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  border: 0.5px solid #bdbdbd;
  border-radius: 2px;
  padding: 10px 12px;
  position: relative;
  font-size: 13px;
`;

export const Title = styled.div`
  position: absolute;
  top: -7px;
  left: 10px;
  font-size: 9px;
  z-index: 2;
  background: #fff;
  padding: 0 3px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img``;

export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  display: none;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 2px;
  cursor: pointer;
`;
