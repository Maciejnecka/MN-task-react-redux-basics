import styled from 'styled-components';

export const StyledCalendarLogin = styled.div`
  background-color: #f3f3f3;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  box-shadow: 8px 8px 15px #7a8baa, -8px -8px 15px #9cb2da,
    inset 5px 5px 10px #7a8baa, inset -5px -5px 10px #9cb2da;
  padding: 20px;

  .calendar__login-field {
    margin-bottom: 15px;
    padding: 10px 20px;
    border-radius: 6px;
    border: 2px solid #8ba6d1;
    outline: none;
  }

  .calendar__login-input {
    width: 50%;
  }
  .calendar__login-label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #011622;
  }

  .calendar__login-error {
    color: #760000;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
  }

  .calendar__login-actions {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  .calendar__login-submit {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 0.3s;
    background: #8ba6d1;
    color: #fff;
    cursor: pointer;
    box-shadow: 8px 8px 15px #7a8baa, -8px -8px 15px #9cb2da,
      inset 5px 5px 10px #7a8baa, inset -5px -5px 10px #9cb2da;
  }

  .calendar__login-submit:hover,
  .calendar__login-submit:focus {
    background: #9cb2da;
    box-shadow: 3px 3px 7px #7a8baa, -3px -3px 7px #9cb2da,
      inset 1px 1px 3px #7a8baa, inset -1px -1px 3px #9cb2da;
  }

  .calendar__login-submit:active {
    background: #7a8baa;
    box-shadow: inset 3px 3px 7px #7a8baa, inset -3px -3px 7px #9cb2da;
  }
`;
