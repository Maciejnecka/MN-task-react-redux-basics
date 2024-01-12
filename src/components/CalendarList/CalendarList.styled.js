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

  .calendar__item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }

  .calendar__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 50px;
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

  .delete-confirmation {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 6px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .delete-paragraph {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  .delete-confirmation__confirm,
  .delete-confirmation__cancel {
    padding: 10px 20px;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 10px;
  }

  .delete-confirmation__confirm {
    background-color: #e76f51;
    color: #fff;
    &:hover {
      background-color: #d85f4c;
    }
  }

  .delete-confirmation__cancel {
    background-color: #bbb;
    color: #333;
    &:hover {
      background-color: #aaa;
    }
  }
`;
