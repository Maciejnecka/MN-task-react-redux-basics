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
  margin: 0 auto; /* Center the list */

  @media (max-width: 820px) {
    padding: 10px;
  }

  .calendar__item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .calendar__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 50px;
    font-size: 16px;
    color: #011622;
    margin-bottom: 1rem;
    padding: 15px;
    border-radius: 4px;
    background-color: #f0f4f8;
    box-shadow: 2px 2px 5px #a0b1c3, -2px -2px 5px #d0e4ff;

    @media (max-width: 820px) {
      width: 80%;
      flex-direction: column;
      margin: 1rem;
    }
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
    white-space: nowrap;
    @media (max-width: 820px) {
      margin: 0.5rem;
    }
  }
  .calendar__arrow {
    @media (max-width: 820px) {
      display: none;
    }
  }

  .calendar__email-link {
    color: #8ba6d1;
    text-decoration: none;
    font-weight: bold;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    max-width: 150px;
    display: block;
    &:hover {
      color: #9cb2da;
    }
    @media (max-width: 820px) {
      margin-bottom: 1.25rem;
      width: 100%;
      text-align: center;
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
    border: 2px solid #e76f51;
    z-index: 10;
    @media (max-width: 820px) {
      width: 70%;
      flex-direction: column;
      text-align: center;
    }
  }

  .delete-paragraph {
    font-size: 16px;
    color: #e76f51;
    font-weight: bold;
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
    @media (max-width: 820px) {
      width: 100%;
      margin-bottom: 0.5rem;
    }
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
