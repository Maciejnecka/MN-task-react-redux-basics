import styled from 'styled-components';

export const StyledCustomButtonLog = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  margin: ${({ $marginSize, theme }) =>
    $marginSize ? theme.margins[$marginSize] : '0'};
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  background: #8ba6d1;
  color: #fff;
  cursor: pointer;
  box-shadow: 8px 8px 15px #7a8baa, -8px -8px 15px #9cb2da,
    inset 5px 5px 10px #7a8baa, inset -5px -5px 10px #9cb2da;

  &:hover,
  &:focus {
    background: #9cb2da;
    box-shadow: 3px 3px 7px #7a8baa, -3px -3px 7px #9cb2da,
      inset 1px 1px 3px #7a8baa, inset -1px -1px 3px #9cb2da;
  }

  &:active {
    background: #7a8baa;
    box-shadow: inset 3px 3px 7px #7a8baa, inset -3px -3px 7px #9cb2da;
  }
`;
