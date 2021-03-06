import styled from "styled-components";

export const Container = styled.div`
  min-height: 210px;
  min-width: 90%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 9px 1px hsla(0, 0%, 0%, 0.08);
  -moz-box-shadow: 0px 0px 9px 1px hsla(0, 0%, 0%, 0.08);
  box-shadow: 0px 0px 9px 1px hsla(0, 0%, 0%, 0.08);
`;

export const Upper = styled.div`
  width: 90%;
`;

export const Lower = styled.div`
  background-color: #f9f9f9;
  color: #08bd37;
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 20px;
`;

export const Desc = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-height: 1.6;
`;

export const TempLink = styled.a`
  width: 90%;
  margin: 0 auto;
`;
