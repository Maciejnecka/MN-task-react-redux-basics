import styled from 'styled-components';

export const StyledButtonDelete = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  background: #e76f51;
  color: #fff;
  cursor: pointer;
  box-shadow: 8px 8px 15px #d85f4c, -8px -8px 15px #f0805f,
    inset 5px 5px 10px #d85f4c, inset -5px -5px 10px #f0805f;

  &:hover,
  &:focus {
    background: #f0805f;
    box-shadow: 5px 5px 10px #d85f4c, -5px -5px 10px #f0805f,
      inset 2px 2px 5px #d85f4c, inset -2px -2px 5px #f0805f;
  }

  &:active {
    background: #d85f4c;
    box-shadow: inset 5px 5px 10px #d85f4c, inset -5px -5px 10px #f0805f;
  }
`;
