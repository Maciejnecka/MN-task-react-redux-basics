import styled from 'styled-components';

const StyledCustomInput = styled.input`
  width: 100%;
  height: 45px;
  border: 2px solid #b0c4de;
  padding: 0 10px;
  margin: 5px 0;
  outline: none;
  border-radius: 6px;
  text-align: center;
  letter-spacing: 1px;
  color: #011622;
  font-size: 16px;
  background-color: #e6f1f5;
  box-shadow: inset 4px 4px 6px #a0b1c3, inset -4px -4px 6px #f0ffff;
  transition: border-color 0.3s ease;

  &:focus {
    border: 2px solid #8ba6d1;
    box-shadow: inset 2px 2px 4px #a0b1c3, inset -2px -2px 4px #f0ffff;
  }
`;

export default StyledCustomInput;
