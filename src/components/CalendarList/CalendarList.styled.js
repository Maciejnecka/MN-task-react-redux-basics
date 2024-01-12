import styled from 'styled-components';

export const StyledCalendarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 90%;
  border-radius: 6px;
  background: linear-gradient(45deg, #bbd3f0, #95d4e1);
  box-shadow: 6px 6px 15px #a0b1c3, -6px -6px 15px #d0e4ff;

  .calendar__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    color: #011622;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 4px;
    background-color: #f0f4f8;
    box-shadow: 2px 2px 5px #a0b1c3, -2px -2px 5px #d0e4ff;
  }

  .calendar__date,
  .calendar__time,
  .calendar__arrow {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    padding: 5px;
    border-radius: 4px;
    background-color: #e3eaf3;
    box-shadow: 1px 1px 3px #a0b1c3;
    margin-right: 10px;
  }

  .calendar__email-link {
    color: #8ba6d1;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #9cb2da;
    }
  }
`;

export const StyledButtonDelete = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  background: #e76f51; // A red shade
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
