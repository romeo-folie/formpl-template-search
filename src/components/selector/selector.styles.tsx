import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  border: 0.5px solid #bdbdbd;
  border-radius: 2px;
  padding: 10px 12px;
  position: relative;
  font-size: 13px;

  /* @media screen and (max-width: 600px) {
    width: 100%;
  } */
`;

export const Label = styled.div`
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
  align-items: center;
`;

export const Icon = styled.img`
  pointer-events: none;
  -webkit-tap-highlight-color: transparent;
`;

export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 40px;
  background-color: #fff;
  z-index: 50;
  left: 0;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(229, 229, 229, 0.86);
  -moz-box-shadow: 0px 0px 5px 1px rgba(229, 229, 229, 0.86);
  box-shadow: 0px 0px 5px 1px rgba(229, 229, 229, 0.86);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

export const ListItem = styled.li<{active: boolean}>`
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${({active}) => (active ? "#e5e5e5" : "#ffffff")};
  &:not(:last-child) {
    margin-bottom: 2px;
  }
  &:hover {
    color: #08bd37;
  }
`;
