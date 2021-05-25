import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  border: 0.5px solid #bdbdbd;
  border-radius: 2px;
  width: 200px;
  padding: 5px 10px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 10px auto 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const Icon = styled.img`
  margin-left: 5px;
`;
