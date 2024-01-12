import styled from 'styled-components';

export const StyledCalendarForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 2rem;
  color: #011622;

  .calendar__form-field {
    width: 80%;
    margin-bottom: 15px;
  }

  .calendar__form-label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .calendar__form-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    background-color: #f8f8f8;
  }

  .calendar__form-error {
    color: #760000;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
  }

  .calendar__form-actions {
    margin-top: 15px;
  }

  .calendar__form-submit {
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

  .calendar__form-submit:hover,
  .calendar__form-submit:focus {
    background: #9cb2da;
    box-shadow: 5px 5px 10px #7a8baa, -5px -5px 10px #9cb2da,
      inset 2px 2px 5px #7a8baa, inset -2px -2px 5px #9cb2da;
  }

  .calendar__form-submit:active {
    background: #7a8baa;
    box-shadow: inset 5px 5px 10px #7a8baa, inset -5px -5px 10px #9cb2da;
  }
`;
